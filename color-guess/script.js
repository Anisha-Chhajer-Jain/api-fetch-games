const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');

const colorBoxes = document.querySelectorAll('.color-box');
console.log(colorBoxes);

const newRoundBtn = document.querySelector('#newRoundBtn');

const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');

// variables...
var currentStreak = 0; // user-->track
var bestStreak = 0; //previously data fetch ->store
var pickCorrectColor = 0; //random color
var color = [];  // ->empty array -> 6 - color store index-by-index
var num = 6;  //->loop control

function webLoad() {
    onLoad();
    colorGenerate();
    setGame();
    displayContent();
}

// whenever the website will load then first it will load the entire data so it will return the data.....
function onLoad() {
    var temp = localStorage.getItem('highBestStreak');
    if (temp != null) {
        bestStreak = parseInt(temp); // --> here the localStorage contains the data so it will return the data no.
    } else {
        bestStreak = 0;  //if there is no data in LS so it will return null instead of number
    }
}


// here we will define the display content message in a function format..

function displayContent() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;
}

// webload();

// random color generator
function colorGenerate() {
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    return `rgb(${a}, ${b}, ${c})`;     //taki color eksum mast proper aaye
}

function generateColor(num) {      //num-> 6     i=0,colorGenerate->rgb(122,23,54)   
    const arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(colorGenerate());
    }
    return arr;
}

function pickGenerator() {
    const index= Math.floor(Math.random() * color.length);
    console.log(index);
    return color[index];
}

function setGame() {
    color = generateColor(num);
    pickCorrectColor = pickGenerator();
    console.log(color);
    console.log(pickCorrectColor);
    colorDisplay.textContent = pickCorrectColor;
    for (var i = 0; i < color.length; i++) {
        colorBoxes[i].style.backgroundColor = color[i];
    }
}

webLoad();
