// workspace.js
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas');
    if (!canvas) return;

    const svg = document.getElementById('canvas-svg');
    const sidebarNodes = document.querySelectorAll('.draggable-node');
    
    let nodeIdCounter = 0;
    let nodes = {}; // {id: {elem, x, y, inPort, outPort}}
    let connections = []; // {id, from: startNodeId, to: endNodeId, pathElem}

    // --- HTML5 Drag and Drop for Sidebar -> Canvas ---
    sidebarNodes.forEach(node => {
        node.addEventListener('dragstart', (e) => {
            const nodeData = {
                type: node.dataset.type,
                title: node.dataset.title,
                icon: node.dataset.icon
            };
            e.dataTransfer.setData('text/plain', JSON.stringify(nodeData));
            // Required for Firefox
            e.dataTransfer.effectAllowed = 'copy';
        });
    });

    canvas.addEventListener('dragenter', (e) => {
        e.preventDefault();
    });

    canvas.addEventListener('dragover', (e) => {
        e.preventDefault(); 
        e.dataTransfer.dropEffect = 'copy';
    });

    canvas.addEventListener('drop', (e) => {
        e.preventDefault();
        try {
            const rawData = e.dataTransfer.getData('text/plain');
            if (!rawData) return;
            const data = JSON.parse(rawData);
            
            if (data.type && data.title && data.icon) {
                const rect = canvas.getBoundingClientRect();
                // Offset slightly to center on mouse
                const x = e.clientX - rect.left - 80;
                const y = e.clientY - rect.top - 40;
                createNode(data.type, data.title, data.icon, x, y);
            }
        } catch (err) {
            console.error('Error handling drop:', err);
        }
    });

    // --- Node Creation logic ---
    function createNode(type, title, icon, x, y) {
        const id = 'node_' + (nodeIdCounter++);
        
        const nodeEl = document.createElement('div');
        nodeEl.className = 'canvas-node fade-in-up visible'; // immediate fade
        nodeEl.dataset.type = type;
        nodeEl.id = id;
        
        // Boundaries constraint for dropping at edges
        const canvasRect = canvas.getBoundingClientRect();
        const constrainedX = Math.max(0, Math.min(x, canvasRect.width - 160));
        const constrainedY = Math.max(0, Math.min(y, canvasRect.height - 80));

        nodeEl.style.left = constrainedX + 'px';
        nodeEl.style.top = constrainedY + 'px';
        
        nodeEl.innerHTML = `
            <div class="node-icon">${icon}</div>
            <div class="node-title">${title}</div>
        `;
        
        let inPort = null;
        let outPort = null;

        // Triggers have only output. Processors have both. Actions have only input.
        if (type === 'processor' || type === 'action') {
            inPort = document.createElement('div');
            inPort.className = 'node-port input';
            inPort.dataset.node = id;
            nodeEl.appendChild(inPort);
        }
        
        if (type === 'trigger' || type === 'processor') {
            outPort = document.createElement('div');
            outPort.className = 'node-port output';
            outPort.title = "Drag to connect";
            outPort.dataset.node = id;
            nodeEl.appendChild(outPort);
        }

        canvas.appendChild(nodeEl);
        
        nodes[id] = { elem: nodeEl, x: constrainedX, y: constrainedY, inPort, outPort };
        
        makeNodeDraggable(nodeEl, id);
        if (outPort) setupConnectionDrag(outPort, id);
        if (inPort) setupConnectionDrop(inPort, id);
    }
    
    // --- Custom Dragging for nodes inside canvas ---
    let isDraggingNode = false;
    let draggedNodeId = null;
    let dragOffsetX = 0, dragOffsetY = 0;

    function makeNodeDraggable(nodeEl, id) {
        nodeEl.addEventListener('mousedown', (e) => {
            if (e.target.classList.contains('node-port')) return; // Ignore on ports
            isDraggingNode = true;
            draggedNodeId = id;
            dragOffsetX = e.clientX - nodes[id].elem.offsetLeft;
            dragOffsetY = e.clientY - nodes[id].elem.offsetTop;
            nodeEl.style.zIndex = 100;
        });
    }

    // --- Connection Drawing Logic ---
    let isDrawingConnection = false;
    let connectionStartNodeId = null;
    let tempPath = null;

    function setupConnectionDrag(portEl, id) {
        portEl.addEventListener('mousedown', (e) => {
            e.stopPropagation();
            isDrawingConnection = true;
            connectionStartNodeId = id;
            
            tempPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            tempPath.setAttribute('class', 'connection-path temp');
            svg.appendChild(tempPath);
        });
    }
    
    function setupConnectionDrop(portEl, id) {
        portEl.addEventListener('mouseup', (e) => {
            if (isDrawingConnection && connectionStartNodeId && connectionStartNodeId !== id) {
                // Prevent self loops or existing loops logic can go here. For now, just connect.
                
                const connId = 'conn_' + connectionStartNodeId + '_' + id;
                
                const pathElem = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                pathElem.setAttribute('class', 'connection-path');
                pathElem.title = 'Click to delete connection';
                
                // Allow deletion
                pathElem.addEventListener('click', () => {
                    svg.removeChild(pathElem);
                    connections = connections.filter(c => c.pathElem !== pathElem);
                });

                svg.appendChild(pathElem);
                connections.push({
                    id: connId,
                    from: connectionStartNodeId,
                    to: id,
                    pathElem
                });
                
                updateConnections();
            }
        });
    }

    // Global listeners for mouse move/up over the document
    document.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();

        // Handle Node dragging
        if (isDraggingNode && draggedNodeId) {
            let x = e.clientX - dragOffsetX;
            let y = e.clientY - dragOffsetY;
            
            // Constrain
            x = Math.max(0, Math.min(x, rect.width - nodes[draggedNodeId].elem.offsetWidth));
            y = Math.max(0, Math.min(y, rect.height - nodes[draggedNodeId].elem.offsetHeight));

            nodes[draggedNodeId].elem.style.left = x + 'px';
            nodes[draggedNodeId].elem.style.top = y + 'px';
            nodes[draggedNodeId].x = x;
            nodes[draggedNodeId].y = y;
            updateConnections();
        }
        
        // Handle Temp Line drawing
        if (isDrawingConnection && tempPath) {
            const startNode = nodes[connectionStartNodeId];
            const startPort = startNode.outPort;
            const startRect = startPort.getBoundingClientRect();
            
            // The canvas bounding rect may change due to scroll, always recalculate relatively
            let x1 = startRect.left + startRect.width/2 - rect.left;
            let y1 = startRect.top + startRect.height/2 - rect.top;
            
            let x2 = e.clientX - rect.left;
            let y2 = e.clientY - rect.top;
            
            // Constrain temp path visual inside canvas slightly
            x2 = Math.max(0, Math.min(x2, rect.width));
            y2 = Math.max(0, Math.min(y2, rect.height));

            drawPath(tempPath, x1, y1, x2, y2);
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDraggingNode && draggedNodeId) {
            nodes[draggedNodeId].elem.style.zIndex = 20;
        }
        isDraggingNode = false;
        draggedNodeId = null;
        
        if (isDrawingConnection) {
            if (tempPath && tempPath.parentNode) {
                tempPath.parentNode.removeChild(tempPath);
            }
            isDrawingConnection = false;
            connectionStartNodeId = null;
            tempPath = null;
        }
    });

    // Update all confirmed connections using SVG paths
    function updateConnections() {
        const rect = canvas.getBoundingClientRect();
        
        connections.forEach(conn => {
            const startNode = nodes[conn.from];
            const endNode = nodes[conn.to];
            
            if(!startNode || !endNode) return;

            const startRect = startNode.outPort.getBoundingClientRect();
            const endRect = endNode.inPort.getBoundingClientRect();
            
            let x1 = startRect.left + startRect.width/2 - rect.left;
            let y1 = startRect.top + startRect.height/2 - rect.top;
            
            let x2 = endRect.left + endRect.width/2 - rect.left;
            let y2 = endRect.top + endRect.height/2 - rect.top;
            
            drawPath(conn.pathElem, x1, y1, x2, y2);
        });
    }

    function drawPath(pathElem, x1, y1, x2, y2) {
        // Curve strength based on horizontal distance
        const offset = Math.max(50, Math.abs(x2 - x1) / 2);
        // SVG Cubic Bezier Command: M x y C cx1 cy1, cx2 cy2, x y
        const d = `M ${x1} ${y1} C ${x1 + offset} ${y1}, ${x2 - offset} ${y2}, ${x2} ${y2}`;
        pathElem.setAttribute('d', d);
    }
});
