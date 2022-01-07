const calculatorButtons = document.querySelectorAll('.calc-button');
const resultField = document.querySelector('.result-text');
calculatorButtons.forEach(button => attachButtonListener(button));
let currentOperation;
function attachButtonListener(button){
    return button.addEventListener('click', function() {makeFunctional(button.id)});
}
function makeFunctional(buttonID){
    if (buttonID === "reset") return resetDisplay();
    if (buttonID === "backspace") return removeLast();
    if (buttonID === "theme") return changeTheme();
    if (buttonID === "add" || buttonID === "subtract" || buttonID === "multiply"
    || buttonID === "divide" || buttonID === "sum") return currentOperation = buttonID;
    return resultField.textContent += buttonID;
}
function resetDisplay() {
    resultField.textContent = "";
    return console.log("Display has been cleared.");
}
function removeLast() {
    let resultText = resultField.textContent;
    if (resultText === "") return console.log("Nothing to remove.");
    resultText = resultText.slice(0, resultText.length-1); 
    console.log("Removing last entry...");
    return resultField.textContent = resultText;
}
function add(number, number2) {
    return number + number2;
}

function subtract(number, number2) {
    return number - number2;
}

function multiply(number, number2) {
    return number * number2;
}

function divide(number, number2) {
    return number / number2;
}
function calculate() {
    return operate(currentOperation, currentNumber, currentNumber2)
}
function operate(operation, number, number2) {
    if (operation === "add") return add(number, number2);
    if (operation === "subtract") return subtract(number, number2);
    if (operation === "multiply") return multiply(number, number2);
    if (operation === "divide") return divide(number, number2);
    return console.log("I didn't quite expect that.")
}
