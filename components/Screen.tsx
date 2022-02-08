import { StyleSheet, Text, View } from "react-native"
import { CalcState } from "./Calculator"

type Props = {
    operands: CalcState
}

export const Screen: React.FC<Props> = ({ operands }) => {
    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <Text style={styles.inputText} numberOfLines={2}>
                    {`${operands.firstOperand} ${operands.operator} ${operands.secondOperand}`}
                </Text>
            </View>

            <View style={styles.resultContainer}>
                <Text style={styles.resultText} numberOfLines={1}>
                    {operands.result === 0 ? "" : operands.result}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
