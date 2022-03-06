import React from "react"
import { Text, View, Pressable } from "react-native"
import { ButtonStyles } from "src/styles/styles"

type ButtonProps = {
    text: string
    size: string
    modifier?: boolean
    onPress: Function
}

export const CalcButton: React.FC<ButtonProps> = ({
    text,
    size,
    modifier,
    onPress,
}) => {
    return (
        <View style={ButtonStyles(size).buttonContainer}>
            <Pressable
                style={({ pressed }) => [
                    ButtonStyles(size, modifier, pressed).button,
                ]}
                onPress={() => {
                    onPress(text)
                }}
            >
                <Text style={ButtonStyles(size, modifier).buttonText}>
                    {text}
                </Text>
            </Pressable>
        </View>
    )
}
