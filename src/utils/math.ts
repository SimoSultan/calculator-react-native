import { CalcState, Operators } from "../components/Calculator"

const evaluateExpression = (operands: CalcState) => {
    let result = 0
    const { operator, firstOperand, secondOperand } = operands
    const first = Number(firstOperand)
    const second = Number(secondOperand)

    if (operator === Operators.Empty) {
        return Number(firstOperand)
    }
    switch (operator) {
        case Operators.Addition:
            result = first + second
            break
        case Operators.Subtraction:
            result = first - second
            break
        case Operators.Multiply:
            result = first * second
            break
        case Operators.Divide:
            result = first / second
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
