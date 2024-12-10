let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');

let transforms = {
    img0: 0,
    img1: 0,
    img2: 0
};

function updateTransform(id, value) {
    document.getElementById(id).style.transform = `translate(${value}px, 0)`;
}

rightButton.addEventListener('click', function() {
    transforms.img0 = transforms.img0 === 200 ? 400 : (transforms.img0 === 400 ? 0 : 200);
    transforms.img1 = transforms.img1 === -200 ? 0 : (transforms.img1 === 0 ? 200 : -200);
    transforms.img2 = transforms.img2 === 0 ? -400 : (transforms.img2 === -400 ? -200 : 0);

    updateTransform('img0', transforms.img0);
    updateTransform('img1', transforms.img1);
    updateTransform('img2', transforms.img2);
});

leftButton.addEventListener('click', function() {
    transforms.img0 = transforms.img0 === 200 ? 0 : (transforms.img0 === 0 ? 400 : 200);
    transforms.img1 = transforms.img1 === -200 ? 200 : (transforms.img1 === 200 ? 0 : -200);
    transforms.img2 = transforms.img2 === 0 ? -200 : (transforms.img2 === -200 ? -400 : 0);

    updateTransform('img0', transforms.img0);
    updateTransform('img1', transforms.img1);
    updateTransform('img2', transforms.img2);
});
