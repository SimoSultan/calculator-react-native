import { StyleSheet, Text, View, Pressable } from "react-native"

type Props = {
    text: string
    size: string
    modifier?: boolean
}

export const CalcButton: React.FC<Props> = ({ text, size, modifier }) => {
    const handleClick = (value: string) => {
        console.log(value)
    }

    return (
        <View style={styles(size).buttonContainer}>
            <Pressable
                style={styles(size, modifier).button}
                onPress={() => {
                    handleClick(text)
                }}
            >
                <Text style={styles(size).buttonText}>{text}</Text>
            </Pressable>
        </View>
    )
}

export const styles = (size: string, modifier?: boolean) =>
    StyleSheet.create({
        buttonContainer: {
            flex: size === "sm" ? 1 : 2,
            width: "100%",
        },
        button: {
            flex: 1,
            padding: 10,
            margin: 3,
            backgroundColor: modifier ? "orange" : "whitesmoke",
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
