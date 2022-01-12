const calculatorButtons = document.querySelectorAll('.calc-button');
const resultField = document.querySelector('.result-text');
calculatorButtons.forEach(button => attachButtonListener(button));
const restartCycle = document.querySelector('.restart-cycle');
restartCycle.addEventListener('click', function () {recreateTheUniverse()});
window.addEventListener('keydown', e => makeKeyboardFunctional(e.code));
let hideCounter = 1;

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
    return button.addEventListener('click', function() {makeButtonsFunctional(button.dataset.buttonSymbol)});
}

function makeButtonsFunctional(buttonSymbol){
    switch (buttonSymbol) {
        case "reset":
            return resetDisplay();

        case "backspace": 
            return removeLast();

        case "theme":
            return changeTheme();

        case "period":
            if (Resulter.firstNumber.includes(".") === false && Resulter.firstNumber !== "" && Resulter.firstNumber !== "-" && Resulter.secondNumber === "" && Resulter.operator === "") {
                Resulter.firstNumber += ".";
                let dontCheckForPeriod = true;
                return createDisplay(dontCheckForPeriod);
            } else if  (Resulter.secondNumber.includes(".") === false && Resulter.secondNumber !== ""){
                Resulter.secondNumber += ".";
                let dontCheckForPeriod = true;
                return createDisplay(dontCheckForPeriod);
            }
            if (buttonSymbol === "period") return console.log("That's enough periods.");

        case "add":
            if (Resulter.firstNumber === "" || Resulter.firstNumber === "-") return console.log("Forgot something?");
            Resulter.operator = "+";
            return createDisplay();

        case "subtract": 
            if (Resulter.firstNumber === "" || Resulter.firstNumber === "-") return console.log("Forgot something?");
            Resulter.operator = "-";
            return createDisplay();

        case "multiply": 
            if (Resulter.firstNumber === "" || Resulter.firstNumber === "-") return console.log("Forgot something?");
            Resulter.operator = "*";
            return createDisplay();

        case "divide": 
            if (Resulter.firstNumber === "" || Resulter.firstNumber === "-") return console.log("Forgot something?");
            Resulter.operator = "/";
            return createDisplay();

        case "sum":
            if (Resulter.secondNumber === "") return console.log("It takes two to tango.")
            return Resulter.operate();

        default: 
            if (Resulter.operator === "") {
                Resulter.firstNumber += buttonSymbol;
                return createDisplay();
            } else{
                Resulter.secondNumber += buttonSymbol;
                return createDisplay();
            }
    }
}
function makeKeyboardFunctional(keyCode) {
    switch (keyCode) {
        case "Delete":
            return resetDisplay();

        case "Backspace": 
            return removeLast();

        case "ShiftRight":
            return changeTheme();

        case "NumpadDecimal":
            if (Resulter.firstNumber.includes(".") === false && Resulter.firstNumber !== "" && Resulter.firstNumber !== "-" && Resulter.secondNumber === "" && Resulter.operator === "") {
                Resulter.firstNumber += ".";
                let dontCheckForPeriod = true;
                return createDisplay(dontCheckForPeriod);
            } else if  (Resulter.secondNumber.includes(".") === false && Resulter.secondNumber !== ""){
                Resulter.secondNumber += ".";
                let dontCheckForPeriod = true;
                return createDisplay(dontCheckForPeriod);
            }
            if (keyCode === "NumpadDecimal") return console.log("That's enough periods.");

        case "NumpadAdd":
            if (Resulter.firstNumber === "" || Resulter.firstNumber === "-") return console.log("Forgot something?");
            Resulter.operator = "+";
            return createDisplay();

        case "NumpadSubtract": 
            if (Resulter.firstNumber === "" || Resulter.firstNumber === "-") return console.log("Forgot something?");
            Resulter.operator = "-";
            return createDisplay();

        case "NumpadMultiply": 
            if (Resulter.firstNumber === "" || Resulter.firstNumber === "-") return console.log("Forgot something?");
            Resulter.operator = "*";
            return createDisplay();

        case "NumpadDivide": 
            if (Resulter.firstNumber === "" || Resulter.firstNumber === "-") return console.log("Forgot something?");
            Resulter.operator = "/";
            return createDisplay();

        case "NumpadEnter":
            if (Resulter.secondNumber === "") return console.log("It takes two to tango.")
            return Resulter.operate();
             
        default: 
            if (Resulter.operator === "" && keyCode.includes('Numpad')) {
                Resulter.firstNumber += keyCode.slice(keyCode.length-1, keyCode.length);
                return createDisplay();
            } else if (keyCode.includes('Numpad')){
                Resulter.secondNumber += keyCode.slice(keyCode.length-1, keyCode.length);
                return createDisplay();
            } else {
                return console.log("Whatever this is, I didn't expect it.")
            }
    }

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
    if (number2 === 0) return simulateSpaceTimeDestruction();
    let result = number / number2;
    Resulter.secondNumber = "";
    Resulter.operator = "";
    Resulter.firstNumber = String(result);
    return createDisplay();
}

function createDisplay(periodCheck = false){
    if (Resulter.firstNumber.endsWith(".") && periodCheck === false) Resulter.firstNumber = Resulter.firstNumber.slice(0, Resulter.firstNumber.length-1);
    if (Resulter.secondNumber.endsWith(".") && periodCheck === false) Resulter.secondNumber = Resulter.secondNumber.slice(0, Resulter.secondNumber.length-1);
    return resultField.textContent = `${Resulter.firstNumber}` + " " + `${Resulter.operator}` + " " + `${Resulter.secondNumber}`;
}

function resetDisplay() {
    Resulter.firstNumber = "";
    Resulter.secondNumber = "";
    Resulter.operator = "";
    createDisplay();
    return console.log("Display has been cleared.");
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
    return console.log("You really did!");
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
    resetDisplay();
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
