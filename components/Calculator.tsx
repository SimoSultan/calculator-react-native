import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { CalcButton, Screen } from "./exports"

const Calculator = () => {
    return (
        <View style={styles.calcContainer}>
            <View style={styles.screenContainer}>
                <Screen />
            </View>
            <View style={styles.allButtonsContainer}>
                <View style={styles.row}>
                    <CalcButton text="AC" size="lg" modifier />
                    <CalcButton text="Del" size="sm" modifier />
                    <CalcButton text="÷" size="sm" modifier />
                </View>
                <View style={styles.row}>
                    <CalcButton text="1" size="sm" />
                    <CalcButton text="2" size="sm" />
                    <CalcButton text="3" size="sm" />
                    <CalcButton text="x" size="sm" modifier />
                </View>
                <View style={styles.row}>
                    <CalcButton text="4" size="sm" />
                    <CalcButton text="5" size="sm" />
                    <CalcButton text="6" size="sm" />
                    <CalcButton text="+" size="sm" modifier />
                </View>
                <View style={styles.row}>
                    <CalcButton text="7" size="sm" />
                    <CalcButton text="8" size="sm" />
                    <CalcButton text="9" size="sm" />
                    <CalcButton text="-" size="sm" modifier />
                </View>
                <View style={styles.row}>
                    <CalcButton text="." size="sm" />
                    <CalcButton text="0" size="sm" />
                    <CalcButton text="=" size="lg" modifier />
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
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
        flex: 3,
        width: "100%",
    },
    screenContainer: {
        flex: 1,
        width: "100%",
        marginVertical: 10,
    },
})
