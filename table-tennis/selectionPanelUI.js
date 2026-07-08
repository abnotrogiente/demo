import { DoubleSide } from "three";
import { sport } from "./sport";

function applyPanelStyles(element, styles) {
    Object.entries(styles).forEach(([key, value]) => {
        element.style[key] = value;
    });
}

function createLabel(text, baseStyles = {}) {
    const element = document.createElement('div');
    element.textContent = text;
    applyPanelStyles(element, baseStyles);
    return element;
}

function createActionButton(text, baseStyles = {}) {
    const button = document.createElement('button');
    button.textContent = text;
    applyPanelStyles(button, {
        padding: '6px 8px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        textAlign: 'left',
        background: 'rgba(255,255,255,0.06)',
        color: '#fff',
        ...baseStyles,
    });
    return button;
}

function getModeName(modesObj, value) {
    if (!modesObj) return String(value);
    if (Array.isArray(modesObj)) return String(value);
    for (const [key, modeValue] of Object.entries(modesObj)) {
        if (modeValue === value) return key;
    }
    return String(value);
}

function addActorsButtons(container, interactionsMap, closeInteractionPanel, closeModePanel, onInteractionPanelCreated, onModePanelCreated) {
    container.appendChild(createLabel('Actors:', { fontWeight: '500', marginBottom: '4px' }));

    const actorsList = document.createElement('div');
    applyPanelStyles(actorsList, {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
    });

    interactionsMap.forEach((interactions, otherActorName) => {
        const actorBtn = createActionButton(otherActorName);
        actorBtn.onmouseenter = () => {
            const otherActor = sport.actorByName.get(otherActorName);
            otherActor.material.uniforms.isHighLighted.value = true;
        };
        actorBtn.onmouseleave = () => {
            const otherActor = sport.actorByName.get(otherActorName);
            otherActor.material.uniforms.isHighLighted.value = false;
        };
        actorBtn.onclick = (event) => {
            closeInteractionPanel();
            closeModePanel();

            const interactionPanel = createRightPanel(container.getBoundingClientRect(), event.clientY, `Interactions with ${otherActorName}`);
            if (typeof onInteractionPanelCreated === 'function') {
                onInteractionPanelCreated(interactionPanel);
            }

            if (!interactions || interactions.length === 0) {
                interactionPanel.appendChild(createLabel('No interactions available', { opacity: '0.85' }));
            } else {
                interactions.forEach(interaction => {
                    const interactionName = interaction.name;
                    const interBtn = createActionButton(interactionName, {
                        display: 'block',
                        width: '100%',
                        marginBottom: '6px',
                        background: 'rgba(255,255,255,0.04)',
                    });

                    interBtn.onclick = (clickEvent) => {
                        clickEvent.stopPropagation();
                        closeModePanel();

                        const modePanel = createRightPanel(interactionPanel.getBoundingClientRect(), clickEvent.clientY, interactionName);
                        if (typeof onModePanelCreated === 'function') {
                            onModePanelCreated(modePanel);
                        }

                        const paramEntries = Object.entries(interaction.params || {}).length > 0
                            ? Object.entries(interaction.params || {})
                            : (interaction.enum ? [['value', { value: interaction.value, enum: interaction.enum }]] : []);

                        if (paramEntries.length === 0) {
                            modePanel.appendChild(createLabel('No parameters', {
                                opacity: '0.8',
                                fontSize: '12px',
                            }));
                        } else {
                            paramEntries.forEach(([paramName, paramConfig]) => {
                                const paramRow = document.createElement('div');
                                applyPanelStyles(paramRow, {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px',
                                });

                                const paramLabel = createLabel(`${paramName}: ${getModeName(paramConfig.enum, paramConfig.value)}`, {
                                    fontSize: '12px',
                                    opacity: '0.9',
                                });

                                const paramOptions = document.createElement('div');
                                applyPanelStyles(paramOptions, {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px',
                                });

                                Object.entries(paramConfig.enum || {}).forEach(([modeKey, modeValue]) => {
                                    const modeBtn = createActionButton(modeKey, {
                                        padding: '4px 6px',
                                        background: (paramConfig.value === modeValue) ? 'rgba(56, 161, 105, 0.18)' : 'rgba(255,255,255,0.04)',
                                    });

                                    modeBtn.onclick = (ev) => {
                                        ev.stopPropagation();
                                        paramConfig.value = modeValue;
                                        paramLabel.textContent = `${paramName}: ${modeKey}`;
                                        Array.from(paramOptions.children).forEach(child => child.style.background = 'rgba(255,255,255,0.04)');
                                        modeBtn.style.background = 'rgba(56, 161, 105, 0.18)';
                                    };

                                    paramOptions.appendChild(modeBtn);
                                });

                                paramRow.appendChild(paramLabel);
                                paramRow.appendChild(paramOptions);
                                modePanel.appendChild(paramRow);
                            });
                        }
                    };

                    interactionPanel.appendChild(interBtn);
                });
            }
        };

        actorsList.appendChild(actorBtn);
    });

    container.appendChild(actorsList);
}

