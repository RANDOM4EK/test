let container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

function createElem() {
    for (let i = 0; i <= 3; i++) {
        let elem = document.createElement('div');
        elem.id = `block${i}`;
        elem.innerText = i;
        container.appendChild(elem);

        elem.draggable = true;

        elem.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', event.target.id);
        });

        elem.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        elem.addEventListener('drop', (event) => {
            event.preventDefault();
            let data = event.dataTransfer.getData('text/plain');
            let draggedElement = document.getElementById(data);
            event.target.appendChild(draggedElement);
        });
    }
}

createElem();