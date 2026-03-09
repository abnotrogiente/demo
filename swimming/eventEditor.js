// simple timeline-style editor for configuration events
// shows events ordered by distance/time and allows editing

function createEventEditor(containerId, config) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`event editor container "${containerId}" not found`);
        return;
    }

    // generate the editor UI whenever the config changes
    function render() {
        container.innerHTML = "";
        if (!config.events) {
            container.textContent = "no events defined";
            return;
        }

        // copy and sort events by distance (fallback to time)
        const events = config.events.slice().sort((a, b) => {
            const va = a.distance !== undefined ? a.distance : a.time !== undefined ? a.time : 0;
            const vb = b.distance !== undefined ? b.distance : b.time !== undefined ? b.time : 0;
            return va - vb;
        });

        // compute maximum value for scale
        const maxVal = events.reduce((m, e) => {
            const v = e.distance !== undefined ? e.distance : e.time !== undefined ? e.time : 0;
            return Math.max(m, v);
        }, 0);

        const timeline = document.createElement('div');
        timeline.style.position = 'relative';
        timeline.style.height = '40px';
        timeline.style.background = '#444';
        timeline.style.marginBottom = '4px';

        events.forEach((event, idx) => {
            const val = event.distance !== undefined ? event.distance : event.time !== undefined ? event.time : 0;
            const pct = maxVal > 0 ? (val / maxVal) * 100 : 0;
            const marker = document.createElement('div');
            marker.style.position = 'absolute';
            marker.style.left = pct + '%';
            marker.style.transform = 'translateX(-50%)';
            marker.style.width = '4px';
            marker.style.height = '100%';
            marker.style.background = '#e74c3c';
            marker.style.cursor = 'pointer';
            marker.title = `event ${idx}: ${JSON.stringify(event.params)}`;
            marker.addEventListener('click', () => {
                openEditor(idx);
            });
            timeline.appendChild(marker);
        });

        container.appendChild(timeline);

        // list of events with editing controls
        events.forEach((event, idx) => {
            const row = document.createElement('div');
            row.style.display = 'flex';
            row.style.alignItems = 'center';
            row.style.marginBottom = '2px';

            // value input (distance or time)
            const valueInput = document.createElement('input');
            valueInput.type = 'number';
            valueInput.style.width = '60px';
            valueInput.value = event.distance !== undefined ? event.distance : event.time !== undefined ? event.time : 0;
            valueInput.addEventListener('change', () => {
                const v = parseFloat(valueInput.value);
                if (isNaN(v)) return;
                if (event.distance !== undefined) {
                    event.distance = v;
                } else {
                    event.time = v;
                }
                syncEvents();
            });
            row.appendChild(valueInput);

            const paramsInput = document.createElement('textarea');
            paramsInput.style.flex = '1';
            paramsInput.rows = 1;
            paramsInput.value = JSON.stringify(event.params);
            paramsInput.addEventListener('change', () => {
                try {
                    event.params = JSON.parse(paramsInput.value);
                    syncEvents();
                } catch (e) {
                    alert('invalid JSON');
                }
            });
            row.appendChild(paramsInput);

            const removeBtn = document.createElement('button');
            removeBtn.textContent = '✖';
            removeBtn.style.marginLeft = '4px';
            removeBtn.addEventListener('click', () => {
                const originalIndex = config.events.indexOf(events[idx]);
                if (originalIndex !== -1) {
                    config.events.splice(originalIndex, 1);
                    render();
                }
            });
            row.appendChild(removeBtn);

            container.appendChild(row);
        });

        const addBtn = document.createElement('button');
        addBtn.textContent = '+ add event';
        addBtn.addEventListener('click', () => {
            const newEvent = { distance: 0, params: {} };
            config.events.push(newEvent);
            render();
        });
        container.appendChild(addBtn);

        const exportBtn = document.createElement('button');
        exportBtn.textContent = 'export JSON';
        exportBtn.style.marginLeft = '8px';
        exportBtn.addEventListener('click', () => {
            const text = JSON.stringify(config.events, null, 2);
            const win = window.open('', '_blank');
            if (win) {
                win.document.write('<pre>' + text.replace(/</g, '&lt;') + '</pre>');
                win.document.title = 'vis-config.json';
            } else {
                console.log(text);
            }
        });
        container.appendChild(exportBtn);
    }

    function openEditor(idx) {
        // scroll to the corresponding row
        const rows = container.querySelectorAll('div');
        const row = rows[1 + idx]; // first row is timeline
        if (row) row.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function syncEvents() {
        // sort the original config.events array in place so updates persist in order
        config.events.sort((a, b) => {
            const va = a.distance !== undefined ? a.distance : a.time !== undefined ? a.time : 0;
            const vb = b.distance !== undefined ? b.distance : b.time !== undefined ? b.time : 0;
            return va - vb;
        });
        render();
    }

    // initial render and expose for external calls
    render();
    config._renderTimeline = render; // a small helper if other code wants to refresh
}

export { createEventEditor };
