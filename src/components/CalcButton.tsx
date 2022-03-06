import { StyleSheet, Text, View, Pressable } from "react-native"

type Props = {
    text: string
    size: string
    modifier?: boolean
    onPress: Function
}

export const CalcButton: React.FC<Props> = ({
    text,
    size,
    modifier,
    onPress,
}) => {
    return (
        <View style={styles(size).buttonContainer}>
            <Pressable
                style={({ pressed }) => [
                    styles(size, modifier, pressed).button,
                ]}
                onPress={() => {
                    onPress(text)
                }}
            >
                <Text style={styles(size).buttonText}>{text}</Text>
            </Pressable>
        </View>
    )
}

const getBackgroundColour = (modifier?: boolean, pressed?: boolean) => {
    if (modifier) {
        return pressed ? "#e58928" : "orange"
    }
    return pressed ? "#dcdcdc" : "whitesmoke"
}

export const styles = (size: string, modifier?: boolean, pressed?: boolean) =>
    StyleSheet.create({
        buttonContainer: {
            flex: size === "sm" ? 1 : 2,
            width: "100%",
        },
        button: {
            flex: 1,
            padding: 10,
            margin: 3,
            backgroundColor: getBackgroundColour(modifier, pressed),
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        buttonText: {
            fontSize: 30,
        },
    })
