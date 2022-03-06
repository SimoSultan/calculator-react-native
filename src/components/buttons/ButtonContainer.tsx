import React from "react"
import { View } from "react-native"
import { CalcButton } from "./CalcButton"
import { CalcState, Operators } from "../../types/types"
import { CalculatorStyles } from "../../styles/styles"
import { CalculatorInitialState } from "../../types/types"
import { evaluateExpression } from "../../utils/math"

type ButtonContainerProps = {
    operands: CalcState
    setOperands: Function
}

export const ButtonContainer: React.FC<ButtonContainerProps> = ({
    operands,
    setOperands,
}) => {
    const handleCalcButtonPress = (value: string) => {
        const { firstOperand, operator, secondOperand, result } = operands
        switch (value) {
            case Operators.Equal:
                return setResultOperand(operands)
            case Operators.ClearAll:
                return clearScreen()
            case Operators.Addition:
            case Operators.Subtraction:
            case Operators.Multiply:
            case Operators.Divide:
                if (operator !== Operators.Empty) return
                return setOperatorOperand(value)
            case Operators.Backspace:
                if (
                    result !== 0 &&
                    (secondOperand !== "" ||
                        firstOperand !== "" ||
                        operator !== "")
                ) {
                    return clearScreen()
                } else if (secondOperand !== "") {
                    return removeCharFromSecondOperand(secondOperand)
                } else if (operator !== Operators.Empty) {
                    return removeOperatorOperand()
                } else {
                    return removeCharFromFirstOperand(firstOperand)
                }
            default:
                break
        }

        if (
            result !== 0 &&
            (secondOperand !== "" || firstOperand !== "" || operator !== "")
        ) {
            return resetScreenAndSetFirstOperand(value)
        }

        if (operator === Operators.Empty) {
            return setFirstOperand(firstOperand, value)
        } else if (operator !== Operators.Empty) {
            return setSecondOperand(secondOperand, value)
        }
    }

    const clearScreen = () => setOperands({ ...CalculatorInitialState })

    const resetScreenAndSetFirstOperand = (value: string) =>
        setOperands({
            ...CalculatorInitialState,
            firstOperand: value,
        })

    const setFirstOperand = (first: string, value: string) =>
        setOperands({
            ...operands,
            firstOperand: first === "0" ? value : (first += value),
        })

    const setSecondOperand = (second: string, value: string) =>
        setOperands({
            ...operands,
            secondOperand: (second += value),
        })

    const setResultOperand = (allOperands: CalcState) =>
        setOperands({
            ...operands,
            result: Number(evaluateExpression(allOperands)),
        })

    const setOperatorOperand = (value: string) =>
        setOperands({ ...operands, operator: value })

    const removeCharFromSecondOperand = (second: string) =>
        setOperands({
            ...operands,
            secondOperand: second.slice(0, -1),
        })

    const removeCharFromFirstOperand = (first: string) =>
        setOperands({
            ...operands,
            secondOperand: first.slice(0, -1),
        })

    const removeOperatorOperand = () =>
        setOperands({
            ...operands,
            operator: Operators.Empty,
        })

    return (
        <View style={CalculatorStyles.allButtonsContainer}>
            <View style={CalculatorStyles.row}>
                <CalcButton
                    text={Operators.ClearAll}
                    size="lg"
                    modifier
                    onPress={handleCalcButtonPress}
                />
                <CalcButton
                    text={Operators.Backspace}
                    size="sm"
                    modifier
                    onPress={handleCalcButtonPress}
                />
                <CalcButton
                    text={Operators.Divide}
                    size="sm"
                    modifier
                    onPress={handleCalcButtonPress}
                />
            </View>
            <View style={CalculatorStyles.row}>
                <CalcButton
                    text="1"
                    size="sm"
                    onPress={handleCalcButtonPress}
                />
                <CalcButton
                    text="2"
                    size="sm"
                    onPress={handleCalcButtonPress}
                />
                <CalcButton
                    text="3"
                    size="sm"
                    onPress={handleCalcButtonPress}
                />
                <CalcButton
                    text={Operators.Multiply}
                    size="sm"
                    modifier
                    onPress={handleCalcButtonPress}
                />
            </View>
            <View style={CalculatorStyles.row}>
                <CalcButton
                    text="4"
                    size="sm"
                    onPress={handleCalcButtonPress}
                />
                <CalcButton
                    text="5"
                    size="sm"
                    onPress={handleCalcButtonPress}
                />
                <CalcButton
                    text="6"
                    size="sm"
                    onPress={handleCalcButtonPress}
                />
                <CalcButton
                    text={Operators.Addition}
                    size="sm"
                    modifier
                    onPress={handleCalcButtonPress}
                />
            </View>
            <View style={CalculatorStyles.row}>
                <CalcButton
                    text="7"
                    size="sm"
                    onPress={handleCalcButtonPress}
                />
                <CalcButton
                    text="8"
                    size="sm"
                    onPress={handleCalcButtonPress}
                />
                <CalcButton
                    text="9"
                    size="sm"
                    onPress={handleCalcButtonPress}
                />
                <CalcButton
                    text={Operators.Subtraction}
                    size="sm"
                    modifier
                    onPress={handleCalcButtonPress}
                />
            </View>
            <View style={CalculatorStyles.row}>
                <CalcButton
                    text="."
                    size="sm"
                    onPress={handleCalcButtonPress}
                />
                <CalcButton
                    text="0"
                    size="sm"
                    onPress={handleCalcButtonPress}
                />
                <CalcButton
                    text={Operators.Equal}
                    size="lg"
                    modifier
                    onPress={handleCalcButtonPress}
                />
            </View>
        </View>
    )
}
