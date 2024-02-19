let selectedLables = [];
let numberOfSelectedLabels = 0;
let selectedID = [];
let today = document.getElementById("date");
let d = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
today.innerHTML = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
let currDate = d.getMonth() + " " + d.getDate() + " " + d.getFullYear();

let answeredCatagory = 0;

const yellow_title = "Fruits";
const catagory_yellow = ["Kiwi", "Lemon", "Banana", "Orange"];
const yellow_definition = "Kiwi, Lemon, Banana, Orange";
const green_title = "Household Pets";
const catagory_green = ["Cat", "Dog", "Fish", "Hamster"];
const green_definition = "Cat, Dog, Fish, Hamster";
const blue_title = "Countries";
const catagory_blue = ["Chili", "Turkey", "Jordan", "Togo"];
const blue_definition = "Chili, Turkey, Jordan, Togo";
const purple_title = "Birds";
const catagory_purple = ["Crane", "Jay", "Swallow", "Owl"];
const purple_definition = "Crane, Jay, Swallow, Owl";

let yellow = "#FFD700";
let green = "#00FF00";
let blue = "#0000FF";
let purple = "#800080";

let numOfMistakes = 4;


function selectButton(label) {
    let button = document.getElementById(label);
    
    if (numberOfSelectedLabels < 4 && (button.style.background === "rgb(239, 239, 230)" || button.style.background === "")) {
        button.style.background = "#5A594E";
        button.style.color = "#FFFFFF"
        numberOfSelectedLabels++;
        selectedLables.push(button.innerHTML);
        selectedID.push(label);
    } else if( button.style.background === "rgb(90, 89, 78)"){
        button.style.background = "rgb(239, 239, 230)";
        button.style.color = "#000000"
        numberOfSelectedLabels--;
        selectedLables = selectedLables.filter(item => item !== button.innerHTML);
        selectedID = selectedID.filter(item => item !== label);
    }

    console.log( selectedLables);
    console.log(selectedID);
}

