const calculatorButtons = document.querySelectorAll('.calc-button');
const resultField = document.querySelector('.result-text');
calculatorButtons.forEach(button => attachButtonListener(button));
const restartCycle = document.querySelector('.restart-cycle');
restartCycle.addEventListener('mousedown', function () {recreateTheUniverse()});
window.addEventListener('keydown', e => makeKeyboardFunctional(e.code));
let hideCounter = 1;

const Resulter ={
    operator : "",
    nextOperator: "",
    firstNumber: "",
    secondNumber: "",
    operate :
    function () {

        if ((typeof(+(this.firstNumber)) !== "number") || (typeof(+(this.secondNumber)) !== "number")) return;
        if (this.operator === "+") return add(+this.firstNumber, +this.secondNumber);
        if (this.operator === "-") return subtract(+this.firstNumber, +this.secondNumber);
        if (this.operator === "*") return multiply(+this.firstNumber, +this.secondNumber);
        if (this.operator === "/") return divide(+this.firstNumber, +this.secondNumber);
        return;

    },

}

function attachButtonListener(button){
    return button.addEventListener('mousedown', function() {makeButtonsFunctional(button.dataset.buttonSymbol)});
}

function makeButtonsFunctional(buttonSymbol){
    let firstNumber = Resulter.firstNumber;
    let secondNumber = Resulter.secondNumber;
    let operator = Resulter.operator;
    let doesntAffectDisplay = (buttonSymbol === "reset" || buttonSymbol === "backspace" || buttonSymbol === "theme" || buttonSymbol === "sum");
    let displayLength = firstNumber.length + operator.length + secondNumber.length;
    if (!doesntAffectDisplay && displayLength >= 17) return alert("Display can only handle 17 characters total, two spaces from operator included.");
    switch (buttonSymbol) {
        case "reset":
            return resetCalculator();

        case "backspace":
            return removeLast();

        case "theme":
            return changeTheme();

        case "period":
            if (firstNumber.includes(".") === false && firstNumber !== "" && firstNumber !== "-" && secondNumber === "" && operator === "") {
                Resulter.firstNumber += ".";
                let dontCheckForPeriod = true;
                return createDisplay(dontCheckForPeriod);
            } else if  (secondNumber.includes(".") === false && secondNumber !== ""){
                Resulter.secondNumber += ".";
                let dontCheckForPeriod = true;
                return createDisplay(dontCheckForPeriod);
            }
            if (buttonSymbol === "period") return;

        case "add":
            if (firstNumber === "" || firstNumber === "-") return;
            if (operator !== "" && secondNumber !== "") {
                Resulter.nextOperator = "+"
                return Resulter.operate();
            }
            Resulter.operator = "+";
            return createDisplay();

        case "subtract":
            if (firstNumber === "" || firstNumber === "-") return;
            if (operator !== "" && secondNumber !== "") {
                Resulter.nextOperator = "-"
                return Resulter.operate();
            }
            Resulter.operator = "-";
            return createDisplay();

        case "multiply":
            if (firstNumber === "" || firstNumber === "-") return;
            if (operator !== "" && secondNumber !== "") {
                Resulter.nextOperator = "*"
                return Resulter.operate();
            }
            Resulter.operator = "*";
            return createDisplay();

        case "divide":
            if (firstNumber === "" || firstNumber === "-") return;
            if (operator !== "" && secondNumber !== "") {
                Resulter.nextOperator = "/"
                return Resulter.operate();
            }
            Resulter.operator = "/";
            return createDisplay();

        case "sum":
            if (secondNumber === "") return;
            Resulter.nextOperator = "";
            return Resulter.operate();

        default:
            if (operator === "") {
                Resulter.firstNumber += buttonSymbol;
                return createDisplay();
            } else{
                Resulter.secondNumber += buttonSymbol;
                return createDisplay();
            }
    }
}
function makeKeyboardFunctional(keyCode) {
    calculatorButtons.forEach(button => button.blur());
    let firstNumber = Resulter.firstNumber;
    let secondNumber = Resulter.secondNumber;
    let operator = Resulter.operator;
    let doesntAffectDisplay = (keyCode === "Delete" || keyCode === "Backspace" || keyCode === "ShiftRight" || keyCode === "NumpadEnter");
    let displayLength = firstNumber.length + operator.length + secondNumber.length;
    if (!doesntAffectDisplay && displayLength >= 17) return alert("Display can only handle 17 characters total, two spaces from operator included.");
    switch (keyCode) {
        case "Delete":
            return resetCalculator();

        case "Backspace":
            return removeLast();

        case "ShiftRight":
            return changeTheme();

        case "NumpadDecimal":
            if (firstNumber.includes(".") === false && firstNumber !== "" && firstNumber !== "-" && secondNumber === "" && operator === "") {
                Resulter.firstNumber += ".";
                let dontCheckForPeriod = true;
                return createDisplay(dontCheckForPeriod);
            } else if  (secondNumber.includes(".") === false && secondNumber !== ""){
                Resulter.secondNumber += ".";
                let dontCheckForPeriod = true;
                return createDisplay(dontCheckForPeriod);
            }
            if (keyCode === "NumpadDecimal") return;

        case "NumpadAdd":
            if (firstNumber === "" || firstNumber === "-") return;
            if (operator !== "" && secondNumber !== "") {
                Resulter.nextOperator = "+"
                return Resulter.operate();
            }
            Resulter.operator = "+";
            return createDisplay();

        case "NumpadSubtract":
            if (firstNumber === "" || firstNumber === "-") return;
            if (operator !== "" && secondNumber !== "") {
                Resulter.nextOperator = "-"
                return Resulter.operate();
            }
            Resulter.operator = "-";
            return createDisplay();

        case "NumpadMultiply":
            if (firstNumber === "" || firstNumber === "-") return;
            if (operator !== "" && secondNumber !== "") {
                Resulter.nextOperator = "*"
                return Resulter.operate();
            }
            Resulter.operator = "*";
            return createDisplay();

        case "NumpadDivide":
            if (firstNumber === "" || firstNumber === "-") return;
            if (operator !== "" && secondNumber !== "") {
                Resulter.nextOperator = "/"
                return Resulter.operate();
            }
            Resulter.operator = "/";
            return createDisplay();

        case "NumpadEnter":
            if (secondNumber === "") return;
            return Resulter.operate();

        default:
            if (operator === "" && keyCode.includes('Numpad')) {
                Resulter.firstNumber += keyCode.slice(keyCode.length-1, keyCode.length);
                return createDisplay();
            } else if (keyCode.includes('Numpad')){
                Resulter.secondNumber += keyCode.slice(keyCode.length-1, keyCode.length);
                return createDisplay();
            } else {
                return;
            }
    }

}
function add(number, number2) {
    let result = number + number2;
    return prepareDisplay(result);
}

