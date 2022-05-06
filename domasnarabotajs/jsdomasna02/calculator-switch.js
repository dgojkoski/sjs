const number1 = Number(prompt("Enter first number"))
const number2 = Number(prompt("Enter second number"))

const operator = (prompt("Enter operator +, -, *, /, %"))

switch(operator) {

    case "+":
        result = number1 + number2
        console.log(result)
        break

        case "-":
        result = number1 - number2
        console.log(result)
        break

        case "*":
        result = number1 * number2
        console.log(result)
        break

        case "/":
        result = number1 / number2
        console.log(result)
        break

        case "%":
        result = number1 % number2
        console.log(result)
        break

        default:
            console.log(" invalid operator or number !!")
}


