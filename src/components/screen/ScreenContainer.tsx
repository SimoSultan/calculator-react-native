import React from "react"
import { View } from "react-native"
import { ScreenProps } from "src/types/types"
import { CalculatorStyles } from "src/styles/styles"
import { Screen } from "./Screen"

export const ScreenContainer: React.FC<ScreenProps> = ({ operands }) => {
    return (
        <View style={CalculatorStyles.screenContainer}>
            <Screen operands={operands} />
        </View>
    )
}
