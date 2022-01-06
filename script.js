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
