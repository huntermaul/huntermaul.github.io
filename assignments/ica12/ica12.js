const minusButton = document.querySelector('.minus-button').addEventListener('click',minus);
const plusButton = document.querySelector('.plus-button').addEventListener('click',plus);
const resetButton = document.querySelector('.reset-button').addEventListener('click',reset);
const randomButton = document.querySelector('.random-button').addEventListener('click',random);
const submitButton = document.querySelector('.submit-button').addEventListener('click',submit);

const output = document.querySelector('.output');
let outputValue = parseInt(output.textContent);

function submit() {
    alert(output.textContent);
}

function random() {
    outputValue = randomNumber(100000000,999999999);
    output.textContent = outputValue;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function reset() {
    outputValue = 0;
    output.textContent = outputValue;
}

function plus() {
    if (outputValue < 9999999999) {
        outputValue += 1;
        output.textContent = outputValue;
    }
}

function minus() {
    if (outputValue > 0) {
        outputValue -= 1;
        output.textContent = outputValue;
    }
}