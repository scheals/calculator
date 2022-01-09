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
    if (this.operator === "add") return add(+this.firstNumber, +this.secondNumber);
    if (this.operator === "subtract") return subtract(+this.firstNumber, +this.secondNumber);
    if (this.operator === "multiply") return multiply(+this.firstNumber, +this.secondNumber);
    if (this.operator === "divide") return divide(+this.firstNumber, +this.secondNumber);
    return console.log("I didn't quite expect that.");    

    },

}
function attachButtonListener(button){
    return button.addEventListener('click', function() {makeFunctional(button.id)});
}

function makeFunctional(buttonID){
    if (buttonID === "reset") return resetDisplay();
    if (buttonID === "backspace") return removeLast();
    if (buttonID === "theme") return changeTheme();
    if (buttonID === "period" && Resulter.firstNumber.includes(".") === false && Resulter.firstNumber !== "") {
        Resulter.firstNumber += "."
        return resultField.textContent += ".";
    } else if  (buttonID === "period" && Resulter.secondNumber.includes(".") === false && Resulter.secondNumber !== ""){
        Resulter.secondNumber += "."
        return resultField.textContent += ".";
    }
    if (buttonID === "period") return console.log("That's enough periods.")
    switch (buttonID) {
        case "add": 
            if (resultField.textContent.match(/[-\+\*/]/g)){
                resultField.textContent = resultField.textContent.replace(/[-\+\*/]/g, "+")
                return Resulter.operator = buttonID;
            } else{
                resultField.textContent += " + ";
                return Resulter.operator = buttonID;
            }
        case "subtract": 
            if (resultField.textContent.match(/[-\+\*/]/g)){
                resultField.textContent = resultField.textContent.replace(/[-\+\*/]/g, "-")
                return Resulter.operator = buttonID;
            } else{
                resultField.textContent += " - ";
                return Resulter.operator = buttonID;
            }
        case "multiply": 
            if (resultField.textContent.match(/[-\+\*/]/g)){
                resultField.textContent = resultField.textContent.replace(/[-\+\*/]/g, "*")
                return Resulter.operator = buttonID;
            } else{
                resultField.textContent += " * ";
                return Resulter.operator = buttonID;
            }
        case "divide": 
            if (resultField.textContent.match(/[-\+\*/]/g)){
                resultField.textContent = resultField.textContent.replace(/[-\+\*/]/g, "/")
                return Resulter.operator = buttonID;
            } else{
                resultField.textContent += " / ";
                return Resulter.operator = buttonID;
            }
    }
    if (buttonID === "sum") {
       return Resulter.operate();
    }
    if (Resulter.operator === "") {
        Resulter.firstNumber += buttonID;
        return resultField.textContent += buttonID;
    } else {
        Resulter.secondNumber += buttonID;
        return resultField.textContent += buttonID;
    }
}

function resetDisplay() {
    Resulter.firstNumber = "";
    Resulter.secondNumber = "";
    Resulter.operator = "";
    resultField.textContent = "";
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
    resultField.textContent = result;
    return Resulter.firstNumber = result;
}

function subtract(number, number2) {
    let result = number - number2;
    Resulter.secondNumber = "";
    Resulter.operator = "";
    resultField.textContent = result;
    return Resulter.firstNumber = result;
}

function multiply(number, number2) {
    let result = number * number2;
    Resulter.secondNumber = "";
    Resulter.operator = "";
    resultField.textContent = result;
    return Resulter.firstNumber = result;
}

function divide(number, number2) {
    let result = number / number2;
    Resulter.secondNumber = "";
    Resulter.operator = "";
    resultField.textContent = result;
    return Resulter.firstNumber = result;
}

// function calculate() {
//     return operate(currentOperation, currentNumber, currentNumber2)
// }

// function operate(operation, number, number2) {
//     if (+number !== Number || +number2 !== Number) return console.log("One of the numbers ain't one.");
//     if (operation === "add") return add(+number, +number2);
//     if (operation === "subtract") return subtract(+number, +number2);
//     if (operation === "multiply") return multiply(+number, +number2);
//     if (operation === "divide") return divide(+number, +number2);
//     return console.log("I didn't quite expect that.");
// }
