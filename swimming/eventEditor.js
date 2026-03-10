// simple timeline-style editor for configuration events
// shows events ordered by distance/time and allows editing

function createEventEditor(containerId, config) {
    const container = document.getElementById(containerId);
    container.style.position = container.style.position || 'relative';
    if (!container) {
        console.warn(`event editor container "${containerId}" not found`);
        return;
    }
    // panel handle creation moved into render to survive container reset


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

    function createParamsDisplay(event) {
        const display = document.createElement('div');
        display.style.flex = '1';
        display.style.padding = '4px';
        display.style.background = '#222';
        display.style.border = '1px solid #555';
        display.style.borderRadius = '4px';
        display.style.fontFamily = 'monospace';
        display.style.fontSize = '12px';
        display.style.whiteSpace = 'pre-wrap';
        display.style.overflow = 'auto';
        display.style.maxHeight = '100px';

        function updateDisplay() {
            const params = event.params;
            if (Object.keys(params).length === 0) {
                display.textContent = '(no params)';
                return;
            }
            const lines = Object.entries(params).map(([key, value]) => {
                return `${key}: ${JSON.stringify(value)}`;
            });
            display.textContent = lines.join('\n');
        }

        updateDisplay();
        return { element: display, update: updateDisplay };
    }

    function createParamsPanel(event, updateDisplay) {
        const panel = document.createElement('div');
        panel.style.display = 'flex';
        panel.style.flexWrap = 'wrap';
        panel.style.margin = '4px 0';
        panel.style.background = '#333';
        panel.style.padding = '4px';

        function update() {
            if (updateDisplay) {
                updateDisplay();
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
                input = document.createElement('select');
                const opts = [
                    { value: '', label: '—' },
                    { value: 'true', label: 'ON' },
                    { value: 'false', label: 'OFF' }
                ];
                opts.forEach(opt => {
                    const o = document.createElement('option');
                    o.value = opt.value;
                    o.textContent = opt.label;
                    input.appendChild(o);
                });
                const currentValue = event.params[def.name];
                if (currentValue === undefined) {
                    input.value = '';
                } else if (currentValue === true) {
                    input.value = 'true';
                } else if (currentValue === false) {
                    input.value = 'false';
                }
                input.addEventListener('change', () => {
                    if (input.value === '') {
                        delete event.params[def.name];
                    } else if (input.value === 'true') {
                        event.params[def.name] = true;
                    } else if (input.value === 'false') {
                        event.params[def.name] = false;
                    }
                    update();
                });
            } else if (def.type === 'select') {
                input = document.createElement('select');
                const emptyOpt = document.createElement('option');
                emptyOpt.value = '';
                emptyOpt.textContent = '—';
                input.appendChild(emptyOpt);
                def.options.forEach(opt => {
                    const o = document.createElement('option');
                    o.value = opt;
                    o.textContent = opt;
                    input.appendChild(o);
                });
                input.value = event.params[def.name] || '';
                input.addEventListener('change', () => {
                    if (input.value === '') {
                        delete event.params[def.name];
                    } else {
                        event.params[def.name] = input.value;
                    }
                    update();
                });
            } else if (def.type === 'number') {
                input = document.createElement('input');
                input.type = 'number';
                if (def.min !== undefined) input.min = def.min;
                if (def.max !== undefined) input.max = def.max;
                input.placeholder = '—';
                input.style.width = '50px';
                input.value = event.params[def.name] !== undefined ? event.params[def.name] : '';
                input.addEventListener('change', () => {
                    if (input.value === '') {
                        delete event.params[def.name];
                    } else {
                        const v = parseFloat(input.value);
                        if (!isNaN(v)) {
                            event.params[def.name] = v;
                        }
                    }
                    update();
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
        distanceInput.style.width = 'auto';
        distanceInput.style.marginRight = '8px';
        panel.appendChild(distanceInput);

        const params = {}; // temporary params object
        const paramPanel = createParamsPanel({ params }, null); // pass dummy event, no textarea
        paramPanel.style.margin = '4px 0';
        panel.appendChild(paramPanel);

        const validateBtn = document.createElement('button');
        validateBtn.textContent = 'OK';
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
        // recreate top handle each time
        const panelHandle = document.createElement('div');
        panelHandle.style.position = 'absolute';
        panelHandle.style.top = '0px';
        panelHandle.style.left = '50%';
        panelHandle.style.transform = 'translateX(-50%)';
        panelHandle.style.width = '80px';
        panelHandle.style.height = '15px';
        panelHandle.style.background = 'grey';
        panelHandle.style.border = '1px solid black';
        panelHandle.style.cursor = 'ns-resize';
        panelHandle.style.zIndex = '100000';
        panelHandle.style.lineHeight = '16px';
        panelHandle.style.textAlign = 'center';
        panelHandle.textContent = 'drag';
        container.appendChild(panelHandle);
        // drag behavior
        panelHandle.addEventListener('mousedown', e => {
            e.preventDefault();
            const startY = e.clientY;
            const startH = container.offsetHeight;
            function onMove(ev) {
                const newH = startH - (ev.clientY - startY);
                if (newH > 20) container.style.height = newH + 'px';
            }
            function onUp() {
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onUp);
            }
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        });
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

        // build segments for each parameter to show enabled intervals
        // only include parameters that are actually modified by some event
        const usedParams = new Set();
        events.forEach(e => {
            if (e.params) Object.keys(e.params).forEach(k => usedParams.add(k));
        });
        let paramNames = paramDefs.map(d => d.name).filter(n => usedParams.has(n));
        const colors = ['#4caf50', '#2196f3', '#ff9800', '#9c27b0', '#f44336', '#009688', '#e91e63', '#3f51b5'];
        const paramColors = {};
        paramNames.forEach((n, i) => { paramColors[n] = colors[i % colors.length]; });
        const lastChange = {};
        const currentVals = {};
        paramNames.forEach(n => { currentVals[n] = false; lastChange[n] = 0; });
        const segments = [];
        const getVal = (e, n) => !!e.params && !!e.params[n];

        events.forEach(e => {
            const v = e.distance !== undefined ? e.distance : e.time !== undefined ? e.time : 0;
            paramNames.forEach(name => {
                const newVal = getVal(e, name);
                if (newVal !== currentVals[name]) {
                    if (currentVals[name]) {
                        segments.push({ name, start: lastChange[name], end: v });
                    }
                    currentVals[name] = newVal;
                    lastChange[name] = v;
                }
            });
        });
        paramNames.forEach(name => {
            if (currentVals[name]) {
                segments.push({ name, start: lastChange[name], end: maxVal });
            }
        });

        // render parameter interval tracks before main timeline if there are any
        if (paramNames.length > 0) {
            const paramsTimeline = document.createElement('div');
            paramsTimeline.style.position = 'relative';
            const trackHeight = 20;
            const labelWidth = 80; // reserve left column for names
            paramsTimeline.style.height = (paramNames.length * trackHeight) + 'px';
            paramsTimeline.style.background = '#222';
            paramsTimeline.style.marginBottom = '4px';
            paramsTimeline.style.marginTop = '10px';

            // labels go directly on paramsTimeline
            paramNames.forEach((name, idx) => {
                const lbl = document.createElement('div');
                lbl.textContent = name;
                lbl.style.position = 'absolute';
                lbl.style.left = '0';
                lbl.style.top = (idx * trackHeight + 2) + 'px';
                lbl.style.width = labelWidth + 'px';
                lbl.style.color = '#aaa';
                lbl.style.fontSize = '10px';
                lbl.style.pointerEvents = 'none';
                paramsTimeline.appendChild(lbl);
            });

            // create track area where bars and markers sit
            const trackArea = document.createElement('div');
            trackArea.style.position = 'absolute';
            trackArea.style.left = labelWidth + 'px';
            trackArea.style.top = '0';
            trackArea.style.right = '0';
            trackArea.style.bottom = '0';
            trackArea.style.overflow = 'hidden';
            paramsTimeline.appendChild(trackArea);

            // add segments inside trackArea using percents relative to it
            segments.forEach(seg => {
                const segDiv = document.createElement('div');
                const startPct = maxVal > 0 ? (seg.start / maxVal) * 100 : 0;
                const widthPct = maxVal > 0 ? ((seg.end - seg.start) / maxVal) * 100 : 0;
                segDiv.style.position = 'absolute';
                segDiv.style.left = startPct + '%';
                segDiv.style.top = (paramNames.indexOf(seg.name) * trackHeight + 2) + 'px';
                segDiv.style.height = (trackHeight - 4) + 'px';
                segDiv.style.width = widthPct + '%';
                segDiv.style.background = paramColors[seg.name] || '#4caf50';
                segDiv.title = `${seg.name}: ${seg.start.toFixed(2)} → ${seg.end.toFixed(2)}`;
                // add visible text
                const textSpan = document.createElement('span');
                textSpan.textContent = `${seg.name}: ${seg.start.toFixed(2)} → ${seg.end.toFixed(2)}`;
                textSpan.style.position = 'absolute';
                textSpan.style.top = '0';
                textSpan.style.left = '2px';
                textSpan.style.fontSize = '10px';
                textSpan.style.color = 'white';
                textSpan.style.pointerEvents = 'none';
                textSpan.style.whiteSpace = 'nowrap';
                textSpan.style.overflow = 'hidden';
                textSpan.style.textOverflow = 'ellipsis';
                segDiv.appendChild(textSpan);

                // add resize handle if not the last segment
                if (seg.end < maxVal) {
                    const handle = document.createElement('div');
                    handle.style.position = 'absolute';
                    handle.style.right = '0';
                    handle.style.top = '0';
                    handle.style.width = '5px';
                    handle.style.height = '100%';
                    handle.style.background = 'rgba(255,255,255,0.5)';
                    handle.style.cursor = 'ew-resize';
                    segDiv.appendChild(handle);

                    handle.addEventListener('mousedown', e => {
                        e.preventDefault();
                        e.stopPropagation();
                        const startX = e.clientX;
                        const startWidth = segDiv.offsetWidth;
                        function onMove(ev) {
                            const deltaX = ev.clientX - startX;
                            const newWidthPx = Math.max(1, startWidth + deltaX);
                            const newWidthPct = (newWidthPx / trackArea.offsetWidth) * 100;
                            segDiv.style.width = newWidthPct + '%';
                            const newEnd = seg.start + (newWidthPx / trackArea.offsetWidth) * maxVal;
                            textSpan.textContent = `${seg.name}: ${seg.start.toFixed(2)} → ${newEnd.toFixed(2)}`;
                        }
                        function onUp() {
                            document.removeEventListener('mousemove', onMove);
                            document.removeEventListener('mouseup', onUp);
                            const newWidthPx = segDiv.offsetWidth;
                            const newEnd = seg.start + (newWidthPx / trackArea.offsetWidth) * maxVal;
                            // find and update event
                            const event = events.find(e => (e.distance !== undefined ? e.distance : e.time !== undefined ? e.time : 0) === seg.end);
                            if (event) {
                                if (event.distance !== undefined) {
                                    event.distance = newEnd;
                                } else if (event.time !== undefined) {
                                    event.time = newEnd;
                                }
                            }
                            syncEvents();
                        }
                        document.addEventListener('mousemove', onMove);
                        document.addEventListener('mouseup', onUp);
                    });
                }

                trackArea.appendChild(segDiv);
            });

            container.appendChild(paramsTimeline);
        }

        const timeline = document.createElement('div');
        timeline.style.position = 'relative';
        timeline.style.height = '40px';
        timeline.style.background = '#444';
        timeline.style.marginBottom = '4px';
        // mirror label padding on main timeline
        timeline.style.paddingLeft = '80px';
        const timelineTrack = document.createElement('div');
        timelineTrack.style.position = 'absolute';
        timelineTrack.style.left = '80px';
        timelineTrack.style.top = '0';
        timelineTrack.style.right = '0';
        timelineTrack.style.bottom = '0';
        timeline.appendChild(timelineTrack);



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
            timelineTrack.appendChild(marker);
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

            const paramsDisplay = createParamsDisplay(event);
            rowTop.appendChild(paramsDisplay.element);

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
                    panel = createParamsPanel(event, paramsDisplay.update);
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
