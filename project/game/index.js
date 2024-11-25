const russianAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('');
const words = [
    'чмоня',
    'игры',
    'сообщение'
];

function game() {
    createWords(words);
    createElem(russianAlphabet, words);
}

function createWords(arr) {
    const containerWord = document.createElement('div');
    containerWord.id = 'containerWord';
    document.body.appendChild(containerWord);
    containerWord.style.display = 'flex';
    containerWord.style.flexDirection = 'row';
    containerWord.style.gap = '20px';
    containerWord.style.margin = '140px';

    for (let j = 0; j < arr[0].length; j++) {
        const word = document.createElement('div');
        word.id = `word${j}`;
        containerWord.appendChild(word);
        word.style.borderBottom = 'solid 2px black';
        word.style.width = '30px';
    }

    document.addEventListener('keypress', function(event) {
        const pressedKey = event.key;
        for (let j = 0; j < arr[0].length; j++) {
            if (pressedKey === arr[0][j]) {
                const value = document.getElementById(`word${j}`);
                value.innerText = pressedKey;
                colorButton(pressedKey);
            }
        }
    });
}

function colorButton(symbol) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button=> {
        if (button.innerText === symbol) {
            button.style.backgroundColor = 'green';
        } 
        if (button.innerText !== symbol) {
            button.style.backgroundColor = '#550018';
        } 
    });
}

function createElem(arr, arr2) {
    const container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);

    const textContainer = document.createElement('div');
    textContainer.id = 'textContainer';
    document.body.appendChild(textContainer);

    /////////--------------style-----------////////
    document.body.style.boxSizing = 'border-box';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.maxWidth = '1000px';
    container.style.margin = '0 auto';
    container.style.justifyContent = 'center';
    container.style.gap = '5px';
    /////////--------------style-----------////////

    for (let i = 0; i < arr.length; i++) {
        const button = document.createElement('button');
        button.innerText = arr[i];
        button.style.backgroundColor = 'rgb(59, 0, 161)';
        button.style.color = 'white';
        button.style.width = '75px';
        button.style.height = '75px';
        button.style.border = 'solid 1px black';
        button.style.fontSize = '20px';
        container.appendChild(button);

        button.addEventListener('click', function(event) {
            const letter = event.target.textContent;
            let isPartOfWord = false;

            for (let j = 0; j < arr2[0].length; j++) {
                if (letter === arr2[0][j]) {
                    const value = document.getElementById(`word${j}`);
                    value.innerText = letter;
                    isPartOfWord = true;
                }
            }
            if (isPartOfWord) {
                button.style.backgroundColor = 'green';
            } else {
                button.style.backgroundColor = '#550018';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    game();
});
