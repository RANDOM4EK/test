const russianAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('');
const words = [
    'пульсация',
    'игры',
    'сообщение'
];
let gallowsCount = 6;
let trueCount = 0;
let falseCount = 0;
let textCount = 6; 

function game() {
    createGallows();
    createWords(words);
    createElem(russianAlphabet, words);
    createCounter(); 
    kBord(words);
    counter(trueCount, falseCount);
    innerCount(falseCount, textCount); 
}

function createGallows() {
    let gallowsContainer = document.createElement('div');
    gallowsContainer.id = 'gallowsContainer';
    gallowsContainer.style.position = 'relative';

    let gallows = document.createElement('img');
    let manBody = document.createElement('img');
    let manHead = document.createElement('img');
    let manHandOne = document.createElement('img');
    let manHandTwo = document.createElement('img');
    let manLegOne = document.createElement('img');
    let manLegTwo = document.createElement('img');

    manHead.id = 'man1';
    manBody.id = 'man2';
    manHandOne.id = 'man3';
    manHandTwo.id = 'man4';
    manLegOne.id = 'man5';
    manLegTwo.id = 'man6';

    gallows.src = './img/gallows.png'; 
    manBody.src = './img/body.png';
    manHead.src =  './img/head.png';
    manHandOne.src = './img/hand-one.png'; 
    manHandTwo.src = './img/hand-two.png'; 
    manLegOne.src = './img/leg-one.png'; 
    manLegTwo.src = './img/leg-two.png';

    gallows.style.width = '300px';
    gallows.style.height = '300px';

    manHead.style.position = 'absolute';
    manHead.style.top = '78px';
    manHead.style.left = '208px';
    manHead.style.display = 'none';

    manBody.style.position = 'absolute';
    manBody.style.top = '178px';
    manBody.style.left = '255px';
    manBody.style.display = 'none';

    manHandOne.style.position = 'absolute';
    manHandOne.style.top = '175px';
    manHandOne.style.left = '191px';
    manHandOne.style.display = 'none';

    manHandTwo.style.position = 'absolute';
    manHandTwo.style.top = '175px';
    manHandTwo.style.left = '257px';
    manHandTwo.style.display = 'none';

    manLegOne.style.position = 'absolute';
    manLegOne.style.top = '304px';
    manLegOne.style.left = '191px';
    manLegOne.style.display = 'none';

    manLegTwo.style.position = 'absolute';
    manLegTwo.style.top = '304px';
    manLegTwo.style.left = '256px';
    manLegTwo.style.display = 'none';

    document.body.appendChild(gallowsContainer);
    gallowsContainer.appendChild(gallows);
    gallowsContainer.appendChild(manBody);
    gallowsContainer.appendChild(manHead);
    gallowsContainer.appendChild(manHandOne);
    gallowsContainer.appendChild(manHandTwo);
    gallowsContainer.appendChild(manLegOne);
    gallowsContainer.appendChild(manLegTwo);
}

function createCounter() {
    const counter = document.createElement('p');
    counter.id = 'countP';
    document.body.appendChild(counter);
    counter.style.marginLeft = '50%';
    counter.style.marginRight = '50%';
    counter.innerText = '0/6';
}

function innerCount(falseCount, textCount) {
    let text = document.getElementById('countP');
    text.innerText = `${falseCount}/${textCount}`;
}

function createWords(arr) {
    const containerWord = document.createElement('div');
    containerWord.id = 'containerWord';
    document.body.appendChild(containerWord);
    containerWord.style.display = 'flex';
    containerWord.style.flexDirection = 'row';
    containerWord.style.gap = '20px';
    containerWord.style.width = '20%';
    containerWord.style.marginLeft = 'auto';
    containerWord.style.marginRight = 'auto';
    containerWord.style.marginBottom = '50px';
    containerWord.style.marginTop = '100px';

    for (let j = 0; j < arr[0].length; j++) {
        const word = document.createElement('div');
        word.id = `word${j}`;
        containerWord.appendChild(word);
        word.style.borderBottom = 'solid 2px black';
        word.style.width = '100%';
    }
}

function kBord(arr) {
    document.addEventListener('keypress', function(event) {
        const pressedKey = event.key.toLowerCase();
        if (russianAlphabet.includes(pressedKey)) {
            let isPartOfWord = false;

            for (let j = 0; j < arr[0].length; j++) {
                if (pressedKey === arr[0][j]) {
                    const value = document.getElementById(`word${j}`);
                    value.innerText = pressedKey;
                    isPartOfWord = true;
                }
            }

            const button = Array.from(document.querySelectorAll('button')).find(button => button.innerText === pressedKey);

            if (isPartOfWord) {
                if (button && getComputedStyle(button).backgroundColor !== 'rgb(0, 128, 0)') {
                    trueCount++;
                    counter(trueCount, falseCount);
                    colorButton(pressedKey, 'green');
                }
            } else {
                if (button && getComputedStyle(button).backgroundColor !== 'rgb(85, 0, 24)') {
                    falseCount++;
                    let resultGallows = document.getElementById(`man${falseCount}`);
                    resultGallows.style.display = 'block';
                    innerCount(falseCount, textCount);
                    counter(trueCount, falseCount);
                    colorButton(pressedKey, '#550018');
                }
            }
        }
    });
}

function colorButton(symbol, color) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (button.innerText === symbol) {
            button.style.backgroundColor = color;
        }
    });
}

function createElem(arr, arr2) {
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
        button.id = `button${i}`;
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
                if (getComputedStyle(button).backgroundColor !== 'rgb(0, 128, 0)') {
                    trueCount++;
                    button.style.backgroundColor = 'green';
                    button.disabled = true;
                    counter(trueCount, falseCount);
                }
            } else {
                if (getComputedStyle(button).backgroundColor !== 'rgb(85, 0, 24)') {
                    falseCount++;
                    let resultGallows = document.getElementById(`man${falseCount}`);
                    resultGallows.style.display = 'block';
                    counter(trueCount, falseCount);
                    innerCount(falseCount, textCount);
                    button.style.backgroundColor = '#550018';
                }
            }
        });
    }
}

function counter(trueCount, falseCount) {
    if (trueCount === words[0].length) {
        setTimeout(() => {
            alert('Победа');
            let result = confirm('Хотите продолжить?');
            if (result) {
                location.reload();
            }
        }, 100);
    }
    if (falseCount === 6) {
        setTimeout(() => {
            alert('Поражение');
            let result2 = confirm('Хотите продолжить?');
            if (result2) {
                location.reload();
            }
        }, 100);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    game();
});
