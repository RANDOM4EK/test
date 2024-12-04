let butCreate = document.createElement('button');
butCreate.innerText = 'CREATE';
butCreate.id = 'create';
document.body.appendChild(butCreate);

let createDateInput = document.createElement('input');
createDateInput.type = 'date';
createDateInput.id = 'inputColendar';
createDateInput.name = 'trip-start';
createDateInput.min = '2024-11-29';
createDateInput.max = '2025-12-31';
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

let events = [];

butCreate.addEventListener('click', function() {
    container.style.display = 'flex';
    container.innerHTML = ''; 
    
    container.appendChild(span);

    let inputValueDiv = document.createElement('div');
    inputValueDiv.innerText = createDateInput.value + ' ' + createTimeInput.value;
    container.appendChild(inputValueDiv);

    let time = document.createElement('p');
    time.innerText = moment().format('MMMM Do YYYY, h:mm:ss a');
    container.appendChild(time);

    let h1 = document.createElement('h1');
    h1.innerText = 'Добавьте событие';
    container.appendChild(h1);

    let inputEvent = document.createElement('input');
    inputEvent.id = 'inputEvent';
    container.appendChild(inputEvent);

    let buttonEvent = document.createElement('button');
    buttonEvent.id = 'buttonEvent';
    buttonEvent.innerText = 'Отправить';
    container.appendChild(buttonEvent);

    buttonEvent.addEventListener('click', function() {
        let inputValue = inputEvent.value;

        let createInfoEvent = document.createElement('div');
        createInfoEvent.id = 'createInfoEvent';

        let currentTime = document.createElement('p');
        currentTime.id = 'currentTime';
        currentTime.innerText = time.textContent;
        createInfoEvent.appendChild(currentTime);

        let specifiedTime = document.createElement('p');
        specifiedTime.id = 'specifiedTime';
        specifiedTime.innerText = inputValueDiv.textContent;
        createInfoEvent.appendChild(specifiedTime);

        let eventText = document.createElement('p');
        eventText.id = 'eventText';
        eventText.innerText = inputValue;
        createInfoEvent.appendChild(eventText);

        events.push({
            element: createInfoEvent,
            date: new Date(specifiedTime.innerText)
        });

        
        events.sort((a, b) => a.date - b.date);

        updateSortedEvents();
    });
});

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'HTML' || event.target.tagName === 'BODY') {
        container.style.display = 'none';
    }
});

function updateSortedEvents() {
    let mainContainer = document.getElementById('mainContainer');

    if (!mainContainer) {
        mainContainer = document.createElement('div');
        mainContainer.id = 'mainContainer';
        document.body.appendChild(mainContainer);
    }

    mainContainer.innerHTML = '';

    events.forEach(event => {
        let month = event.date.toLocaleString('default', { month: 'long' });
        let year = event.date.getFullYear();
        let monthContainerId = `${month}-${year}`;

        let monthContainer = document.getElementById(monthContainerId);
        if (!monthContainer) {
            monthContainer = document.createElement('div');
            monthContainer.id = monthContainerId;
            monthContainer.className = 'monthContainer';
            let monthHeader = document.createElement('h2');
            monthHeader.innerText = `${month} ${year}`;
            monthContainer.appendChild(monthHeader);
            mainContainer.appendChild(monthContainer);
        }

        monthContainer.appendChild(event.element);
    });
}
