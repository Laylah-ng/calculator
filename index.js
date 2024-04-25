// functions for calculator operators
function addNumber(a, b) {
  let result = a + b
  return result
}

function subtractNumber(a, b) {
  let result = a - b
  return result
}
function multiplyNumber(a, b) {
  let result = a * b
  return result
}

function divideNumber(a, b) {
  if (b === 0) {
    return "cannot divide by 0"
  } else {
    return a / b
  }
}

function operate(num1, operator, num2) {
  if (operator === "+") {
    return addNumber(num1, num2)
  } else if (operator === "-") {
    return subtractNumber(num1, num2)
  } else if (operator === "*") {
    return multiplyNumber(num1, num2)
  } else if (operator === "/") {
    return divideNumber(num1, num2)
  }
}
