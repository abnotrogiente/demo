import test from 'node:test';
import assert from 'node:assert/strict';
import { BackSide, DoubleSide } from 'three';
import { createAuthoringToolbar } from './selectionPanelUI.js';
import { VisualizationRegistry } from './visualizationRegistry.js';

class Element {
    constructor(tagName) {
        this.tagName = tagName.toUpperCase();
        this.children = [];
        this.style = {};
        this.attributes = {};
        this.hidden = false;
        this.textContent = '';
    }

    appendChild(child) {
        this.children.push(child);
        child.parentElement = this;
        return child;
    }

    append(...children) {
        children.forEach(child => this.appendChild(child));
    }

    replaceChildren(...children) {
        this.children = [];
        this.append(...children);
    }

    setAttribute(name, value) {
        this.attributes[name] = value;
    }

    remove() {
        this.parentElement.children = this.parentElement.children.filter(child => child !== this);
    }
}

function findButton(element, text) {
    if (element.tagName === 'BUTTON' && element.textContent === text) return element;
    for (const child of element.children) {
        const found = findButton(child, text);
        if (found) return found;
    }
}

function click(element, text) {
    const target = findButton(element, text);
    assert.ok(target, `Button not found: ${text}`);
    target.onclick();
}

function fixture(duplicateExtensions = false) {
    const body = new Element('body');
    globalThis.document = { body, createElement: tag => new Element(tag) };
    const actor = { name: 'Table', userData: {}, material: { uniforms: { isHighLighted: { value: false } } } };
    const other = { name: 'Ball', userData: {}, material: { uniforms: { isHighLighted: { value: false } } } };
    const extension = {
        name: 'Proxy',
        userData: { display: duplicateExtensions, isExtension: true },
        layers: { mask: 2 },
        material: { side: BackSide, uniforms: { isHighLighted: { value: false } } },
        traverse(callback) { callback(this); },
    };
    const relationship = {
        actor1: actor,
        actor2: other,
        name: 'Projection',
        params: {
            trace: { value: false, default: false, enum: { ENABLED: true, DISABLED: false } },
        },
    };
    const types = new Map([[1, relationship]]);
    const relationshipsFromActor = new Map([
        [actor, new Map([[other, types]])],
        [other, new Map([[actor, types]])],
        [extension, new Map()],
    ]);
    const characteristic = {
        name: 'Camera Facing',
        params: { facing: { value: false, default: false, enum: { ENABLED: true, DISABLED: false } } },
    };
    const sport = {
        actors: [actor, other, extension],
        directReferentSelection: true,
        relationshipsFromActor,
        extensionsFromActor: new Map([[actor, [extension]]]),
        characteristicsFromActor: new Map([[actor, new Map([[0, characteristic]])]]),
        visualizations: new VisualizationRegistry(relationshipsFromActor),
        isExtension: item => !!item.userData.isExtension,
        isDisplayed: item => !!item.userData.display,
        display: (item, value) => {
            item.userData.display = value;
            item.traverse?.(child => { child.layers.mask = value ? 1 : 2; });
        },
        setCharacteristic: (item, type, value, name) => {
            sport.characteristicsFromActor.get(item).get(type).params[name].value = value;
            sport.lastCharacteristic = [item, type, value, name];
        },
    };
    if (duplicateExtensions) {
        const secondExtension = { name: 'Proxy', userData: { display: true, isExtension: true } };
        sport.actors.push(secondExtension);
        sport.extensionsFromActor.set(other, [secondExtension]);
    }
    const selector = {
        cancelSelection() { this.request = null; },
        requestSelection(eligible, onSelect) { this.request = { eligible, onSelect }; },
        select(item) {
            assert.ok(this.request.eligible(item));
            const callback = this.request.onSelect;
            this.request = null;
            callback(item);
        },
    };
    const mover = {
        toolNames: ['rotate', 'translate', 'scale'],
        isMeshAndTool: (item, tool) => mover.mesh === item && mover.tool === tool,
        setControl(item, tool) { this.mesh = item; this.tool = tool; },
        end() { this.mesh = undefined; this.tool = undefined; },
    };
    const toolbar = createAuthoringToolbar({ sport, selector, referentMover: mover });
    return { body, actor, other, extension, relationship, sport, selector, mover, toolbar };
}

