const randomButton1 = document.querySelector('.random-button1').addEventListener('click',random1);
const randomButton2 = document.querySelector('.random-button2').addEventListener('click',random2);
const randomButton3 = document.querySelector('.random-button3').addEventListener('click',random3);
const randomButton4 = document.querySelector('.random-button4').addEventListener('click',random4);
const randomButton5 = document.querySelector('.random-button5').addEventListener('click',random5);
const randomButton6 = document.querySelector('.random-button6').addEventListener('click',random6);
const randomButton7 = document.querySelector('.random-button7').addEventListener('click',random7);
const randomButton8 = document.querySelector('.random-button8').addEventListener('click',random8);
const randomButton9 = document.querySelector('.random-button9').addEventListener('click',random9);
const randomButton10 = document.querySelector('.random-button10').addEventListener('click',random10);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);

let decision = 0;

function submit() {
    decision = randomNumber(1,3);
    if (decision == 1) {
        alert('Your phone number is: '+
            output1.textContent+
            output2.textContent+
            output3.textContent+
            output4.textContent+
            output5.textContent+
            output6.textContent+
            output7.textContent+
            output8.textContent+
            output9.textContent+
            output10.textContent);
    } else {
        alert('Something went wrong. You\'ll have to try again :(');
        reset();
    }
}

function reset() {
    outputValue1 = 0;
    output1.textContent = outputValue1;
    outputValue2 = 0;
    output2.textContent = outputValue2;
    outputValue3 = 0;
    output3.textContent = outputValue3;
    outputValue4 = 0;
    output4.textContent = outputValue4;
    outputValue5 = 0;
    output5.textContent = outputValue5;
    outputValue6 = 0;
    output6.textContent = outputValu6;
    outputValue7 = 0;
    output7.textContent = outputValue7;
    outputValue8 = 0;
    output8.textContent = outputValue8;
    outputValue9 = 0;
    output9.textContent = outputValue9;
    outputValue10 = 0;
    output10.textContent = outputValue10;
}

const output1 = document.querySelector('.output1');
let outputValue1 = parseInt(output1.textContent);

const output2 = document.querySelector('.output2');
let outputValue2 = parseInt(output2.textContent);

const output3 = document.querySelector('.output3');
let outputValue3 = parseInt(output3.textContent);

const output4 = document.querySelector('.output4');
let outputValue4 = parseInt(output4.textContent);

const output5 = document.querySelector('.output5');
let outputValue5 = parseInt(output5.textContent);

const output6 = document.querySelector('.output6');
let outputValue6 = parseInt(output6.textContent);

const output7 = document.querySelector('.output7');
let outputValue7 = parseInt(output7.textContent);

const output8 = document.querySelector('.output8');
let outputValue8 = parseInt(output8.textContent);

const output9 = document.querySelector('.output9');
let outputValue9 = parseInt(output9.textContent);

const output10 = document.querySelector('.output10');
let outputValue10 = parseInt(output10.textContent);

function random1() {
    outputValue1 = randomNumber(0,9);
    output1.textContent = outputValue1;
}

function random2() {
    outputValue2 = randomNumber(0,9);
    output2.textContent = outputValue2;
}

function random3() {
    outputValue3 = randomNumber(0,9);
    output3.textContent = outputValue3;
}

function random4() {
    outputValue4 = randomNumber(0,9);
    output4.textContent = outputValue4;
}

function random5() {
    outputValue5 = randomNumber(0,9);
    output5.textContent = outputValue5;
}

function random6() {
    outputValue6 = randomNumber(0,9);
    output6.textContent = outputValue6;
}

function random7() {
    outputValue7 = randomNumber(0,9);
    output7.textContent = outputValue7;
}

function random8() {
    outputValue8 = randomNumber(0,9);
    output8.textContent = outputValue8;
}

function random9() {
    outputValue9 = randomNumber(0,9);
    output9.textContent = outputValue9;
}

function random10() {
    outputValue10 = randomNumber(0,9);
    output10.textContent = outputValue10;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}