function subtract(number, number2) {
    let result = number - number2;
    return prepareDisplay(result);
}

function multiply(number, number2) {
    let result = number * number2;
    return prepareDisplay(result);
}

function divide(number, number2) {
    if (number2 === 0) return simulateSpaceTimeDestruction();
    let result = number / number2;
    return prepareDisplay(result);
}
function prepareDisplay(result) {
    Resulter.secondNumber = "";
    Resulter.operator = Resulter.nextOperator;
    Resulter.nextOperator = "";
    result = result.toFixed(5);
    while (result.endsWith("0")) {
        result = result.slice(0, result.length-1)
    }
    if (result.endsWith(".")) result = result.slice(0, result.length-1)
    Resulter.firstNumber = result;
    return createDisplay()
}
function createDisplay(periodCheck = false){
    if (Resulter.firstNumber.endsWith(".") && periodCheck === false) Resulter.firstNumber = Resulter.firstNumber.slice(0, Resulter.firstNumber.length-1);
    if (Resulter.secondNumber.endsWith(".") && periodCheck === false) Resulter.secondNumber = Resulter.secondNumber.slice(0, Resulter.secondNumber.length-1);
    return resultField.textContent = `${Resulter.firstNumber}` + " " + `${Resulter.operator}` + " " + `${Resulter.secondNumber}`;
}