test('registry deduplicates relationships, tracks external changes and suppresses removed preferences', () => {
    const f = fixture();
    assert.deepEqual(f.sport.visualizations.list(), []);
    f.relationship.params.trace.value = true;
    assert.deepEqual(f.sport.visualizations.list(), [f.relationship]);
    f.sport.visualizations.remove(f.relationship);
    assert.equal(f.relationship.params.trace.value, false);
    assert.equal(f.sport.visualizations.isSuppressed(f.relationship), true);
    f.relationship.params.trace.value = true;
    assert.equal(f.sport.visualizations.isSuppressed(f.relationship), false);
    f.sport.visualizations.remove(f.relationship);
    f.sport.visualizations.add(f.relationship);
    assert.deepEqual(f.sport.visualizations.list(), [f.relationship]);
    assert.equal(f.sport.visualizations.isSuppressed(f.relationship), false);
    assert.equal(f.sport.visualizations.isManuallyControlled(f.relationship), true);
    f.toolbar.dispose();
});

test('toolbar switches selection modes and toggles extensions', () => {
    const f = fixture();
    click(f.body, 'Extensions');
    assert.ok(f.selector.request);
    click(f.body, 'Selection: Direct');
    assert.equal(f.selector.request, null);
    click(f.body, 'Table');
    click(f.body, 'Proxy');
    assert.equal(f.extension.userData.display, true);
    click(f.body, 'Proxy');
    assert.equal(f.extension.userData.display, false);
    click(f.body, 'Back');
    click(f.body, 'Selection: List');
    assert.ok(f.selector.request);
    f.selector.select(f.actor);
    assert.ok(findButton(f.body, 'Proxy'));
    f.toolbar.dispose();
    assert.equal(f.body.children.length, 0);
    assert.equal(f.selector.request, null);
});

test('toolbar adds, edits and removes the same relationship from either actor', () => {
    const f = fixture();
    click(f.body, 'Visualizations');
    click(f.body, 'Add visualization');
    f.selector.select(f.other);
    click(f.body, 'Table');
    click(f.body, 'Projection');
    assert.deepEqual(f.sport.visualizations.list(), [f.relationship]);
    click(f.body, 'ENABLED');
    assert.equal(f.relationship.params.trace.value, true);
    click(f.body, 'Visualizations');
    click(f.body, 'Visualizations');
    click(f.body, 'Edit visualization');
    click(f.body, 'Table / Ball - Projection');
    click(f.body, 'DISABLED');
    assert.equal(f.relationship.params.trace.value, false);
    click(f.body, 'Back');
    click(f.body, 'Back');
    click(f.body, 'Remove visualization');
    click(f.body, 'Table / Ball - Projection');
    assert.deepEqual(f.sport.visualizations.list(), []);
    assert.equal(f.sport.visualizations.isSuppressed(f.relationship), true);
    f.toolbar.dispose();
});

test('manipulation and characteristics operate on selected actors', () => {
    const f = fixture();
    click(f.body, 'Manipulation');
    f.selector.select(f.actor);
    click(f.body, 'translate');
    assert.equal(f.mover.mesh, f.actor);
    click(f.body, 'Characteristics');
    assert.equal(f.mover.mesh, undefined);
    f.selector.select(f.actor);
    click(f.body, 'Camera Facing');
    click(f.body, 'ENABLED');
    assert.deepEqual(f.sport.lastCharacteristic, [f.actor, 0, true, 'facing']);
    f.toolbar.dispose();
});

test('actor lists distinguish extensions with identical names', () => {
    const f = fixture(true);
    click(f.body, 'Selection: Direct');
    click(f.body, 'Characteristics');
    assert.ok(findButton(f.body, 'Proxy (Table)'));
    assert.ok(findButton(f.body, 'Proxy (Ball)'));
    f.toolbar.dispose();
});

