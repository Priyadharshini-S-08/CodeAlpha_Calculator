const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expr = display.value;
    expr = expr.replace(/%/g, "/100");
    display.value = eval(expr);
  } catch {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function(event) {
  const allowed = "0123456789+-*/.%";
  if (allowed.includes(event.key)) {
    appendValue(event.key);
    event.preventDefault();
  } else if (event.key === "Enter") {
    calculate();
    event.preventDefault();
  } else if (event.key === "Backspace") {
    deleteLast();
    event.preventDefault();
  } else if (event.key.toLowerCase() === "c") {
    clearDisplay();
    event.preventDefault();
  }
});