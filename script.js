let selectedLables = [];
let numberOfSelectedLabels = 0;
let today = document.getElementById("date");
let d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
today.innerHTML = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
let currDate = d.getMonth() + " " + d.getDate() + " " + d.getFullYear();

const yellow_title = "Fruits";
const catagory_yellow = ["Kiwi", "Lemon", "Banana", "Orange"];
const green_title = "Household Pets";
const catagory_green = ["Cat", "Dog", "Fish", "Hamster"];
const blue_title = "Countries";
const catagory_blue = ["Chili", "Turkey", "Jordan", "Togo"];
const purple_title = "Birds";
const catagory_purple = ["Crane", "Jay", "Swallow", "Owl"];

let numOfMistakes = 4;


function selectButton(label) {
    let button = document.getElementById(label);
    
    if (numberOfSelectedLabels < 4 && (button.style.background === "rgb(239, 239, 230)" || button.style.background === "")) {
        button.style.background = "#5A594E";
        button.style.color = "#FFFFFF"
        numberOfSelectedLabels++;
        selectedLables.push(button.innerHTML);
    } else if( button.style.background === "rgb(90, 89, 78)"){
        button.style.background = "rgb(239, 239, 230)";
        button.style.color = "#000000"
        numberOfSelectedLabels--;
        selectedLables = selectedLables.filter(item => item !== button.innerHTML);
    }

    console.log( selectedLables);
}

function checkCatagory() {
    catagory_yellow.sort();
    catagory_green.sort();
    catagory_blue.sort();
    catagory_purple.sort();
    selectedLables.sort();
    if(isEqual(catagory_yellow, selectedLables)){
        alert("That was " + yellow_title);
        resetMistakes();
    } else if (isEqual(catagory_green, selectedLables)) {
        alert("You have won the game");
        resetMistakes();
    } else if (isEqual(catagory_blue, selectedLables)) {
        alert("You have won the game");
        resetMistakes();
    } else if (isEqual(catagory_purple, selectedLables)) {
        alert("You have won the game");
        resetMistakes();
    } else {
        minusMistake();
    }
}

function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
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
    //let availableItem = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    let availableLabels = ["b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10", "b11", "b12", "b13", "b14", "b15"];
    let availableItem = catagory_yellow.concat(catagory_green, catagory_blue, catagory_purple);

    while(availableItem.length > 0) {
        let rand1 = Math.floor(Math.random() * availableItem.length);
        let rand2 = Math.floor(Math.random() * availableLabels.length);

        let cat = availableItem[rand1];
        let tempLabel = availableLabels[rand2];

        document.getElementById(tempLabel).innerHTML = cat;
        availableItem = availableItem.filter(item => item !== cat);
        availableLabels = availableLabels.filter(item => item !== tempLabel);
    }
}