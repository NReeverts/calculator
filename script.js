let num1, num2, operator;
const display = document.querySelector(".display");

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

function updateNum1(e) {
  num1 = +e.target.textContent;
  display.textContent = num1;
}
function updateNum2(e) {
  num2 = +e.target.textContent;
  display.textContent = num2;
  
}
// let numBtns = Array.from(document.querySelectorAll(".number"));
//
// for (btn of numBtns) {
//   btn.addEventListener("click", (e) => {
//   })
// }
