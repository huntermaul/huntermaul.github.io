const shirtButton = document.querySelector('.new-shirt');
shirtButton.addEventListener('click', getShirt);
const pantsButton = document.querySelector('.new-pants');
pantsButton.addEventListener('click', getPants);
const shoesButton = document.querySelector('.new-shoes');
shoesButton.addEventListener('click', getShoes);

var shirtsArray = ["./img/shirts/shirt1.png","./img/shirts/shirt2.png","./img/shirts/shirt3.png",
"./img/shirts/shirt4.png","./img/shirts/shirt5.png","./img/shirts/shirt6.png","./img/shirts/shirt7.png",
"./img/shirts/shirt8.png","./img/shirts/shirt9.png","./img/shirts/shirt10.png","./img/shirts/shirt11.png",
"./img/shirts/shirt12.png"];

var pantsArray = ["./img/pants/pants1.png","./img/pants/pants2.png","./img/pants/pants3.png","./img/pants/pants4.png",
"./img/pants/pants5.png","./img/pants/pants6.png","./img/pants/pants7.png","./img/pants/pants8.png"];

var shoesArray = ["./img/shoes/shoes1.png","./img/shoes/shoes2.png","./img/shoes/shoes3.png","./img/shoes/shoes4.png",
"./img/shoes/shoes5.png","./img/shoes/shoes6.png","./img/shoes/shoes7.png"];

function shuffle() {
    getShirt();
    getPants();
    getShoes();
}

function getShirt() {
    console.log("beef");
    let shirtNumber = getRandomInt(0,shirtsArray.length);

    let image = document.getElementById("image");
 
    image.src = shirtsArray[shirtNumber];
}

function getPants() {
    let pantsNumber = getRandomInt(0,shirtsArray.length);

    let image = document.getElementById("image2");
 
    image.src = pantsArray[pantsNumber];
}

function getShoes() {
    let shoeNumber = getRandomInt(0,shoesArray.length);

    let image = document.getElementById("image3");
 
    image.src = shoesArray[shoeNumber];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}