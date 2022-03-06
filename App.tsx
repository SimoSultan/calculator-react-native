import React, { useState } from "react"
import {
    SafeAreaView,
    StatusBar,
    StatusBarAnimation,
    StatusBarStyle,
} from "react-native"
import "@expo/match-media"
import { Calculator } from "src/components/Calculator"
import { StatusBarConstants } from "src/constants"

export default function App() {
    const [hidden, setHidden] = useState(false)
    const [statusBarStyle, setStatusBarStyle] = useState(
        StatusBarConstants.styles[2] as StatusBarStyle
    )
    const [statusBarTransition, setStatusBarTransition] = useState(
        StatusBarConstants.transitions[0] as StatusBarAnimation
    )

    return (
        <SafeAreaView>
            <StatusBar
                animated={true}
                backgroundColor={StatusBarConstants.backgroundColour}
                barStyle={statusBarStyle}
                showHideTransition={statusBarTransition}
                hidden={hidden}
            />
            <Calculator />
        </SafeAreaView>
    )
}
