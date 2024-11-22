const russianAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split('');

function createElem(arr) {
    const container = document.createElement('div');
    const textContainer = document.createElement('div');
    textContainer.id = 'textContainer'; 
    document.body.appendChild(textContainer); 
    textContainer.appendChild(container); 
    container.id = 'container';
    document.body.appendChild(container); 
    document.body.style.boxSizing = 'border-box';
    container.style.display = 'flex';
    container.style.flexWrap = 'wrap';
    container.style.maxWidth = '1000px';
    container.style.margin = '0 auto';
    container.style.justifyContent = 'center';
    container.style.gap = '5px';
    
    document.addEventListener('keypress', function(event) {
        for(let i = 0; i < arr.length; i++){
            if(event.key === arr[i]){
                textContainer.innerText +=event.key
            }
        }
    });
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
            if(event.target.tagName === 'BUTTON'){
                textContainer.innerText += event.target.textContent; 
            }  
                
            
            
        });
        container.appendChild(button);
    }










}
document.addEventListener('DOMContentLoaded', function() {
    createElem(russianAlphabet);
});


