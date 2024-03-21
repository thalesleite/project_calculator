let results = ""
const resultsDiv = document.querySelector(".results")

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    getValue(event.target.value)
  })
})

const getValue = function (value) {
  results += value
  resultsDiv.textContent = results
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
  results = ""
  resultsDiv.textContent = results
}

const operate = function () {
  const operators = "*/-+"
  const numbers = "1234567890"
  const operatorsSlected = results
    .split(" ")
    .filter((operator) => operators.includes(operator))
  const numbersSelected = results
    .split(" ")
    .filter((operator) => numbers.includes(operator))

  console.log("operatorsSlected: ", operatorsSlected)
  console.log("numbersSelected: ", numbersSelected)
}
