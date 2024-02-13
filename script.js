let selectedLables = [];
let numberOfSelectedLabels = 0;
let today = document.getElementById("date");
let d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
today.innerHTML = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
let currDate = d.getMonth() + " " + d.getDate() + " " + d.getFullYear();

const catagory_yellow = ["Fruits", ["Kiwi", "Lemon", "Banana", "Orange"]];
const catagory_green = ["Household Pets", ["Cat", "Dog", "Fish", "Hamster"]];
const catagory_blue = ["Countries", ["Chili", "Turkey", "Jordan", "Togo"]];
const catagory_purple = ["Birds", ["Crane", "Jay", "Swallow", "Owl"]];

let numOfMistakes = 4;


function selectButton(label) {
    let button = document.getElementById(label);
    console.log("BG COLOR " + button.style.background);
    
    if (numberOfSelectedLabels < 4 && (button.style.background === "rgb(239, 239, 230)" || button.style.background === "")) {
        button.style.background = "#5A594E";
        button.style.color = "#FFFFFF"
        numberOfSelectedLabels++;
        selectedLables.push(label);
    } else if( button.style.background === "rgb(90, 89, 78)"){
        button.style.background = "rgb(239, 239, 230)";
        button.style.color = "#000000"
        numberOfSelectedLabels--;
        selectedLables = selectedLables.filter(item => item !== label);
    }
    
    console.log("Number of selected labels: " + numberOfSelectedLabels);

    console.log("Selected labels: " + selectedLables);
}















function minusMistake() {
    let label = "m";
    let button = document.getElementById(label + numOfMistakes);
    button.style.display = "none";
    numOfMistakes--;
    
    if (numOfMistakes === 0) {
        setTimeout( alert("You have lost the game"), 1000);
        //resetMistakes();
    }
}

function resetMistakes() {
    numOfMistakes = 4;
    for (let i = 1; i <= 4; i++) {
        let button = document.getElementById("m" + i);
        button.style.display = "block";
    }
}

function shuffle() {
    let availableItem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let availableLabels = ["b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10", "b11", "b12", "b13", "b14", "b15"];

    while(availableItem.length > 0) {
        let rand1 = Math.floor(Math.random() * availableItem.length);
        let rand2 = Math.floor(Math.random() * availableLabels.length);

        let cat = availableItem[rand1];
        let tempLabel = availableLabels[rand2];

        console.log("TL " + tempLabel + " CAT " + cat);
        console.log(availableItem);
        console.log(availableLabels);
        document.getElementById(tempLabel).innerHTML = cat;
        availableItem = availableItem.filter(item => item !== cat);
        availableLabels = availableLabels.filter(item => item !== tempLabel);
    }
}