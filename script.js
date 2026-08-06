// Counter

let count = 0;

const counter = document.getElementById("count");

// Increase

function increase(){

count++;

counter.innerHTML = count;

}

// Decrease

function decrease(){

count--;

counter.innerHTML = count;

}

// Reset

function resetCounter(){

count = 0;

counter.innerHTML = count;

}

// Greeting

function showMessage(){

alert("Welcome to My First JavaScript Project!");

}

// Background Color

function changeColor(){

const colors = [

"#f2f2f2",

"#ffe4b5",

"#d4f1f9",

"#d8ffd8",

"#ffd6d6",

"#f9d6ff",

"#fffacd"

];

let random = Math.floor(Math.random()*colors.length);

document.body.style.background = colors[random];

}

// Digital Clock

function showClock(){

let now = new Date();

document.getElementById("clock").innerHTML = now.toLocaleTimeString();

}

setInterval(showClock,1000);

// Date

let today = new Date();

document.getElementById("date").innerHTML =
today.toDateString();

// Console Message

console.log("Project Loaded Successfully");
