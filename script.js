const calculatorButtons = document.querySelectorAll('.calc-button');
const resultField = document.querySelector('.result');
calculatorButtons.forEach(button => listenToButtons(button));
function listenToButtons(button){
    return button.addEventListener('click', function() {makeFunctional(button.id)});
}
function makeFunctional(buttonID){
    if (buttonID === "reset") return resetDisplay();
    if (buttonID === "add" || buttonID === "subtract" || buttonID === "multiply"
    || buttonID === "divide" || buttonID === "sum") return currentOperation = buttonID;
    return resultField.textContent += buttonID;
}
function resetDisplay() {
    resultField.textContent = " "
    return console.log("Display has been cleared.")
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

function operate(operation, number, number2) {
    if (operation === "add") return add(number, number2);
    if (operation === "subtract") return subtract(number, number2);
    if (operation === "multiply") return multiply(number, number2);
    if (operation === "divide") return divide(number, number2);
    return console.log("I didn't quite expect that.")
}
