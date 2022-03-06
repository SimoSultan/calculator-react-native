export type CalcState = {
    firstOperand: string
    operator: string
    secondOperand: string
    result: number
}

export enum Operators {
    Empty = "",
    Addition = "+",
    Subtraction = "-",
    Divide = "/",
    Multiply = "*",
    Equal = "=",
    ClearAll = "AC",
    Backspace = "DEL",
}

export const CalculatorInitialState: CalcState = {
    firstOperand: "0",
    operator: "",
    secondOperand: "",
    result: 0,
}

export type ScreenProps = {
    operands: CalcState
}
