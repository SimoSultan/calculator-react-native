import { Dimensions, StyleSheet } from "react-native"
import { getBackgroundColour } from "./utils"
import {
    ScreenStyleConstants,
    ButtonStyleConstants,
    CalculatorStylesConstants,
} from "src/constants"

export const ScreenStyles = StyleSheet.create({
    screen: {
        padding: 10,
        paddingRight: 30,
        backgroundColor: ScreenStyleConstants.backgroundColour,
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    resultText: {
        color: ScreenStyleConstants.resultTextColour,
        fontSize: 55,
        fontWeight: "100",
    },
    inputText: {
        color: ScreenStyleConstants.inputTextColour,
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
            margin: 2,
            backgroundColor: getBackgroundColour(modifier, pressed),
            // borderColor: ButtonStyleConstants.buttonBorderColour,
            // borderStyle: "solid",
            // borderWidth: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        buttonText: {
            fontSize: 30,
            color: modifier
                ? ButtonStyleConstants.operatorTextColour
                : ButtonStyleConstants.operandTextColour,
        },
    })

export const CalculatorStyles = StyleSheet.create({
    calcContainer: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        alignSelf: "center",
        padding: 3,
        flexDirection: "column",
        backgroundColor: CalculatorStylesConstants.backgroundColour,
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
