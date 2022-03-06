import React from "react"
import { Text, View } from "react-native"
import { ScreenProps } from "../../types/types"
import { ScreenStyles } from "../../styles/styles"

export const ScreenOutput: React.FC<ScreenProps> = ({ operands }) => {
    return (
        <View style={ScreenStyles.resultContainer}>
            <Text style={ScreenStyles.resultText} numberOfLines={1}>
                {operands.result === 0 ? "" : operands.result}
            </Text>
        </View>
    )
}
