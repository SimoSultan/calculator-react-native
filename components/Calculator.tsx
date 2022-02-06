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
    screenDisplay: string
}

const initialState: CalcState = {
    firstOperand: "0",
    operator: "",
    secondOperand: "",
    result: 0,
    screenDisplay: "",
}

const Calculator = () => {
    const [operands, setOperands] = useState(initialState)

    const handlePress = (value: string) => {
        if (value === "=") {
            console.log(evaluateExpression(operands))

            setOperands({
                ...operands,
                result: Number(evaluateExpression(operands)),
            })
            return
        } else if (value === "AC") {
            clearScreen()
            return
        }

        if (operands.operator === "") {
            setOperands({
                ...operands,
                firstOperand:
                    operands.firstOperand === "0"
                        ? value
                        : (operands.firstOperand += value),
            })
        } else if (
            value === "+" ||
            value === "-" ||
            value === "x" ||
            value === "/"
        ) {
            setOperands({ ...operands, operator: value })
        } else if (operands.operator !== "") {
            setOperands({
                ...operands,
                secondOperand: (operands.secondOperand += value),
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
                        text="Del"
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
        flex: 3,
        width: "100%",
    },
    screenContainer: {
        flex: 1,
        width: "100%",
        marginVertical: 10,
    },
})
