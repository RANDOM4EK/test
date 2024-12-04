let button = document.createElement('button');
button.id = 'buttonAnimation';
button.innerText = 'Двигать';
document.body.appendChild(button);

let div = document.createElement('div');
div.id = 'divAnimation';
document.body.appendChild(div);


let start = null;
let colmX = 0;
let colmY = 0;
let movingY = false;

function clickAnimation(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;

    if (!movingY) {
        div.style.transform = "translateX(" + (colmX + Math.min(progress / 10, 50)) + "px) translateY(" + colmY + "px)";
        if (progress <= 500) {
            colmX += 50;
            start = null;
            movingY = true;
        }
    } else {
        div.style.transform = "translateX(" + colmX + "px) translateY(" + (colmY + Math.min(progress / 10, 50)) + "px)";
        if (progress <= 500) {
            colmY += 50;
            start = null;
            movingY = false;
        }
    }

    if (progress < 1000) {
        requestAnimationFrame(clickAnimation);
    }
}

button.addEventListener('click', function() {
    if (!start) {
        requestAnimationFrame(clickAnimation);
    }
});
