import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, View } from "react-native"
import { CalcButton, Screen } from "./exports"
import { evaluateExpression } from "../utils/math"

export type CalcState = {
    firstOperand: string
    operator: string
    secondOperand: string
    result: number
}

const initialState: CalcState = {
    firstOperand: "0",
    operator: "",
    secondOperand: "",
    result: 0,
}

const Calculator = () => {
    const [operands, setOperands] = useState(initialState)

    const handlePress = (value: string) => {
        let { firstOperand, operator, secondOperand, result } = operands
        switch (value) {
            case "=":
                return setOperands({
                    ...operands,
                    result: Number(evaluateExpression(operands)),
                })
            case "AC":
                return clearScreen()
            case "+":
            case "-":
            case "x":
            case "/":
                if (operator !== "") return
                return setOperands({ ...operands, operator: value })
            case "DEL":
                if (
                    result !== 0 &&
                    (secondOperand !== "" ||
                        firstOperand !== "" ||
                        operator !== "")
                ) {
                    return clearScreen()
                } else if (secondOperand !== "") {
                    return setOperands({
                        ...operands,
                        secondOperand: secondOperand.slice(0, -1),
                    })
                } else if (operator !== "") {
                    return setOperands({
                        ...operands,
                        operator: "",
                    })
                } else {
                    return setOperands({
                        ...operands,
                        firstOperand: firstOperand.slice(0, -1),
                    })
                }
            default:
                break
        }

        if (
            result !== 0 &&
            (secondOperand !== "" || firstOperand !== "" || operator !== "")
        ) {
            return setOperands({ ...initialState, firstOperand: value })
        }

        if (operator === "") {
            return setOperands({
                ...operands,
                firstOperand:
                    firstOperand === "0" ? value : (firstOperand += value),
            })
        } else if (operator !== "") {
            return setOperands({
                ...operands,
                secondOperand: (secondOperand += value),
            })
        }
    }

    const clearScreen = () => {
        setOperands({ ...initialState })
    }

    return (
        <View style={styles.calcContainer}>
            <View style={styles.screenContainer}>
                <Screen operands={operands} />
            </View>
            <View style={styles.allButtonsContainer}>
                <View style={styles.row}>
                    <CalcButton
                        text="AC"
                        size="lg"
                        modifier
                        onPress={handlePress}
                    />
                    <CalcButton
                        text="DEL"
                        size="sm"
                        modifier
                        onPress={handlePress}
                    />
                    <CalcButton
                        text="/"
                        size="sm"
                        modifier
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.row}>
                    <CalcButton text="1" size="sm" onPress={handlePress} />
                    <CalcButton text="2" size="sm" onPress={handlePress} />
                    <CalcButton text="3" size="sm" onPress={handlePress} />
                    <CalcButton
                        text="x"
                        size="sm"
                        modifier
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.row}>
                    <CalcButton text="4" size="sm" onPress={handlePress} />
                    <CalcButton text="5" size="sm" onPress={handlePress} />
                    <CalcButton text="6" size="sm" onPress={handlePress} />
                    <CalcButton
                        text="+"
                        size="sm"
                        modifier
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.row}>
                    <CalcButton text="7" size="sm" onPress={handlePress} />
                    <CalcButton text="8" size="sm" onPress={handlePress} />
                    <CalcButton text="9" size="sm" onPress={handlePress} />
                    <CalcButton
                        text="-"
                        size="sm"
                        modifier
                        onPress={handlePress}
                    />
                </View>
                <View style={styles.row}>
                    <CalcButton text="." size="sm" onPress={handlePress} />
                    <CalcButton text="0" size="sm" onPress={handlePress} />
                    <CalcButton
                        text="="
                        size="lg"
                        modifier
                        onPress={handlePress}
                    />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    calcContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
        flex: 1,
    },
    allButtonsContainer: {
        flex: 2,
        width: "100%",
    },
    screenContainer: {
        flex: 1,
        width: "100%",
        marginVertical: 10,
    },
})
