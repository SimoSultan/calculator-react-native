import { ScreenContainer } from "./screen/ScreenContainer"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { View } from "react-native"
import { ButtonContainer } from "./exports"
import { CalculatorInitialState } from "../types/types"
import { CalculatorStyles } from "../styles/styles"

const Calculator = () => {
    const [operands, setOperands] = useState(CalculatorInitialState)

    return (
        <View style={CalculatorStyles.calcContainer}>
            <ScreenContainer operands={operands} />
            <ButtonContainer operands={operands} setOperands={setOperands} />
            <StatusBar style="auto" />
        </View>
    )
}

export default Calculator
