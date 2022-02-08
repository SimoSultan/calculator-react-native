import { CalcState } from "../components/Calculator"

const evaluateExpression = (operands: CalcState) => {
    let result = 0

    if (operands.operator === "") {
        return Number(operands.firstOperand)
    }
    switch (operands.operator) {
        case "+":
            result =
                Number(operands.firstOperand) + Number(operands.secondOperand)
            break

        case "-":
            result =
                Number(operands.firstOperand) - Number(operands.secondOperand)
            break
        case "x":
            result =
                Number(operands.firstOperand) * Number(operands.secondOperand)
            break
        case "/":
            result =
                Number(operands.firstOperand) / Number(operands.secondOperand)
            break
        default:
            return result
    }

    if (Number.isNaN(result)) {
        return 0
    }

    return Number.isInteger(result) ? result : result.toFixed(10)
}

export { evaluateExpression }
