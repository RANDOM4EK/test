const container = document.createElement('div');
container.id = 'formContainer';
document.body.appendChild(container);

const form = document.createElement('form');
form.id = 'dynamicForm';

const textLabel = document.createElement('label');
textLabel.htmlFor = 'text';
textLabel.textContent = 'Text:';
const textInput = document.createElement('input');
textInput.type = 'text';
textInput.id = 'text';
textInput.name = 'text';
textInput.required = true

const emailLabel = document.createElement('label');
emailLabel.htmlFor = 'email';
emailLabel.textContent = 'Email:';
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.name = 'email';
emailInput.required = true

const passwordLabel = document.createElement('label');
passwordLabel.htmlFor = 'password';
passwordLabel.textContent = 'Password:';
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.id = 'password';
passwordInput.name = 'password';
passwordInput.required = true

const submitButton = document.createElement('button');
submitButton.id = 'submitButton'
submitButton.innerText = 'Отправить'


const redText = document.createElement('p')
redText.id = 'redText'
redText.innerText = 'Не верный логин или пароль'
redText.style.display = 'none'


form.appendChild(textLabel);
form.appendChild(textInput);
form.appendChild(document.createElement('br'));
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.appendChild(document.createElement('br'));
form.appendChild(passwordLabel);
form.appendChild(passwordInput);
form.appendChild(document.createElement('br'));
form.appendChild(submitButton);
form.appendChild(document.createElement('br'));
form.appendChild(redText)

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    const text = textInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    if(password.length < 5){
        redText.style.display = 'block'
        submitButton.style.backgroundColor = 'red'
    }
    else{
        submitButton.style.backgroundColor=  'green'
        redText.style.display = 'none'
        console.log('Text:', text);
        console.log('Email:', email);
        console.log('Password:', password);
    }
    
});




document.getElementById('formContainer').appendChild(form);