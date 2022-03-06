import React from "react"
import { ScreenInput, ScreenOutput } from "src/components/exports"
import { View } from "react-native"
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
