let selectedLables = [];

function selectButton(label) {
    let button = document.getElementById(label);
    button.style.color = "red";
    console.log("Button clicked " + label);
}