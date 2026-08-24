const display = document.querySelector(".display");
const numBtns = Array.from(document.querySelectorAll(".number"));
const operatorBtns = Array.from(document.querySelectorAll(".operator"));
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equals");

let num1 = "",
  num2 = "",
  operator = "";

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function operate(num1, num2, operator) {
  if (operator == "+") return add(num1, num2);
  else if (operator == "-") return subtract(num1, num2);
  else if (operator == "*") return multiply(num1, num2);
  else if (operator == "/") return divide(num1, num2);
}
function updateOperator(e) {
  operator = e.target.textContent;
  display.textContent = operator;
}

function updateNum1(e) {
  num1 += e.target.textContent;
  display.textContent = num1;
}
function updateNum2(e) {
  num2 += e.target.textContent;
  display.textContent = num2;
}

for (btn of numBtns) {
  btn.addEventListener("click", (e) => {
    if (!operator) {
      updateNum1(e);
    }else{
      updateNum2(e);
    }
  });
}

for (btn of operatorBtns) {
  btn.addEventListener("click", (e) => {
    updateOperator(e);
  });
}

equalsBtn.addEventListener("click", () => {
  let result = operate(+num1, +num2, operator);
  display.textContent = result
  
})

clearBtn.addEventListener("click", () => {
  num1 = ""
  num2 = ""
  operator = ""
  display.textContent = "CLEARED"
})
