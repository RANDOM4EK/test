let button = document.getElementById("button")
let h1 = document.getElementById("h1")
function change(){
    h1.innerText = 'Получилось'
}


function createElem(){
    const ul = document.getElementById('itemList'); 
    const li = document.createElement('li'); 
    const newItemText = ` ${ul.children.length + 1}`; 
    li.innerText = newItemText; ul.appendChild(li);
}