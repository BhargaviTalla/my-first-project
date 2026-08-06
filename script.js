// ===============================
// My First JavaScript Project
// Author: Bhargavi Talla
// ===============================

// Runs when the page loads
window.onload = function () {
    console.log("Project Loaded Successfully!");
};

// Display a welcome message
function greet() {
    alert("Hello! Welcome to My First JavaScript Project.");
}

// Change the heading text
function changeHeading() {
    document.getElementById("heading").innerHTML =
        "Congratulations! You clicked the button.";
}

// Display the current date and time
function showDateTime() {
    const currentDate = new Date();

    document.getElementById("dateTime").innerHTML =
        "Current Date & Time: " + currentDate.toLocaleString();
}

// Change the page background color
function changeBackground() {
    const colors = [
        "#f4f4f4",
        "#d4f1f9",
        "#ffe4b5",
        "#e6ffe6",
        "#f9d6ff"
    ];

    const randomColor =
        colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
}
