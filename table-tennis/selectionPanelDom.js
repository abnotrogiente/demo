export function applyPanelStyles(element, styles) {
    Object.entries(styles).forEach(([property, value]) => {
        element.style[property] = value;
    });
}

export function createLabel(text, styles = {}) {
    const element = document.createElement('div');
    element.textContent = text;
    applyPanelStyles(element, styles);
    return element;
}

export function createActionButton(text, styles = {}) {
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
        ...styles,
    });
    return button;
}

export function getModeName(modes, value) {
    if (!modes || Array.isArray(modes)) return String(value);

    for (const [name, modeValue] of Object.entries(modes)) {
        if (modeValue === value) return name;
    }

    return String(value);
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

    let left = rect.left;
    let top = rect.top;

    if (rect.left < padding) left = padding;
    if (rect.right > viewportWidth - padding) left = viewportWidth - rect.width - padding;
    if (rect.top < padding) top = padding;
    if (rect.bottom > viewportHeight - padding) top = viewportHeight - rect.height - padding;

    if (left === rect.left && top === rect.top) return;

    if (style.position === 'fixed') {
        container.style.left = `${left}px`;
        container.style.top = `${top}px`;
    } else {
        container.style.left = `${left - parentRect.left}px`;
        container.style.top = `${top - parentRect.top}px`;
    }
}

export function createRightPanel(anchorRect, cursorY, title) {
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

    panel.appendChild(createLabel(title, {
        fontWeight: '600',
        marginBottom: '6px',
    }));

    document.body.appendChild(panel);
    requestAnimationFrame(() => fitSelectionPanelToViewport(panel));
    return panel;
}
