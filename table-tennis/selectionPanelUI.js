import { DoubleSide } from "three";
import { createActionButton, createLabel, getModeName } from "./selectionPanelDom.js";

const activeColor = 'rgba(56, 161, 105, 0.4)';
const defaultColor = 'rgba(255,255,255,0.06)';
export function createAuthoringToolbar({ sport, selector, referentMover }) {
    const baseName = actor => actor.userData.label || actor.name || 'Object';
    const nameCounts = new Map();
    const extensionOwners = new Map();
    sport.actors.forEach(actor => nameCounts.set(baseName(actor), (nameCounts.get(baseName(actor)) || 0) + 1));
    sport.extensionsFromActor.forEach((extensions, owner) => {
        extensions.forEach(extension => extensionOwners.set(extension, owner));
    });
    const actorName = actor => {
        const name = baseName(actor);
        if (nameCounts.get(name) < 2) return name;
        const owner = extensionOwners.get(actor);
        const ownerName = owner && baseName(owner);
        const detail = ownerName && ownerName !== name ? ownerName : actor.name;
        return detail && detail !== name ? `${name} (${detail})` : `${name} (${actor.uuid || sport.actors.indexOf(actor) + 1})`;
    };
    const root = document.createElement('div');
    root.className = 'authoring-ui';
    const toolbar = document.createElement('nav');
    toolbar.className = 'authoring-toolbar';
    toolbar.setAttribute('aria-label', 'Authoring tools');
    const panel = document.createElement('section');
    panel.className = 'authoring-panel';
    panel.hidden = true;
    root.append(toolbar, panel);
    document.body.appendChild(root);

    let activeTool = null;
    let pendingSelection = null;
    let relatedActor = null;
    let endHover = null;
    const toolButtons = new Map();
    const isAvailableVisualizationActor = actor => !sport.isExtension(actor) || sport.isDisplayed(actor);

    function clearHover() {
        if (!endHover) return;
        const cleanup = endHover;
        endHover = null;
        cleanup();
    }

    function button(container, label, action, selected = false) {
        const element = createActionButton(label);
        element.className = 'authoring-action';
        element.style.background = selected ? activeColor : defaultColor;
        element.onclick = action;
        container.appendChild(element);
        return element;
    }

    function view(title, back) {
        clearHover();
        selector.cancelSelection();
        pendingSelection = null;
        relatedActor = null;
        panel.hidden = false;
        panel.replaceChildren();
        const header = document.createElement('div');
        header.className = 'authoring-panel-header';
        header.appendChild(createLabel(title));
        const close = createActionButton('Close');
        close.onclick = closePanel;
        header.appendChild(close);
        panel.appendChild(header);
        if (back) {
            const backButton = button(panel, 'Back', back);
            backButton.className = 'authoring-back';
            backButton.style.background = 'transparent';
        }
        return panel;
    }

    function closePanel() {
        clearHover();
        selector.cancelSelection();
        if (referentMover.mesh !== undefined) referentMover.end();
        pendingSelection = null;
        relatedActor = null;
        panel.hidden = true;
        panel.replaceChildren();
        activeTool = null;
        toolButtons.forEach(element => element.setAttribute('aria-pressed', 'false'));
    }

    function actorButton(container, actor, onSelect) {
        const element = button(container, actorName(actor), onSelect);
        element.onmouseenter = () => {
            clearHover();
            const uniform = actor.material?.uniforms?.isHighLighted;
            if (!uniform) return;
            const previous = uniform.value;
            uniform.value = true;
            endHover = () => { uniform.value = previous; };
        };
        element.onmouseleave = clearHover;
    }

    function selectActor(title, eligible, onSelect, back, listEligible = eligible) {
        view(title, back);
        if (referentMover.mesh !== undefined) referentMover.end();
        const selection = { title, eligible, onSelect, back, listEligible };
        pendingSelection = selection;
        if (sport.directReferentSelection) {
            panel.appendChild(createLabel('Click an actor in the scene, or switch to List mode.'));
            selector.requestSelection(eligible, actor => {
                if (pendingSelection !== selection) return;
                pendingSelection = null;
                onSelect(actor);
            });
        } else {
            const actors = sport.actors.filter(listEligible);
            if (!actors.length) panel.appendChild(createLabel('No eligible actors available.'));
            actors.forEach(actor => actorButton(panel, actor, () => onSelect(actor)));
        }
    }

    function showExtensions(actor) {
        view(`Extensions: ${actorName(actor)}`, extensions);
        const extensionsForActor = sport.extensionsFromActor.get(actor) || [];
        if (!extensionsForActor.length) panel.appendChild(createLabel('No extensions available.'));
        extensionsForActor.forEach(extension => {
            let preview = null;
            const toggle = button(panel, extension.name, () => {
                const displayed = !(preview ? preview.displayed : sport.isDisplayed(extension));
                if (preview) preview.displayed = displayed;
                else sport.display(extension, displayed);
                toggle.style.background = displayed ? activeColor : defaultColor;
                toggle.setAttribute('aria-pressed', String(displayed));
            }, sport.isDisplayed(extension));
            toggle.setAttribute('aria-pressed', String(sport.isDisplayed(extension)));
            toggle.onmouseenter = () => {
                clearHover();
                const materials = new Map();
                const layers = new Map();
                extension.traverse(child => {
                    layers.set(child, child.layers.mask);
                    const childMaterials = Array.isArray(child.material) ? child.material : [child.material];
                    childMaterials.filter(Boolean).forEach(material => {
                        if (materials.has(material)) return;
                        materials.set(material, material.side);
                        material.side = DoubleSide;
                        material.needsUpdate = true;
                    });
                });
                const proxyDisplays = new Map();
                for (let proxy = extension.userData.proxyForSurfaceEffects; proxy; proxy = proxy.userData.proxyForSurfaceEffects) {
                    proxyDisplays.set(proxy, proxy.userData.display);
                }
                const originalDisplay = sport.isDisplayed(extension);
                preview = { displayed: originalDisplay };
                sport.display(extension, true);
                endHover = () => {
                    materials.forEach((side, material) => {
                        material.side = side;
                        material.needsUpdate = true;
                    });
                    sport.display(extension, preview.displayed);
                    if (preview.displayed === originalDisplay) {
                        layers.forEach((mask, child) => { child.layers.mask = mask; });
                        proxyDisplays.forEach((displayed, proxy) => { proxy.userData.display = displayed; });
                    }
                    preview = null;
                };
            };
            toggle.onmouseleave = clearHover;
        });
    }

    function extensions() {
        selectActor('Select an actor to extend', () => true, showExtensions, undefined,
            actor => !sport.isExtension(actor));
    }

    function editParameters(item, back, onChange = () => {}) {
        view(item.name, back);
        const entries = Object.entries(item.params || {});
        if (!entries.length) panel.appendChild(createLabel('No parameters available.'));
        entries.forEach(([name, param]) => {
            const group = document.createElement('div');
            group.className = 'authoring-parameter';
            const label = createLabel(`${name}: ${getModeName(param.enum, param.value)}`);
            group.appendChild(label);
            const options = document.createElement('div');
            options.className = 'authoring-options';
            Object.entries(param.enum || {}).forEach(([key, value]) => {
                const option = button(options, key, () => {
                    if (param.value === value) return;
                    param.value = value;
                    onChange(name, value);
                    label.textContent = `${name}: ${key}`;
                    Array.from(options.children).forEach(child => {
                        const selected = child === option;
                        child.style.background = selected ? activeColor : defaultColor;
                        child.setAttribute('aria-pressed', String(selected));
                    });
                }, param.value === value);
                option.setAttribute('aria-pressed', String(param.value === value));
            });
            group.appendChild(options);
            panel.appendChild(group);
        });
    }

    function visualizations() {
        view('Visualizations');
        button(panel, 'Add visualization', addVisualization);
        button(panel, 'Edit visualization', () => listVisualizations('Edit'));
        button(panel, 'Remove visualization', () => listVisualizations('Remove'));
    }

    function listVisualizations(action) {
        view(`${action} visualization`, visualizations);
        const relationships = sport.visualizations.list();
        if (!relationships.length) panel.appendChild(createLabel('No visualizations created.'));
        relationships.forEach(relationship => {
            const label = `${actorName(relationship.actor1)} / ${actorName(relationship.actor2)} - ${relationship.name}`;
            button(panel, label, () => {
                if (action === 'Remove') {
                    sport.visualizations.remove(relationship);
                    listVisualizations(action);
                } else {
                    sport.visualizations.add(relationship);
                    editParameters(relationship, () => listVisualizations(action));
                }
            });
        });
    }

    function addVisualization() {
        selectActor('Select the first actor', () => true, showRelatedActors, visualizations,
            isAvailableVisualizationActor);
    }

    function showRelatedActors(actor) {
        view(`Related to ${actorName(actor)}`, addVisualization);
        relatedActor = actor;
        const related = sport.relationshipsFromActor.get(actor) || new Map();
        const available = [...related].filter(([other]) =>
            sport.directReferentSelection || isAvailableVisualizationActor(other));
        if (!available.length) panel.appendChild(createLabel('No eligible relationships available for this actor.'));
        available.forEach(([other, types]) => {
            actorButton(panel, other, () => showRelationships(actor, other, types));
        });
    }

    function showRelationships(actor, other, types) {
        const back = () => showRelatedActors(actor);
        view(`Relationships with ${actorName(other)}`, back);
        if (!types.size) panel.appendChild(createLabel('No relationship types available.'));
        types.forEach(relationship => {
            button(panel, relationship.name, () => {
                sport.visualizations.add(relationship);
                editParameters(relationship, () => showRelationships(actor, other, types));
            });
        });
    }

    function manipulation() {
        selectActor('Select an actor to manipulate', () => true, actor => {
            view(`Manipulate: ${actorName(actor)}`, manipulation);
            const buttons = [];
            referentMover.toolNames.forEach(tool => {
                const control = button(panel, tool, () => {
                    if (referentMover.isMeshAndTool(actor, tool)) referentMover.end();
                    else referentMover.setControl(actor, tool);
                    buttons.forEach(({ element, name }) => {
                        const selected = referentMover.isMeshAndTool(actor, name);
                        element.style.background = selected ? activeColor : defaultColor;
                        element.setAttribute('aria-pressed', String(selected));
                    });
                }, referentMover.isMeshAndTool(actor, tool));
                control.setAttribute('aria-pressed', String(referentMover.isMeshAndTool(actor, tool)));
                buttons.push({ element: control, name: tool });
            });
        }, undefined, actor => sport.isExtension(actor) && sport.isDisplayed(actor));
    }

    function characteristics() {
        selectActor('Select an actor', () => true, showCharacteristics, undefined,
            actor => sport.isExtension(actor) && sport.isDisplayed(actor));
    }

    function showCharacteristics(actor) {
        view(`Characteristics: ${actorName(actor)}`, characteristics);
        const items = sport.characteristicsFromActor.get(actor);
        if (!items || !items.size) {
            panel.appendChild(createLabel('No characteristics available.'));
            return;
        }
        items.forEach((characteristic, type) => {
            button(panel, characteristic.name, () => editParameters(
                characteristic,
                () => showCharacteristics(actor),
                (name, value) => sport.setCharacteristic(actor, type, value, name),
            ));
        });
    }

    [
        ['Extensions', extensions],
        ['Visualizations', visualizations],
        ['Manipulation', manipulation],
        ['Characteristics', characteristics],
    ].forEach(([name, open]) => {
        const element = button(toolbar, name, () => {
            if (activeTool === name && !panel.hidden) {
                closePanel();
                return;
            }
            if (referentMover.mesh !== undefined) referentMover.end();
            activeTool = name;
            toolButtons.forEach((other, key) => other.setAttribute('aria-pressed', String(key === name)));
            open();
        });
        element.setAttribute('aria-pressed', 'false');
        toolButtons.set(name, element);
    });

    const selectionMode = button(toolbar, '', () => {
        sport.directReferentSelection = !sport.directReferentSelection;
        updateSelectionMode();
        if (pendingSelection) {
            const { title, eligible, onSelect, back, listEligible } = pendingSelection;
            selectActor(title, eligible, onSelect, back, listEligible);
        } else if (relatedActor) {
            showRelatedActors(relatedActor);
        }
    });
    function updateSelectionMode() {
        selectionMode.textContent = `Selection: ${sport.directReferentSelection ? 'Direct' : 'List'}`;
        selectionMode.title = 'Switch between clicking an actor and choosing from a list';
    }
    updateSelectionMode();

    return {
        dispose() {
            closePanel();
            root.remove();
        },
    };
}
