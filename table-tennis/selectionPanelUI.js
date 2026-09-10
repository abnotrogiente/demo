import { DoubleSide, Mesh } from "three";
import { sport } from "./sport";
import { ReferentsCharacteristics } from "./constants";
import { referentScoring } from "./referent-selection";
import {
    applyPanelStyles,
    createActionButton,
    createLabel,
    createRightPanel,
    fitSelectionPanelToViewport,
    getModeName,
} from "./selectionPanelDom";
import { referentMover } from "./manipulation";

export { createRightPanel, fitSelectionPanelToViewport } from "./selectionPanelDom";


function renderInlineView(container, title, onBack, renderContent) {
    container.replaceChildren();
    container.appendChild(createLabel(title, {
        fontWeight: '600',
        marginBottom: '8px',
    }));

    const backButton = createActionButton('Back', {
        display: 'block',
        marginBottom: '8px',
        background: 'rgba(255,255,255,0.1)',
    });
    backButton.onclick = onBack;
    container.appendChild(backButton);
    renderContent(container);
}

function createInteractionButton(interaction, parent, closeModePanel, onBack) {
    //TODO enregistrer dans la variable de sport la préférence si le scoring est activé
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

        renderInlineView(parent, interactionName, onBack, modePanel => {
            const paramEntries = Object.entries(interaction.params || {}).length > 0
                ? Object.entries(interaction.params || {})
                : (interaction.enum ? [['value', { value: interaction.value, enum: interaction.enum }]] : []);

            if (paramEntries.length === 0) {
                modePanel.appendChild(createLabel('No parameters', {
                    opacity: '0.8',
                    fontSize: '12px',
                }));
                return;
            }

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
        });
    };
    parent.appendChild(interBtn);
}
function addDisableButton(container, selectedMesh, closeInteractionPanel, closeModePanel) {
    container.appendChild(createLabel('', { fontWeight: '500', marginBottom: '4px' }));
    const btnDiv = document.createElement('div');
    applyPanelStyles(btnDiv, {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
    });
    const disableBtn = createActionButton("DISPLAYED", {
        background: sport.isDisplayed(selectedMesh) ? 'rgba(56, 161, 105, 0.18)' : 'rgba(255,255,255,0.04)',

    });

    disableBtn.onclick = (event) => {
        closeInteractionPanel();
        closeModePanel();

        sport.display(selectedMesh, !selectedMesh.userData.display);
        // referentScoring.bestMeshes[referentScoring.bestMeshes.indexOf(selectedMesh)] = null;

        disableBtn.style.background = sport.isDisplayed(selectedMesh) ? 'rgba(56, 161, 105, 0.18)' : 'rgba(255,255,255,0.04)';
    }

    btnDiv.appendChild(disableBtn);
    container.appendChild(btnDiv);

}
function addActorsButtons(container, selectedMesh, closeInteractionPanel, closeModePanel, onBack) {
    container.appendChild(createLabel((referentScoring.currentMode != referentScoring.modes.DISABLED ? 'Relationship types' : 'Actors:'), { fontWeight: '500', marginBottom: '4px' }));

    /**@type {Map<Mesh, Map<string, Map<int,SportActorInteraction>>>} */
    const interactionsMap = sport.interactionsFromActor.get(selectedMesh) || new Map();
    if (interactionsMap.size === 0) {
        container.appendChild(createLabel('No interactions defined', { opacity: '0.85' }));
    }
    const actorsList = document.createElement('div');
    applyPanelStyles(actorsList, {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
    });

    if (referentScoring.currentMode == referentScoring.modes.DISABLED) {

        interactionsMap.forEach((interactions, otherActor) => {
            const otherActorName = otherActor.name;
            const actorBtn = createActionButton(otherActorName);
            actorBtn.onmouseenter = () => {
                const otherActor = sport.actorByName.get(otherActorName);
                otherActor.material.uniforms.isHighLighted.value = true;
            };
            actorBtn.onmouseleave = () => {
                const otherActor = sport.actorByName.get(otherActorName);
                otherActor.material.uniforms.isHighLighted.value = false;
            };
            // actorBtn.on = () => {
            //     otherActor.material.uniforms.isHighLighted.value = false;

            // }
            actorBtn.onclick = (event) => {
                event.stopPropagation();
                closeInteractionPanel();
                closeModePanel();

                const showActors = () => {
                    renderInlineView(container, 'Actors', onBack, actorsPanel => {
                        addActorsButtons(actorsPanel, selectedMesh, closeInteractionPanel, closeModePanel, onBack);
                    });
                };

                const showInteractions = () => renderInlineView(container, `Interactions with ${otherActorName}`, showActors, interactionPanel => {
                    if (!interactions || interactions.size === 0) {
                        interactionPanel.appendChild(createLabel('No interactions available', { opacity: '0.85' }));
                    } else {
                        interactions.forEach(interaction => {
                            createInteractionButton(interaction, interactionPanel, closeModePanel, showInteractions);
                        });
                    }
                });

                showInteractions();
            };

            actorsList.appendChild(actorBtn);
        });

    }

    else {
        if (!sport.visPreferences.has(selectedMesh)) return;
        sport.visPreferences.get(selectedMesh).forEach((preference, type) => {
            const interBtn = createInteractionButton(preference, actorsList, closeModePanel, onBack);

        });

    }

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
            // extension.userData.shader.uniforms.isHighLighted.value = true;
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
            // extension.material.uniforms.isHighLighted.value = false;
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

/**
 * 
 * @param {HTMLElement} container 
 * @param {Mesh} selectedMesh 
 * @returns 
 */
function addCharacteristicsButton(container, selectedMesh) {
    // if (!sport.isProxyExtension(selectedMesh)) return;
    if (!sport.isExtension(selectedMesh)) return;
    container.appendChild(createLabel('Characteristics:', { fontWeight: '500', marginBottom: '4px' }));

    const characteristicsList = document.createElement('div');
    applyPanelStyles(characteristicsList, {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
    });

    Object.entries(ReferentsCharacteristics).forEach(([name, characteristic]) => {
        console.log("creating button : " + name);
        const characteristicButton = createActionButton(name, {
            background: sport.hasCharacteristic(selectedMesh, characteristic) ? 'rgba(56, 161, 105, 0.18)' : 'rgba(255,255,255,0.04)'
        }
        );
        characteristicButton.onmousedown = () => {
            sport.setCharacteristic(selectedMesh, characteristic, !sport.hasCharacteristic(selectedMesh, characteristic));
            characteristicButton.style.background = sport.hasCharacteristic(selectedMesh, characteristic) ? 'rgba(56, 161, 105, 0.18)' : 'rgba(255,255,255,0.04)';
        }
        characteristicsList.appendChild(characteristicButton);
    });
    container.appendChild(characteristicsList);
}

function addManipulationButtons(container, selectedMesh) {
    if (!sport.isExtension(selectedMesh)) return;
    container.appendChild(createLabel('Manipulations:', { fontWeight: '500', marginBottom: '4px' }));

    const manipulationsList = document.createElement('div');
    applyPanelStyles(manipulationsList, {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
    });


    // TODO foreach manipulation
    // console.log("creating button : " + name);
    const buttons = [];
    referentMover.toolNames.forEach(toolName => {

        const manipulationButton = createActionButton(toolName, {
            background: referentMover.isMeshAndTool(selectedMesh, toolName) ? 'rgba(56, 161, 105, 0.18)' : 'rgba(255,255,255,0.04)'
        }
        );
        buttons.push(manipulationButton);
        manipulationButton.onmousedown = () => {
            if (!referentMover.isMeshAndTool(selectedMesh, toolName)) referentMover.setControl(selectedMesh, toolName);
            else referentMover.end();
            buttons.forEach(button => button.style.background = 'rgba(255,255,255,0.04)');
            manipulationButton.style.background = referentMover.isMeshAndTool(selectedMesh, toolName) ? 'rgba(56, 161, 105, 0.18)' : 'rgba(255,255,255,0.04)';
        }
        manipulationsList.appendChild(manipulationButton);
    });

    container.appendChild(manipulationsList);


}

const categoryMenuStyles = {
    position: 'fixed',
    width: '220px',
    height: '220px',
    padding: '0',
    background: 'rgba(0,0,0,0.72)',
    border: '1px solid rgba(255,255,255,0.18)',
    borderRadius: '50%',
    boxSizing: 'border-box',
    overflow: 'hidden',
    transform: 'translate(-50%, -50%)',
};

const categoryButtonStyles = {
    position: 'absolute',
    width: '76px',
    height: '76px',
    padding: '8px',
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,0.22)',
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: '1.15',
    transform: 'translate(-50%, -50%)',
};

