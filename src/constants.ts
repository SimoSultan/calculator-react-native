export const ScreenStyleConstants = {
    backgroundColour: "#2e2f30",
    inputTextColour: "white",
    resultTextColour: "white",
}

export const ButtonStyleConstants = {
    operandBackground: "whitesmoke" as string,
    operandBackgroundHover: "#dcdcdc" as string,
    operandTextColour: "grey" as string,
    operatorBackground: "orange" as string,
    operatorBackgroundHover: "#e58928" as string,
    operatorTextColour: "black",
    buttonBorderColour: "black",
}

export const CalculatorStylesConstants = {
    backgroundColour: ScreenStyleConstants.backgroundColour,
}

export const StatusBarConstants = {
    styles: ["default", "dark-content", "light-content"],
    transitions: ["fade", "slide", "none"],
    backgroundColour: ScreenStyleConstants.backgroundColour,
}
