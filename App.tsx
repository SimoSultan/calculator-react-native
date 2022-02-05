import { SafeAreaView, StyleSheet, View } from "react-native"
import Calculator from "./components/Calculator"

export default function App() {
    return (
        <SafeAreaView style={styles.appContainer}>
            <Calculator />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    appContainer: {
        width: 600,
        height: 50,
        flex: 1,
        alignSelf: "center",
        maxWidth: "90%",
        paddingBottom: 40,
        paddingTop: 100,
    },
})
