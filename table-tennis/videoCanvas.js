export function createVideoCanvas(canvas) {
    const container = document.createElement("div");
    container.className = "video-canvas";
    container.appendChild(canvas);
    document.body.appendChild(container);

    let activeResize = null;
    let activeMove = null;
    let suppressClick = false;
    canvas.title = "Drag to move video; click to toggle fullscreen";
    for (const direction of ["ne", "nw", "se", "sw"]) {
        const handle = document.createElement("div");
        handle.className = `video-resize-handle video-resize-${direction}`;
        handle.title = "Drag to resize video";
        container.appendChild(handle);
        handle.addEventListener("pointerdown", (event) => {
            if (event.button !== 0 || container.hidden || activeResize || activeMove) return;
            event.preventDefault();
            event.stopPropagation();
            const rect = container.getBoundingClientRect();
            container.classList.remove("fullscreen");
            Object.assign(container.style, {
                left: `${rect.left}px`,
                top: `${rect.top}px`,
                width: `${rect.width}px`,
                height: `${rect.height}px`
            });
            activeResize = { handle, rect, x: event.clientX, y: event.clientY, pointerId: event.pointerId };
            handle.setPointerCapture(event.pointerId);
        });
        handle.addEventListener("pointermove", (event) => {
            if (!activeResize || activeResize.pointerId !== event.pointerId || container.hidden) return;
            const { rect, x, y } = activeResize;
            const dx = (event.clientX - x) * (direction.includes("e") ? 1 : -1);
            const dy = (event.clientY - y) * (direction.includes("s") ? 1 : -1);
            const scale = Math.max(
                80 / rect.width,
                60 / rect.height,
                1 + (dx * rect.width + dy * rect.height) / (rect.width ** 2 + rect.height ** 2)
            );
            const width = rect.width * scale;
            const height = rect.height * scale;
            container.style.width = `${width}px`;
            container.style.height = `${height}px`;
            if (direction.includes("w")) container.style.left = `${rect.right - width}px`;
            if (direction.includes("n")) container.style.top = `${rect.bottom - height}px`;
        });
        const endResize = (event) => {
            if (activeResize?.pointerId === event.pointerId) activeResize = null;
        };
        handle.addEventListener("pointerup", endResize);
        handle.addEventListener("pointercancel", endResize);
        handle.addEventListener("lostpointercapture", endResize);
    }

    canvas.addEventListener("pointerdown", (event) => {
        if (event.button !== 0 || container.hidden || activeResize || activeMove) return;
        suppressClick = false;
        activeMove = {
            rect: container.getBoundingClientRect(),
            x: event.clientX,
            y: event.clientY,
            pointerId: event.pointerId,
            dragging: false
        };
        canvas.setPointerCapture(event.pointerId);
    });
    canvas.addEventListener("pointermove", (event) => {
        if (!activeMove || activeMove.pointerId !== event.pointerId || container.hidden) return;
        const { rect, x, y } = activeMove;
        const dx = event.clientX - x;
        const dy = event.clientY - y;
        if (!activeMove.dragging) {
            if (Math.hypot(dx, dy) < 4) return;
            activeMove.dragging = true;
            suppressClick = true;
            container.classList.remove("fullscreen");
            container.classList.add("dragging");
            container.style.width = `${rect.width}px`;
            container.style.height = `${rect.height}px`;
        }
        container.style.left = `${rect.left + dx}px`;
        container.style.top = `${rect.top + dy}px`;
    });
    const endMove = (event) => {
        if (activeMove?.pointerId !== event.pointerId) return;
        activeMove = null;
        container.classList.remove("dragging");
    };
    canvas.addEventListener("pointerup", endMove);
    canvas.addEventListener("pointercancel", endMove);
    canvas.addEventListener("lostpointercapture", endMove);
    canvas.addEventListener("click", () => {
        if (suppressClick) {
            suppressClick = false;
            return;
        }
        if (!container.hidden) container.classList.toggle("fullscreen");
    });

    return {
        element: container,
        setVisible(visible) {
            if (!visible && activeMove) {
                const { pointerId } = activeMove;
                activeMove = null;
                suppressClick = true;
                container.classList.remove("dragging");
                if (canvas.hasPointerCapture(pointerId)) canvas.releasePointerCapture(pointerId);
            }
            if (!visible && activeResize) {
                const { handle, pointerId } = activeResize;
                activeResize = null;
                if (handle.hasPointerCapture(pointerId)) handle.releasePointerCapture(pointerId);
            }
            container.hidden = !visible;
        }
    };
}