function resetCalculator() {
    Resulter.firstNumber = "";
    Resulter.secondNumber = "";
    Resulter.operator = "";
    Resulter.nextOperator = "";
    createDisplay();
    return;
}

function removeLast() {
    let dontCheckForPeriod = true;
    if (Resulter.secondNumber !== "") {
       Resulter.secondNumber = Resulter.secondNumber.slice(0, Resulter.secondNumber.length-1);
       return createDisplay(dontCheckForPeriod);

        }else if (Resulter.operator !== "") {
        Resulter.operator = "";
        return createDisplay(dontCheckForPeriod);

        } else {
          Resulter.firstNumber = Resulter.firstNumber.slice(0, Resulter.secondNumber.length-1);
          return createDisplay(dontCheckForPeriod);
    }
}

function changeTheme() {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const endTimes = document.querySelector('.end-times');
    const calculator = document.querySelector('.calculator');
    const result = document.querySelector('.result')
    calculatorButtons.forEach(button => button.classList.toggle('dark-theme'));
    calculatorButtons.forEach(button => button.classList.toggle('light-theme'));
    restartCycle.classList.toggle('dark-theme');
    restartCycle.classList.toggle('light-theme');
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    header.classList.toggle('dark-theme');
    header.classList.toggle('light-theme');
    endTimes.classList.toggle('dark-theme');
    endTimes.classList.toggle('light-theme');
    calculator.classList.toggle('dark-theme');
    calculator.classList.toggle('light-theme');
    result.classList.toggle('dark-theme');
    result.classList.toggle('light-theme');
    return;
}

function destroySpaceTime() {
    const calculator = document.querySelector('.calculator');
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const main = document.querySelector('main');
    window.setTimeout(function() {body.removeChild(header)}, 1000);
    window.setTimeout(function() {body.removeChild(footer)}, 2000);
    for (i = 1; i <= 40; i++) {
    window.setTimeout(function () {calculator.removeChild(calculator.firstChild)}, i * 250);
    }
    const div = document.createElement('div');
    div.setAttribute('class', 'end-times');
    div.textContent = "YOU HAVE BROKEN THE SPACE-TIME CONTINUUM";
    window.setTimeout(function() {body.removeChild(main)}, 41 * 250);
    window.setTimeout(function () {body.appendChild(div)}, 42 * 250);
    return;
}

function simulateSpaceTimeDestruction() {
    const endTimes = document.querySelector('.end-times');
    const calculator = document.querySelector('.calculator');
    const thingsToHide = document.querySelectorAll('.to-hide');
    thingsToHide.forEach(element => hide(element));
    hide(calculator);
    disappear(calculator);
    window.setTimeout(function () {endTimes.classList.toggle('dont-show-me')}, hideCounter * 250);
    hideCounter = 1;
    resetCalculator();
}

function recreateTheUniverse () {
    const endTimes = document.querySelector('.end-times');
    const calculator = document.querySelector('.calculator');
    const thingsToHide = document.querySelectorAll('.to-hide');
    hideCounter = 1;
    window.setTimeout(function () {endTimes.classList.toggle('dont-show-me')}, hideCounter * 250);
    disappear(calculator);
    hide(calculator);
    thingsToHide.forEach(element => hide(element));
    hideCounter = 1;
}

function hide(element) {
    window.setTimeout(function () {element.classList.toggle('hide-me')},
    hideCounter * 250);
    hideCounter++;
}

function disappear(element) {
    window.setTimeout(function () {element.classList.toggle('dont-show-me')},
    hideCounter * 250);
}