function configureCategoryView(container, useRadialMenu) {
    applyPanelStyles(container, useRadialMenu
        ? categoryMenuStyles
        : {
            ...categoryMenuStyles,
            position: 'relative',
            transform: 'none',
        });
    container.replaceChildren();
}

function configureDetailView(container, useRadialMenu) {
    applyPanelStyles(container, {
        position: useRadialMenu ? 'fixed' : 'relative',
        width: 'auto',
        height: 'auto',
        minWidth: '220px',
        maxWidth: '320px',
        padding: '8px 10px',
        background: 'rgba(0,0,0,0.75)',
        border: 'none',
        borderRadius: '6px',
        overflow: 'auto',
        transform: useRadialMenu ? 'translateX(0)' : 'none',
        boxSizing: 'border-box',
    });
    container.replaceChildren();
}

function addCategoryButton(container, label, position, onClick) {
    const button = createActionButton(label, {
        ...categoryButtonStyles,
        left: `${position.left}%`,
        top: `${position.top}%`,
    });
    button.onclick = onClick;
    container.appendChild(button);
}

function addSelectedActorContent(container, selectedMesh, closeInteractionPanel, closeModePanel, onInteractionPanelCreated, onModePanelCreated, isProposedReferent = false, useRadialMenu = true) {
    if (isProposedReferent) {
        container.appendChild(createLabel(`Selected: ${selectedMesh.name || 'object'}`, {
            fontWeight: '600',
            marginBottom: '6px',
        }));
        addDisableButton(container, selectedMesh, closeInteractionPanel, closeModePanel);
        return;
    }

    const showCategory = (category, addContent) => {
        configureDetailView(container, useRadialMenu);
        container.appendChild(createLabel(category, {
            fontWeight: '600',
            marginBottom: '8px',
        }));

        const backButton = createActionButton('Back', {
            display: 'block',
            marginBottom: '8px',
            background: 'rgba(255,255,255,0.1)',
        });
        backButton.onclick = () => addCategoryMenu();
        container.appendChild(backButton);
        addContent(container);
        requestAnimationFrame(() => fitSelectionPanelToViewport(container));
    };

    const addCategoryMenu = () => {
        configureCategoryView(container, useRadialMenu);
        addCategoryButton(container, 'Actors', { left: 50, top: 16 }, () => showCategory(
            'Actors',
            content => addActorsButtons(content, selectedMesh, closeInteractionPanel, closeModePanel, addCategoryMenu),
        ));
        addCategoryButton(container, 'Extensions', { left: 82, top: 50 }, () => showCategory(
            'Extensions',
            content => addExtensionsButtons(content, selectedMesh),
        ));
        addCategoryButton(container, 'Characteristics', { left: 50, top: 82 }, () => showCategory(
            'Characteristics',
            content => addCharacteristicsButton(content, selectedMesh),
        ));
        addCategoryButton(container, 'Manipulations', { left: 18, top: 50 }, () => showCategory(
            'Manipulations',
            content => addManipulationButtons(content, selectedMesh),
        ));
    };

    addCategoryMenu();

}

