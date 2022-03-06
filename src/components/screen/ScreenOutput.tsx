import React from "react"
import { Text, View } from "react-native"
import { ScreenProps, ScreenStyles } from "./Screen"

export const ScreenOutput: React.FC<ScreenProps> = ({ operands }) => {
    console.log(operands)

    return (
        <View style={ScreenStyles.resultContainer}>
            <Text style={ScreenStyles.resultText} numberOfLines={1}>
                {operands.result === 0 ? "" : operands.result}
            </Text>
        </View>
    )
}
