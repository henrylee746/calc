let firstNum, secondNum;
let displayValue = "";
let operator = "";
let counter = 0;

function add (num1, num2) {
	return Math.round(((num1+num2) + Number.EPSILON) * 100)/100;
}


function subtract (num1, num2) {
	return Math.round(((num1-num2)+ Number.EPSILON) * 100)/100;
}

function multiply (num1, num2) {
    return Math.round(((num1*num2)+ Number.EPSILON) * 100)/100;
}

function divide (num1, num2) {
    return Math.round(((num1/num2)+ Number.EPSILON) * 100)/100;
   
}

function operate(firstNum, operator, secondNum){
    switch(operator){
        case "+":
            return add(firstNum,secondNum);
        case "-":
            return subtract(firstNum,secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum);
    }
}

function clear(){
    displayValue = "";
    operator = "";
    firstNum, secondNum = undefined;
    document.getElementById("value").innerHTML = displayValue;
    return;
}

document.getElementById("value").innerHTML = "0";

const operatorButtons = document.querySelectorAll("div.operator > button");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        counter++;
        block:{
            if(counter == 1){
            operator = button.className;
            firstNum = Number(displayValue);
            displayValue = "";
            }
            if(counter == 2){
                secondNum = Number(displayValue);
                if(secondNum == 0){
                    clear();
                    document.getElementById("value").innerHTML = "ERROR: Dividing by 0";
                    break block;
                }
                displayValue = String(operate(firstNum, operator, secondNum));
                firstNum = Number(displayValue);
                secondNum = undefined;
                operator = button.className;
                document.getElementById("value").innerHTML = displayValue;
                displayValue = "";
                counter--;
                }
            }
        });
    });

const buttons = document.querySelectorAll("div.numbers > button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
            document.getElementById("value").innerHTML = "";
            displayValue += button.className;
            document.getElementById("value").innerHTML = displayValue;
        
        });
    });


const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    clear();
});

const backButton = document.querySelector(".backspace");
    backButton.addEventListener("click", () => {
    document.getElementById("value").innerHTML = "";
    displayValue = displayValue.slice(0,-1);
    document.getElementById("value").innerHTML = displayValue;
});

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", () => {
    block:{
    if(displayValue == ""){
        clear();
        document.getElementById("value").innerHTML = "ERROR";
    } 
    else if(displayValue != "" && operator == "");
    else{
        counter = undefined;
        secondNum = Number(displayValue);
        if(secondNum == 0){
            clear();
            document.getElementById("value").innerHTML = "ERROR: Dividing by 0";
            break block;
        }
        displayValue = String(operate(firstNum, operator, secondNum));
        firstNum = Number(displayValue);
        secondNum = undefined;
        operator = "";
        document.getElementById("value").innerHTML = displayValue;
    }
    }
})