function addExtensionsButtons(container, selectedMesh) {
    container.appendChild(createLabel('Extensions:', { fontWeight: '500', marginBottom: '4px' }));

    const extensionsList = document.createElement('div');
    applyPanelStyles(extensionsList, {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
    });
    const extensions = sport.extensionsFromActor.get(selectedMesh);
    if (!extensions) return;
    extensions.forEach(extension => {
        const extensionButton = createActionButton(extension.name, {
            background: sport.isDisplayed(extension) ? 'rgba(56, 161, 105, 0.18)' : 'rgba(255,255,255,0.04)',

        });
        extensionButton.onmouseenter = () => {
            // extension.material.uniforms.isHighLighted.value = true;
            // extension.material.needsUpdate = true;
            extension.userData.memoSide = extension.material.side;
            extension.material.side = DoubleSide;
            // extension.material.needsUpdate = true;
            extension.userData.memoDisplay = sport.isDisplayed(extension);
            sport.display(extension, true);
            // extension.visible = true;
        };
        extensionButton.onmouseleave = () => {
            extension.material.side = extension.userData.memoSide;
            extension.material.uniforms.isHighLighted.value = false;
            sport.display(extension, extension.userData.memoDisplay);
            // extension.visible = extension.userData.memoVisible;

        };
        extensionButton.onclick = (event) => {
            extension.userData.memoDisplay = !extension.userData.memoDisplay;
            sport.display(extension, extension.userData.memoDisplay);
            // extension.layers.set(extension.userData.memoVisible ? 0 : 1);
            // extension.visible = extension.userData.memoVisible;
            extensionButton.style.background = (sport.isDisplayed(extension)) ? 'rgba(56, 161, 105, 0.18)' : 'rgba(255,255,255,0.04)';
        }



        extensionsList.appendChild(extensionButton);
    });
    container.appendChild(extensionsList);
}

export function fitSelectionPanelToViewport(container) {
    if (!container || !container.isConnected) return;

    const style = getComputedStyle(container);
    const parent = container.parentElement;
    const parentRect = style.position === 'fixed'
        ? { left: 0, top: 0 }
        : (parent?.getBoundingClientRect() || { left: 0, top: 0 });

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const rect = container.getBoundingClientRect();
    const padding = 8;

    const overflowsLeft = rect.left < padding;
    const overflowsRight = rect.right > viewportWidth - padding;
    const overflowsTop = rect.top < padding;
    const overflowsBottom = rect.bottom > viewportHeight - padding;

    if (!overflowsLeft && !overflowsRight && !overflowsTop && !overflowsBottom) return;

    let nextLeft = rect.left;
    let nextTop = rect.top;

    if (overflowsLeft) nextLeft = padding;
    if (overflowsRight) nextLeft = viewportWidth - rect.width - padding;
    if (overflowsTop) nextTop = padding;
    if (overflowsBottom) nextTop = viewportHeight - rect.height - padding;

    if (style.position === 'fixed') {
        container.style.left = `${nextLeft}px`;
        container.style.top = `${nextTop}px`;
    } else {
        container.style.left = `${nextLeft - parentRect.left}px`;
        container.style.top = `${nextTop - parentRect.top}px`;
    }
}

export function createRightPanel(anchorRect, cursorY, titleText) {
    const panel = document.createElement('div');
    applyPanelStyles(panel, {
        position: 'fixed',
        minWidth: '240px',
        maxWidth: '320px',
        background: 'rgba(0,0,0,0.75)',
        color: '#fff',
        padding: '8px 10px',
        borderRadius: '6px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '13px',
        zIndex: '1000',
        maxHeight: 'calc(100vh - 16px)',
        overflowY: 'auto',
        boxSizing: 'border-box',
        left: `${anchorRect.right + 8}px`,
        top: `${Math.min(Math.max(cursorY, 8), window.innerHeight - 32)}px`,
    });

    const title = createLabel(titleText, {
        fontWeight: '600',
        marginBottom: '6px',
    });
    panel.appendChild(title);

    document.body.appendChild(panel);
    requestAnimationFrame(() => fitSelectionPanelToViewport(panel));
    return panel;
}

export function createSelectionPanel({
    selectedMesh,
    mouse,
    parent,
    closeSelectionPanel,
    closeInteractionPanel,
    closeModePanel,
    createRightPanel,
    onInteractionPanelCreated,
    onModePanelCreated,
}) {
    const interactionsMap = sport.interactionsFromActor.get(selectedMesh);

    const container = document.createElement('div');
    container.id = 'selection-pannel';
    container.dataset.meshUuid = selectedMesh.uuid;
    applyPanelStyles(container, {
        position: 'fixed',
        left: `${100 * (mouse.x / 2 + .5)}%`,
        top: `${100 * (-mouse.y / 2 + .5)}%`,
        background: 'rgba(0,0,0,0.75)',
        color: '#fff',
        padding: '8px 10px',
        borderRadius: '6px',
        fontFamily: 'Arial, sans-serif',
        fontSize: '13px',
        zIndex: '1000',
        maxHeight: 'calc(100vh - 16px)',
        overflowY: 'auto',
        boxSizing: 'border-box',
        minWidth: '220px',
        transform: 'translateX(0)',
    });

    container.appendChild(createLabel(`Selected: ${selectedMesh.name || 'object'}`, {
        fontWeight: '600',
        marginBottom: '6px',
    }));

    if (interactionsMap.size === 0) {
        container.appendChild(createLabel('No interactions defined', { opacity: '0.85' }));
    } else {

    }

    addActorsButtons(container, interactionsMap, closeInteractionPanel, closeModePanel, onInteractionPanelCreated, onModePanelCreated);

    addExtensionsButtons(container, selectedMesh);
    // const close = createActionButton('Close', {
    //     marginTop: '8px',
    //     padding: '4px 8px',
    // });
    // close.onclick = () => closeSelectionPanel();
    // container.appendChild(close);

    parent.appendChild(container);
    requestAnimationFrame(() => fitSelectionPanelToViewport(container));
    return container;
}
