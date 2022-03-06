import React from "react"
import { View } from "react-native"
import { ScreenInput } from "./ScreenInput"
import { ScreenOutput } from "./ScreenOutput"
import { ScreenProps } from "src/types/types"
import { ScreenStyles } from "src/styles/styles"

export const Screen: React.FC<ScreenProps> = ({ operands }) => {
    return (
        <View style={ScreenStyles.screen}>
            <ScreenInput operands={operands} />
            <ScreenOutput operands={operands} />
        </View>
    )
}