function addProposedReferentsList(container, onActorSelected) {
    container.appendChild(createLabel('Proposed Referents', { fontWeight: '600', marginBottom: '6px' }));

    const actorsList = document.createElement('div');
    applyPanelStyles(actorsList, {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
    });
    referentScoring.bestMeshes.forEach(referent => {
        if (!referent) return;
        const actorButton = createActionButton(referent.name || 'object', {
            background: 'rgba(255,255,255,0.04)',
        });

        actorButton.onmouseenter = () => {
            referent.material.uniforms.isHighLighted.value = true;
        };
        actorButton.onmouseleave = () => {
            referent.material.uniforms.isHighLighted.value = false;
        };
        actorButton.onclick = () => {
            Array.from(actorsList.children).forEach(button => {
                if (button.tagName === 'BUTTON') button.style.background = 'rgba(255,255,255,0.04)';
            });
            actorButton.style.background = 'rgba(56, 161, 105, 0.18)';
            onActorSelected(referent, actorButton, actorsList, true);
        };
        actorsList.appendChild(actorButton);
    });

    container.appendChild(actorsList);
}

function addActorList(container, onActorSelected, physical = true) {
    container.appendChild(createLabel((physical ? "" : "Non ") + 'Physical Referents:', { fontWeight: '600', marginBottom: '6px' }));

    const actorsList = document.createElement('div');
    applyPanelStyles(actorsList, {
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
    });

    sport.actors.forEach(actor => {
        if (!(physical && !sport.isExtension(actor) || !physical && sport.isExtension(actor))) return;
        const actorButton = createActionButton(actor.name || 'object', {
            background: 'rgba(255,255,255,0.04)',
        });
        actorButton.onclick = () => {
            Array.from(actorsList.children).forEach(button => {
                if (button.tagName === 'BUTTON') button.style.background = 'rgba(255,255,255,0.04)';
            });
            actorButton.style.background = 'rgba(56, 161, 105, 0.18)';
            onActorSelected(actor, actorButton, actorsList);
        };
        actorsList.appendChild(actorButton);
    });

    container.appendChild(actorsList);

    if (referentScoring.currentMode != referentScoring.modes.DISABLED) addProposedReferentsList(container, onActorSelected);
}

