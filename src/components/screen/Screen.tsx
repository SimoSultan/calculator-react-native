import { ScreenInput, ScreenOutput } from "../exports"
import { StyleSheet, View } from "react-native"
import { CalcState } from "../Calculator"

export type ScreenProps = {
    operands: CalcState
}

export const Screen: React.FC<ScreenProps> = ({ operands }) => {
    return (
        <View style={ScreenStyles.screen}>
            <ScreenInput operands={operands} />
            <ScreenOutput operands={operands} />
        </View>
    )
}

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