test('extension preview restores culling and visibility, including after toggling or leaving the view', () => {
    const f = fixture();
    const child = { layers: { mask: 8 } };
    f.extension.traverse = callback => { callback(f.extension); callback(child); };
    click(f.body, 'Extensions');
    f.selector.select(f.actor);
    const toggle = findButton(f.body, 'Proxy');
    toggle.onmouseenter();
    assert.equal(f.extension.material.side, DoubleSide);
    assert.equal(f.extension.userData.display, true);
    toggle.onmouseleave();
    assert.equal(child.layers.mask, 8);
    assert.equal(f.extension.userData.display, false);
    toggle.onmouseenter();
    toggle.onclick();
    toggle.onmouseleave();
    assert.equal(f.extension.material.side, BackSide);
    assert.equal(f.extension.userData.display, true);
    toggle.onmouseenter();
    toggle.onclick();
    assert.equal(f.extension.userData.display, true);
    click(f.body, 'Back');
    assert.equal(f.extension.material.side, BackSide);
    assert.equal(f.extension.userData.display, false);
    f.toolbar.dispose();
});

test('list selection highlights actors and applies the tool-specific filters', () => {
    const f = fixture();
    click(f.body, 'Selection: Direct');
    click(f.body, 'Extensions');
    assert.ok(findButton(f.body, 'Table'));
    assert.equal(findButton(f.body, 'Proxy'), undefined);
    const tableButton = findButton(f.body, 'Table');
    tableButton.onmouseenter();
    assert.equal(f.actor.material.uniforms.isHighLighted.value, true);
    tableButton.onmouseleave();
    assert.equal(f.actor.material.uniforms.isHighLighted.value, false);
    tableButton.onmouseenter();
    tableButton.onclick();
    assert.equal(f.actor.material.uniforms.isHighLighted.value, false);
    assert.equal(findButton(f.body, 'Back').className, 'authoring-back');

    click(f.body, 'Manipulation');
    assert.equal(findButton(f.body, 'Table'), undefined);
    assert.equal(findButton(f.body, 'Proxy'), undefined);
    click(f.body, 'Characteristics');
    assert.equal(findButton(f.body, 'Proxy'), undefined);
    f.sport.display(f.extension, true);
    click(f.body, 'Manipulation');
    assert.ok(findButton(f.body, 'Proxy'));
    click(f.body, 'Characteristics');
    const proxyButton = findButton(f.body, 'Proxy');
    assert.ok(proxyButton);
    proxyButton.onmouseenter();
    assert.equal(f.extension.material.uniforms.isHighLighted.value, true);
    click(f.body, 'Visualizations');
    assert.equal(f.extension.material.uniforms.isHighLighted.value, false);
    click(f.body, 'Add visualization');
    assert.ok(findButton(f.body, 'Table'));
    assert.ok(findButton(f.body, 'Proxy'));
    f.toolbar.dispose();
});

test('visualization actor lists exclude hidden extensions and refresh when the mode changes', () => {
    const f = fixture();
    f.sport.relationshipsFromActor.get(f.actor).set(f.extension, new Map([[1, f.relationship]]));
    click(f.body, 'Visualizations');
    click(f.body, 'Add visualization');
    assert.ok(f.selector.request.eligible(f.extension));
    click(f.body, 'Selection: Direct');
    assert.ok(findButton(f.body, 'Table'));
    assert.ok(findButton(f.body, 'Ball'));
    assert.equal(findButton(f.body, 'Proxy'), undefined);
    click(f.body, 'Table');
    assert.ok(findButton(f.body, 'Ball'));
    assert.equal(findButton(f.body, 'Proxy'), undefined);
    click(f.body, 'Selection: List');
    assert.ok(findButton(f.body, 'Proxy'));
    click(f.body, 'Selection: Direct');
    assert.equal(findButton(f.body, 'Proxy'), undefined);
    click(f.body, 'Back');
    f.sport.display(f.extension, true);
    click(f.body, 'Table');
    assert.ok(findButton(f.body, 'Proxy'));
    f.toolbar.dispose();
});
