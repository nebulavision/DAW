let currentInput = "";
let operation = "";
let num1 = null;

const display = document.getElementById("display");

const updateDisplay = (value) => {
    currentInput += value;
    display.value = currentInput;
    
};

const calculateResult = () => {
    const num2 = parseFloat(currentInput);
    if (num1 === null || operation === "") return;

    let result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num2 !== 0 ? num1 / num2 : "Error: División por cero";
            break;
        case "power":
            result = Math.pow(num1, num2);
            break;
        default:
            return;
    }

    currentInput = "";
    num1 = null; 
    operation = "";
    display.value = result;
};

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.dataset.value;

        if (value) {
            updateDisplay(value);
        } else {
            if (button.id === "clear") {
                currentInput = "";
                num1 = null;
                operation = "";
                display.value = "";
                resultDisplayed = false;
            } else if (button.id === "equals") {
                calculateResult();
            } else {
                if (num1 === null) {
                    num1 = parseFloat(currentInput);
                }
                operation = button.id === "calculatePower" ? "power" : button.id;
                currentInput = "";
            }
        }
    });
});
