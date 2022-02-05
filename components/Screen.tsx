import { StyleSheet, Text, View } from "react-native"

type Props = {}

export const Screen: React.FC<Props> = ({}) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.screenText}>screen</Text>
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
})
