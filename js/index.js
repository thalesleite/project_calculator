const resultsDiv = document.querySelector(".results")

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    handleClick(event.target.value)
  })
})

document.addEventListener("keydown", (event) => {
  const keysAllowed = "1234567890+-*/+="
  if (keysAllowed.includes(event.key) || event.keyCode === 13) {
    const value = event.keyCode === 13 ? "=" : event.key
    handleClick(value)
  }
})

const handleClick = function (buttonValue) {
  const currentValue = resultsDiv.textContent
  const expression = currentValue.match(/\d+|[+\-*\/]/g)

  if (expression && expression.length > 3) {
    const result = operate(
      parseFloat(expression[0]),
      expression[1],
      parseFloat(expression[2]) 
    )
    resultsDiv.textContent =
      checkResultLength(result.toString()) + expression[3]
  }

  if (buttonValue === "=") {
    const result = operate(
      parseFloat(expression[0]),
      expression[1],
      parseFloat(expression[2])
    )

    resultsDiv.textContent = checkResultLength(result.toString())

    if (expression.length > 3) {
      resultsDiv.textContent += expression[3]
    }
  } else if (buttonValue === "C") {
    resultsDiv.textContent = ""
  } else {
    resultsDiv.textContent += buttonValue
  }
}

const add = function (num1, num2) {
  return num1 + num2
}

const subtract = function (num1, num2) {
  return num1 - num2
}

const multiply = function (num1, num2) {
  return num1 * num2
}

const divide = function (num1, num2) {
  return num1 / num2
}

const clearResults = function () {
  resultsDiv.textContent = ""
}

const operate = function (operand1, operator, operand2) {
  switch (operator) {
    case "+":
      return add(operand1, operand2)

    case "-":
      return subtract(operand1, operand2)

    case "*":
      return multiply(operand1, operand2)

    case "/":
      if (operand2 === 0) {
        resultsDiv.textContent = "Div by zero"
        break
      }
      return divide(operand1, operand2)

    default:
      resultsDiv.textContent = "NaN"
      break
  }
}

const checkResultLength = function (result) {
  if (result.length > 10) {
    return result.slice(0, 10)
  }
  return result
}
