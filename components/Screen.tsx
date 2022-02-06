import { StyleSheet, Text, View } from "react-native"
import { CalcState } from "./Calculator"

type Props = {
    operands: CalcState
}

export const Screen: React.FC<Props> = ({ operands }) => {
    // const [display, setDisplay] = useState("0")
    // useEffect(() => {
    //     setDisplay(
    //         // `${operands.firstOperand} ${operands.operator} ${operands.secondOperand}`
    //         operands.firstOperand +
    //             " " +
    //             operands.operator +
    //             " " +
    //             operands.secondOperand
    //     )
    // }, [operands.firstOperand, operands.operator, operands.secondOperand])

    return (
        <View style={styles.screen}>
            {/* <Text style={styles.screenText}>
                {`${operands.firstOperand} ${operands.operator} ${operands.secondOperand}`}
            </Text> */}
            <View>
                <Text style={styles.screenText}>{operands.firstOperand}</Text>
                <Text style={styles.screenText}>{operands.operator}</Text>
                <Text style={styles.screenText}>{operands.secondOperand}</Text>
            </View>
            <View>
                <Text style={styles.screenText}>
                    {operands.result === 0 ? "" : operands.result}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: "#2e2f30",
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-end",
    },
    screenText: {
        color: "white",
        fontSize: 50,
        fontWeight: "100",
    },
    textSpacer: {
        width: 10,
        flex: 1,
        margin: 10,
    },
})