export function createSelectionPanel({
    selectedMesh,
    mouse,
    actorListMode = false,
    parent,
    closeSelectionPanel,
    closeInteractionPanel,
    closeModePanel,
    onInteractionPanelCreated,
    onModePanelCreated,
}) {
    const container = document.createElement('div');
    container.id = 'selection-pannel';
    container.dataset.panelMode = actorListMode ? 'actor-list' : 'selected-actor';
    if (selectedMesh) container.dataset.meshUuid = selectedMesh.uuid;
    applyPanelStyles(container, {
        position: 'fixed',
        left: actorListMode ? 'auto' : `${100 * (mouse.x / 2 + .5)}%`,
        right: actorListMode ? '8px' : 'auto',
        top: actorListMode ? '8px' : `${100 * (-mouse.y / 2 + .5)}%`,
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

    if (actorListMode) {
        let selectedDetails = null;
        const onActorSelected = (actor, actorButton, actorsList, isProposedReferent = false) => {
            closeInteractionPanel();
            closeModePanel();
            selectedDetails?.remove();
            const details = document.createElement('div');
            applyPanelStyles(details, {
                marginTop: '8px',
                marginBottom: '8px',
                paddingTop: '8px',
                borderTop: '1px solid rgba(255,255,255,0.15)',
            });
            addSelectedActorContent(details, actor, closeInteractionPanel, closeModePanel, onInteractionPanelCreated, onModePanelCreated, isProposedReferent, false);
            actorsList.insertBefore(details, actorButton.nextSibling);
            selectedDetails = details;
        };
        addActorList(container, onActorSelected);
    } else {
        addSelectedActorContent(container, selectedMesh, closeInteractionPanel, closeModePanel, onInteractionPanelCreated, onModePanelCreated);
    }
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
