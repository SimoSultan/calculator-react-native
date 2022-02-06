import { CalcState } from "../components/Calculator"

const evaluateExpression = (operands: CalcState) => {
    console.log(operands)

    if (operands.operator === "") {
        return Number(operands.firstOperand)
    }
    switch (operands.operator) {
        case "+":
            console.log(
                Number(operands.firstOperand),
                Number(operands.secondOperand)
            )

            return (
                Number(operands.firstOperand) + Number(operands.secondOperand)
            )
        case "-":
            console.log(
                Number(operands.firstOperand),
                Number(operands.secondOperand)
            )
            return (
                Number(operands.firstOperand) - Number(operands.secondOperand)
            )
        case "x":
            console.log(
                Number(operands.firstOperand),
                Number(operands.secondOperand)
            )
            return (
                Number(operands.firstOperand) * Number(operands.secondOperand)
            )
        case "/":
            console.log(
                Number(operands.firstOperand),
                Number(operands.secondOperand)
            )
            return (
                Number(operands.firstOperand) / Number(operands.secondOperand)
            )
        default:
            break
    }
}

export { evaluateExpression }
