let butCreate = document.createElement('button');
butCreate.innerText = 'CREATE';
butCreate.id = 'create';
document.body.appendChild(butCreate);

let createDateInput = document.createElement('input');
createDateInput.type = 'date';
createDateInput.id = 'inputColendar';
createDateInput.name = 'trip-start';
createDateInput.min = '2005-06-07';
createDateInput.max = '2024-11-28';
document.body.appendChild(createDateInput);

let createTimeInput = document.createElement('input');
createTimeInput.type = 'time';
createTimeInput.id = 'inputTime';
document.body.appendChild(createTimeInput);

let container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);

let span = document.createElement('span');
span.id = 'closeSpan';
span.innerHTML = 'X';
container.appendChild(span);

span.addEventListener('click', function() {
    container.style.display = 'none';
});

butCreate.addEventListener('click', function() {
    container.style.display = 'flex';
    container.innerHTML = '';

    container.appendChild(span);

    let inputValueDiv = document.createElement('div');
    inputValueDiv.innerText = createDateInput.value +' '+ createTimeInput.value;
    container.appendChild(inputValueDiv);

    let time = document.createElement('p');
    time.innerText = moment().format('MMMM Do YYYY, h:mm:ss a');
    container.appendChild(time);
});

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'HTML' || event.target.tagName === 'BODY') {
        container.style.display = 'none';
    }
});
