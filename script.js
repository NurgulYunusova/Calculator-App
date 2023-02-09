const screen = document.querySelector(".display");
const calcButtons = document.querySelector(".calc-buttons");

let operator;
let holdNum = "0";
let totalResult = 0;

calcButtons.addEventListener("click", (e) => {
  buttonClick(e.target.innerText);
});

function buttonClick(clickedButton) {
  if (isNaN(parseInt(clickedButton))) {
    handleSymbol(clickedButton);
  } else {
    handleNumber(clickedButton);
  }

  screen.innerText = holdNum;
}

function handleNumber(num) {
  if (holdNum === "0") {
    holdNum = num;
  } else {
    holdNum += num;
  }
}

function handleSymbol(operation) {
  switch (operation) {
    case "C":
      holdNum = "0";
      totalResult = 0;
      break;
    case "=":
      if (operator === null) {
        return;
      }
      calculateResult(parseInt(holdNum));
      operator = null;
      holdNum = +totalResult;
      totalResult = 0;
      break;
    case "←":
      let screenValue = screen.innerText;
      if (screenValue.length === 1) {
        screenValue = "0";
      } else {
        screenValue = screenValue.substring(0, screenValue.length - 1);
      }

      holdNum = screenValue;
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      if (holdNum === "0") {
        return;
      }

      const intHoldNum = parseInt(holdNum);

      if (totalResult === 0) {
        totalResult = intHoldNum;
      } else {
        calculateResult(intHoldNum);
      }

      operator = operation;
      holdNum = "0";
      break;
  }
}

function calculateResult(intHoldNum) {
  switch (operator) {
    case "+":
      totalResult += intHoldNum;
      break;
    case "-":
      totalResult -= intHoldNum;
      break;
    case "×":
      totalResult *= intHoldNum;
      break;
    case "÷":
      totalResult /= intHoldNum;
      break;
  }
}
