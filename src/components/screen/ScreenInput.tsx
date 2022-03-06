import React from "react"
import { Text, View } from "react-native"
import { ScreenProps, ScreenStyles } from "./Screen"

export const ScreenInput: React.FC<ScreenProps> = ({ operands }) => {
    return (
        <View style={ScreenStyles.inputContainer}>
            <Text style={ScreenStyles.inputText} numberOfLines={2}>
                {`${operands.firstOperand} ${operands.operator} ${operands.secondOperand}`}
            </Text>
        </View>
    )
}
