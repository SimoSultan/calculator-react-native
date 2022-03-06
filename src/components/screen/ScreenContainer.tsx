import React from "react"
import { View } from "react-native"
import { ScreenProps } from "../../types/types"
import { CalculatorStyles } from "../../styles/styles"
import { Screen } from "./Screen"

export const ScreenContainer: React.FC<ScreenProps> = ({ operands }) => {
    return (
        <View style={CalculatorStyles.screenContainer}>
            <Screen operands={operands} />
        </View>
    )
}
