let mrI = document.querySelector('div');
mrI.addEventListener('click', changeImage);
mrI.addEventListener('mousedown', yellowBg);
mrI.addEventListener('mouseup', redBg);

let img = document.getElementById("image");
let tit = document.getElementById("caption");

function changeImage() {
    img.src = "mr2.png";
    tit.innerHTML = "You shouldn't have done that."
}

function yellowBg() {
    document.body.style.backgroundColor = 'yellow';
}

function redBg() {
    document.body.style.backgroundColor = 'red';
}