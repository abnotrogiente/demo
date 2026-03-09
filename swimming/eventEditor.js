// simple timeline-style editor for configuration events
// shows events ordered by distance/time and allows editing

function createEventEditor(containerId, config) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.warn(`event editor container "${containerId}" not found`);
        return;
    }

    let addPanel; // for toggling add event panel

    // parameter definitions for quick editing UI
    const paramDefs = [
        { name: 'showFlags', type: 'boolean' },
        { name: 'showWR', type: 'boolean' },
        { name: 'showSpeed', type: 'boolean' },
        { name: 'showRanks', type: 'boolean' },
        { name: 'showRanksIfFinished', type: 'boolean' },
        { name: 'showDivingDistance', type: 'boolean' },
        { name: 'showFinishTimes', type: 'boolean' },
        { name: 'showNeighboursLines', type: 'select', options: ['none', 'only medals', 'all'] },
        { name: 'showMedals', type: 'select', options: ['none', 'stars', 'bright', 'lanes'] },
        { name: 'rankSwimmerToggle', type: 'number', min: 1, max: 10 }
    ];

    function createParamsPanel(event, textarea) {
        const panel = document.createElement('div');
        panel.style.display = 'flex';
        panel.style.flexWrap = 'wrap';
        panel.style.margin = '4px 0';
        panel.style.background = '#333';
        panel.style.padding = '4px';

        function updateTextarea() {
            if (textarea) {
                textarea.value = JSON.stringify(event.params);
                syncEvents();
            }
        }

        paramDefs.forEach(def => {
            const wrapper = document.createElement('div');
            wrapper.style.marginRight = '8px';
            wrapper.style.marginBottom = '4px';
            const label = document.createElement('label');
            label.style.whiteSpace = 'nowrap';
            label.textContent = def.name + ':';
            wrapper.appendChild(label);
            let input;
            if (def.type === 'boolean') {
                input = document.createElement('input');
                input.type = 'checkbox';
                input.checked = !!event.params[def.name];
                input.addEventListener('change', () => {
                    event.params[def.name] = input.checked;
                    updateTextarea();
                });
            } else if (def.type === 'select') {
                input = document.createElement('select');
                def.options.forEach(opt => {
                    const o = document.createElement('option');
                    o.value = opt;
                    o.textContent = opt;
                    input.appendChild(o);
                });
                input.value = event.params[def.name] || def.options[0];
                input.addEventListener('change', () => {
                    event.params[def.name] = input.value;
                    updateTextarea();
                });
            } else if (def.type === 'number') {
                input = document.createElement('input');
                input.type = 'number';
                if (def.min !== undefined) input.min = def.min;
                if (def.max !== undefined) input.max = def.max;
                input.value = event.params[def.name] || def.min || 0;
                input.style.width = '50px';
                input.addEventListener('change', () => {
                    const v = parseFloat(input.value);
                    if (!isNaN(v)) {
                        event.params[def.name] = v;
                        updateTextarea();
                    }
                });
            }
            if (input) wrapper.appendChild(input);
            panel.appendChild(wrapper);
        });
        return panel;
    }

    function createAddPanel() {
        const panel = document.createElement('div');
        panel.style.marginTop = '8px';
        panel.style.padding = '8px';
        panel.style.background = '#555';
        panel.style.border = '1px solid #777';

        const title = document.createElement('div');
        title.textContent = 'Add New Event';
        title.style.fontWeight = 'bold';
        title.style.marginBottom = '4px';
        panel.appendChild(title);

        const distanceInput = document.createElement('input');
        distanceInput.type = 'number';
        distanceInput.placeholder = 'Distance';
        distanceInput.style.width = '60px';
        distanceInput.style.marginRight = '8px';
        panel.appendChild(distanceInput);

        const params = {}; // temporary params object
        const paramPanel = createParamsPanel({ params }, null); // pass dummy event, no textarea
        paramPanel.style.margin = '4px 0';
        panel.appendChild(paramPanel);

        const validateBtn = document.createElement('button');
        validateBtn.textContent = 'Add Event';
        validateBtn.addEventListener('click', () => {
            const distance = parseFloat(distanceInput.value);
            if (isNaN(distance)) {
                alert('Please enter a valid distance');
                return;
            }
            const newEvent = { distance, params: { ...params } };
            config.events.push(newEvent);
            syncEvents();
            // close panel
            addPanel.remove();
            addPanel = null;
        });
        panel.appendChild(validateBtn);

        return panel;
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
            row.style.flexDirection = 'column';
            row.style.marginBottom = '4px';

            const rowTop = document.createElement('div');
            rowTop.style.display = 'flex';
            rowTop.style.alignItems = 'center';

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
            rowTop.appendChild(valueInput);

            const textarea = document.createElement('textarea');
            textarea.style.flex = '1';
            textarea.rows = 1;
            textarea.value = JSON.stringify(event.params);
            textarea.addEventListener('change', () => {
                try {
                    event.params = JSON.parse(textarea.value);
                    syncEvents();
                } catch (e) {
                    alert('invalid JSON');
                }
            });
            rowTop.appendChild(textarea);

            const editBtn = document.createElement('button');
            editBtn.textContent = '⚙';
            editBtn.style.marginLeft = '4px';
            rowTop.appendChild(editBtn);

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
            rowTop.appendChild(removeBtn);

            row.appendChild(rowTop);

            // placeholder for params panel
            let panel;
            editBtn.addEventListener('click', () => {
                if (panel) {
                    panel.remove();
                    panel = null;
                } else {
                    panel = createParamsPanel(event, textarea);
                    row.appendChild(panel);
                }
            });

            container.appendChild(row);
        });

        const addBtn = document.createElement('button');
        addBtn.textContent = '+ add event';
        addBtn.addEventListener('click', () => {
            // toggle add panel
            if (addPanel) {
                addPanel.remove();
                addPanel = null;
            } else {
                addPanel = createAddPanel();
                container.appendChild(addPanel);
                // scroll to make the panel visible
                container.scrollTop = container.scrollHeight;
            }
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
