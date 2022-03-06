import { StyleSheet } from "react-native"
import { getBackgroundColour } from "./utils"

export const ScreenStyles = StyleSheet.create({
    screen: {
        padding: 10,
        paddingRight: 30,
        backgroundColor: "#2e2f30",
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    resultText: {
        color: "white",
        fontSize: 55,
        fontWeight: "100",
    },
    inputText: {
        color: "white",
        fontSize: 30,
        fontWeight: "100",
    },
    textSpacer: {
        width: 10,
        flex: 1,
        margin: 10,
    },
    resultContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingBottom: 10,
    },
    inputContainer: {
        flex: 0,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingTop: 10,
    },
})

export const ButtonStyles = (
    size: string,
    modifier?: boolean,
    pressed?: boolean
) =>
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

export const CalculatorStyles = StyleSheet.create({
    calcContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    row: {
        flexDirection: "row",
        flex: 1,
    },
    allButtonsContainer: {
        flex: 2,
        width: "100%",
    },
    screenContainer: {
        flex: 1,
        width: "100%",
        marginVertical: 10,
    },
})
