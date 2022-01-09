const calculatorButtons = document.querySelectorAll('.calc-button');
const resultField = document.querySelector('.result-text');
calculatorButtons.forEach(button => attachButtonListener(button));
const Resulter ={
    operator : "",
    firstNumber: "",
    secondNumber: "",
    operate : 
    function () {

    if ((typeof(+(this.firstNumber)) !== "number") || (typeof(+(this.secondNumber)) !== "number")) return console.log("One of the numbers ain't one.");
    if (this.operator === "+") return add(+this.firstNumber, +this.secondNumber);
    if (this.operator === "-") return subtract(+this.firstNumber, +this.secondNumber);
    if (this.operator === "*") return multiply(+this.firstNumber, +this.secondNumber);
    if (this.operator === "/") return divide(+this.firstNumber, +this.secondNumber);
    return console.log("I didn't quite expect that.");    

    },

}
function attachButtonListener(button){
    return button.addEventListener('click', function() {makeFunctional(button.id)});
}
function createDisplay(){
    return resultField.textContent = `${Resulter.firstNumber}` + " " + `${Resulter.operator}` + " " + `${Resulter.secondNumber}`;
}
function makeFunctional(buttonID){
    if (buttonID === "reset") return resetDisplay();
    if (buttonID === "backspace") return removeLast();
    if (buttonID === "theme") return changeTheme();
    if (buttonID === "period" && Resulter.firstNumber.includes(".") === false && Resulter.firstNumber !== "") {
        Resulter.firstNumber += "."
        return createDisplay();
    } else if  (buttonID === "period" && Resulter.secondNumber.includes(".") === false && Resulter.secondNumber !== ""){
        Resulter.secondNumber += "."
        return createDisplay();
    }
    if (buttonID === "period") return console.log("That's enough periods.")
    switch (buttonID) {
        case "add": 
            Resulter.operator = "+";
            return createDisplay();
        case "subtract": 
            Resulter.operator = "-";
            return createDisplay();
        case "multiply": 
            Resulter.operator = "*";
            return createDisplay();
        case "divide": 
            Resulter.operator = "/";
            return createDisplay();
    }
    if (buttonID === "sum") {
        if (Resulter.secondNumber === "") return console.log("It takes two to tango.")
        return Resulter.operate();
    }
    if (Resulter.operator === "") {
        Resulter.firstNumber += buttonID;
        return createDisplay();
    } else {
        Resulter.secondNumber += buttonID;
        return createDisplay();
    }
}

function resetDisplay() {
    Resulter.firstNumber = "";
    Resulter.secondNumber = "";
    Resulter.operator = "";
    createDisplay();
    return console.log("Display has been cleared.");
}

function removeLast() {
    let resultText = resultField.textContent;
    if (resultText === "") return console.log("Nothing to remove.");
    resultText = resultText.slice(0, resultText.length-1); 
    return resultField.textContent = resultText;
}

function add(number, number2) {
    let result = number + number2;
    Resulter.secondNumber = "";
    Resulter.operator = "";
    Resulter.firstNumber = String(result);
    return createDisplay();
}

function subtract(number, number2) {
    let result = number - number2;
    Resulter.secondNumber = "";
    Resulter.operator = "";
    Resulter.firstNumber = String(result);
    return createDisplay();
}

function multiply(number, number2) {
    let result = number * number2;
    Resulter.secondNumber = "";
    Resulter.operator = "";
    Resulter.firstNumber = String(result);
    return createDisplay();
}

function divide(number, number2) {
    let result = number / number2;
    Resulter.secondNumber = "";
    Resulter.operator = "";
    Resulter.firstNumber = String(result);
    return createDisplay();
}