function checkCatagory() {
    catagory_yellow.sort();
    catagory_green.sort();
    catagory_blue.sort();
    catagory_purple.sort();
    selectedLables.sort();
    if(isEqual(catagory_yellow, selectedLables)){
        groupCatagory(selectedLables, "yellow");
  
    } else if (isEqual(catagory_green, selectedLables)) {
        groupCatagory(selectedLables, "green");
 
    } else if (isEqual(catagory_blue, selectedLables)) {
        groupCatagory(selectedLables, "blue");
   
    } else if (isEqual(catagory_purple, selectedLables)) {
        groupCatagory(selectedLables, "purple");

    } else {
        minusMistake(selectedLables);
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

function groupCatagory(arr, color) {
    let currColor = "";
    if (color === "yellow") {
        currColor = "#FFD700";
    } else if (color === "green") {
        currColor = "#00FF00";
    } else if (color === "blue") {
        currColor = "#0000FF";
    } else {
        currColor = "#800080";
    }

    if(answeredCatagory === 0) {
        let b0 = document.getElementById("b0");
        let b1 = document.getElementById("b1");
        let b2 = document.getElementById("b2");
        let b3 = document.getElementById("b3");

        let swappable = [b0, b1, b2, b3];
        
        
        let t0 = document.getElementById(selectedID[0]);
        let t1 = document.getElementById(selectedID[1]);
        let t2 = document.getElementById(selectedID[2]);
        let t3 = document.getElementById(selectedID[3]);

        t0.style.background = "rgb(239, 239, 230)";
        t0.style.color = "#000000";
        t1.style.background = "rgb(239, 239, 230)";
        t1.style.color = "#000000";
        t2.style.background = "rgb(239, 239, 230)";
        t2.style.color = "#000000";
        t3.style.background = "rgb(239, 239, 230)";
        t3.style.color = "#000000";

        groupRow();

        if(selectedID.includes("b0")) {
            selectedID = selectedID.filter(item => item !== "b0");
            swappable = swappable.filter(item => item !== b0);
        } 
        if(selectedID.includes("b1")) {
            selectedID = selectedID.filter(item => item !== "b1");
            swappable = swappable.filter(item => item !== b1);
        }
        if(selectedID.includes("b2")) {
            selectedID = selectedID.filter(item => item !== "b2");
            swappable = swappable.filter(item => item !== b2);
        }
        if(selectedID.includes("b3")) {
            selectedID = selectedID.filter(item => item !== "b3");
            swappable = swappable.filter(item => item !== b3);
        }

        swap(swappable, selectedID);

        b0.style.background = currColor;
        b1.style.background = currColor;
        b2.style.background = currColor;
        b3.style.background = currColor;

        addRowDetails("one", currColor); 

        selectedLables = [];
        selectedID = [];
        answeredCatagory++;
        numberOfSelectedLabels = 0;

    } else if (answeredCatagory === 1) {
        let b4 = document.getElementById("b4");
        let b5 = document.getElementById("b5");
        let b6 = document.getElementById("b6");
        let b7 = document.getElementById("b7");
        let swappable = [b4, b5, b6, b7];

        let t4 = document.getElementById(selectedID[0]);
        let t5 = document.getElementById(selectedID[1]);
        let t6 = document.getElementById(selectedID[2]);
        let t7 = document.getElementById(selectedID[3]);

        t4.style.background = "rgb(239, 239, 230)";
        t4.style.color = "#000000";
        t5.style.background = "rgb(239, 239, 230)";
        t5.style.color = "#000000";
        t6.style.background = "rgb(239, 239, 230)";
        t6.style.color = "#000000";
        t7.style.background = "rgb(239, 239, 230)";
        t7.style.color = "#000000";

        if(selectedID.includes("b4")) {
            selectedID = selectedID.filter(item => item !== "b4");
            swappable = swappable.filter(item => item !== b4);
        }
        if(selectedID.includes("b5")) {
            selectedID = selectedID.filter(item => item !== "b5");
            swappable = swappable.filter(item => item !== b5);
        }
        if(selectedID.includes("b6")) {
            selectedID = selectedID.filter(item => item !== "b6");
            swappable = swappable.filter(item => item !== b6);
        }
        if(selectedID.includes("b7")) {
            selectedID = selectedID.filter(item => item !== "b7");
            swappable = swappable.filter(item => item !== b7);
        }

        swap(swappable, selectedID);

        b4.style.background = currColor;
        b5.style.background = currColor;
        b6.style.background = currColor;
        b7.style.background = currColor;

        addRowDetails("two", currColor);

        selectedLables = [];
        selectedID = [];
        answeredCatagory++;
        numberOfSelectedLabels = 0;

    } else if (answeredCatagory === 2) {
        let b8 = document.getElementById("b8");
        let b9 = document.getElementById("b9");
        let b10 = document.getElementById("b10");
        let b11 = document.getElementById("b11");
        let swappable = [b8, b9, b10, b11];

        let t8 = document.getElementById(selectedID[0]);
        let t9 = document.getElementById(selectedID[1]);
        let t10 = document.getElementById(selectedID[2]);
        let t11 = document.getElementById(selectedID[3]);

        t8.style.background = "rgb(239, 239, 230)";
        t8.style.color = "#000000";
        t9.style.background = "rgb(239, 239, 230)";
        t9.style.color = "#000000";
        t10.style.background = "rgb(239, 239, 230)";
        t10.style.color = "#000000";
        t11.style.background = "rgb(239, 239, 230)";
        t11.style.color = "#000000";

        
        
        if(selectedID.includes("b8")) {
            selectedID = selectedID.filter(item => item !== "b8");
            swappable = swappable.filter(item => item !== b8);
        }
        if(selectedID.includes("b9")) {
            selectedID = selectedID.filter(item => item !== "b9");
            swappable = swappable.filter(item => item !== b9);
        }
        if(selectedID.includes("b10")) {
            selectedID = selectedID.filter(item => item !== "b10");
            swappable = swappable.filter(item => item !== b10);
        }
        if(selectedID.includes("b11")) {
            selectedID = selectedID.filter(item => item !== "b11");
            swappable = swappable.filter(item => item !== b11);
        }

        swap(swappable, selectedID);

        b8.style.background = currColor;
        b9.style.background = currColor;
        b10.style.background = currColor;
        b11.style.background = currColor;

        addRowDetails("three", currColor);

        selectedLables = [];
        selectedID = [];
        answeredCatagory++;
        numberOfSelectedLabels = 0;

    } else if (answeredCatagory === 3) {
        let b12 = document.getElementById("b12");
        let b13 = document.getElementById("b13");
        let b14 = document.getElementById("b14");
        let b15 = document.getElementById("b15");
        let swappable = [b12, b13, b14, b15];

        let t12 = document.getElementById(selectedID[0]);
        let t13 = document.getElementById(selectedID[1]);
        let t14 = document.getElementById(selectedID[2]);
        let t15 = document.getElementById(selectedID[3]);

        t12.style.background = "rgb(239, 239, 230)";
        t12.style.color = "#000000";
        t13.style.background = "rgb(239, 239, 230)";
        t13.style.color = "#000000";
        t14.style.background = "rgb(239, 239, 230)";
        t14.style.color = "#000000";
        t15.style.background = "rgb(239, 239, 230)";
        t15.style.color = "#000000";

        

        if(selectedID.includes("b12")) {
            selectedID = selectedID.filter(item => item !== "b12");
            swappable = swappable.filter(item => item !== b12);
        }
        if(selectedID.includes("b13")) {
            selectedID = selectedID.filter(item => item !== "b13");
            swappable = swappable.filter(item => item !== b13);
        }
        if(selectedID.includes("b14")) {
            selectedID = selectedID.filter(item => item !== "b14");
            swappable = swappable.filter(item => item !== b14);
        }
        if(selectedID.includes("b15")) {
            selectedID = selectedID.filter(item => item !== "b15");
            swappable = swappable.filter(item => item !== b15);
        }

        swap(swappable, selectedID);

        b12.style.background = currColor;
        b13.style.background = currColor;
        b14.style.background = currColor;
        b15.style.background = currColor;

        addRowDetails("four", currColor);

        selectedLables = [];
        selectedID = [];
        answeredCatagory++;
        numberOfSelectedLabels = 0;


        endGame();
    } 
}

function swap(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        swapAnimation(arr1[i].id, arr2[i]);
    }
}

function swapAnimation(label1, label2) {
    let button1 = document.getElementById(label1);
    let button2 = document.getElementById(label2);

    let temp = button1.innerHTML;
    button1.innerHTML = button2.innerHTML;
    button2.innerHTML = temp;

}

function groupRow() {
    let b0 = document.getElementById("b0");
    let b1 = document.getElementById("b1");
    let b2 = document.getElementById("b2");
    let b3 = document.getElementById("b3");


}

function addRowDetails(row, color) {
    let rowID = "row-" + row;
    let rowDiv = document.getElementById(rowID);

    let labels = document.querySelectorAll("#" + rowID + " label");

    console.log(labels);
    for(let i = 0; i < labels.length; i++) {
        console.log(labels[i]);
        labels[i].style.zIndex = "-1";
    }

    rowDiv.style.background = color;

    let title = "";
    let definition = "";

    if(color === yellow) {
        title = yellow_title;
        definition = yellow_definition;
    } else if (color === green) {
        title = green_title;
        definition = green_definition;
    } else if (color === blue) {
        title = blue_title;
        definition = blue_definition;
    } else if (color === purple) {
        title = purple_title;
        definition = purple_definition;
    }
        

    let rowTitle = document.getElementById(rowID + "-title");
    let rowDefinition = document.getElementById(rowID + "-definition");

    rowTitle.innerHTML = title;
    rowDefinition.innerHTML = definition;

}


function minusMistake(selectedLables) {
    let label = "m";
    let button = document.getElementById(label + numOfMistakes);

    mistakeAnimation(button);
    //button.style.display = "none";
    numOfMistakes--;

    selectedLablesShake(selectedLables);
    
    if (numOfMistakes === 0) {
        
        //resetMistakes();
    }
}

function mistakeAnimation(button) {
    button.style.transition = "transform 0.5s";
    button.style.transform = "scale(2)";
    button.style.transition = "transform 0.5s";
    setInterval(() => {
        button.style.transform = "scale(0)";
    }, 500);

    setInterval(() => {
        button.style.display = "none";
    }, 1000);
}

function selectedLablesShake(selectedLables) {

    
    for (let i = 0; i < selectedLables.length; i++) {
        let button = document.getElementById(selectedID[i]);

        button.style.transition = "transform 0.5s";
        button.style.transform = "scale(1.1)";

        button.style.animation = "0.5s";
        setTimeout(() => {
            button.style.animation = "shake 0.5s";
        }, 500);
        

        setTimeout(() => {
            button.style.animation = "none";
            button.style.transition = "transform 0.5s";
            button.style.transform = "scale(1)";
        }, 1250);

       
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

function endGame() {
    
}

function resetBoard() {

}