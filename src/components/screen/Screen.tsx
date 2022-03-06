import { ScreenInput, ScreenOutput } from "../exports"
import { View } from "react-native"
import { ScreenProps } from "../../types/types"
import { ScreenStyles } from "../../styles/styles"

export const Screen: React.FC<ScreenProps> = ({ operands }) => {
    return (
        <View style={ScreenStyles.screen}>
            <ScreenInput operands={operands} />
            <ScreenOutput operands={operands} />
        </View>
    )
}
