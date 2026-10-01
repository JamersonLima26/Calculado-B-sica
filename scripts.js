let display = document.getElementById("display");
let currentInput = "";
let curretOperator = "";

function appendNumber(value) {
  currentInput += value;
  display.textContent = currentInput;
}

function appendOperador(operator) {
  if (currentInput === "" && operator !== ".") return;
  currentInput += operator;
  display.textContent = currentInput;
}

function calculate() {
  try {
    let result = eval(currentInput);
    if (!Number.isInteger(result)) {
      result = result.to.Fixed(2);
    }

    currentInput = result;
    display.textContent = currentInput;
  } catch (error) {
    display.textContent = "Erro";
    currentInput = "";
  }
}

function clearDisplay() {
  currentInput = "";
  display.textContent = currentInput;
}
