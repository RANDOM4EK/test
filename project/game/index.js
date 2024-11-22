const russianAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('');

function createElem(arr) {
    const container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);
    document.body.style.boxSizing = 'border-box';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.maxWidth = '1000px';
    container.style.margin = '0 auto';
    container.style.justifyContent = 'center';
    container.style.gap = '5px';

    for (let i = 0; i < arr.length; i++) {
        const button = document.createElement('button');
        button.innerText = arr[i];
        button.style.backgroundColor = 'rgb(59, 0, 161)';
        button.style.color = 'white';
        button.style.width = '75px';
        button.style.height = '75px';
        button.style.border = 'solid 1px black';
        button.style.fontSize = '20px';

        button.addEventListener('click', function(event) {
            let value = event.target.tex
        });

        container.appendChild(button);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createElem(russianAlphabet);
});

document.addEventListener('keypress', function(event) {
    console.log(event.key);
});
