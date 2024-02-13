let selectedLables = [];
let numberOfSelectedLabels = 0;

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
    let label = "m3";
    let button = document.getElementById(label);
    button.style.display = "none";
}