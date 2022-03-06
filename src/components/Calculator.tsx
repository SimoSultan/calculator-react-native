import React, { useState } from "react"
import { View } from "react-native"
import { ButtonContainer, ScreenContainer } from "./exports"
import { CalculatorInitialState } from "src/types/types"
import { CalculatorStyles } from "src/styles/styles"

export function Calculator() {
    const [operands, setOperands] = useState(CalculatorInitialState)

    return (
        <View style={CalculatorStyles.calcContainer}>
            <ScreenContainer operands={operands} />
            <ButtonContainer operands={operands} setOperands={setOperands} />
        </View>
    )
}
