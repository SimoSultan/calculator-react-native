import { ButtonStyleConstants } from "src/constants"

export const getBackgroundColour = (modifier?: boolean, pressed?: boolean) => {
    if (modifier) {
        return pressed
            ? ButtonStyleConstants.operatorBackgroundHover
            : ButtonStyleConstants.operatorBackground
    }
    return pressed
        ? ButtonStyleConstants.operandBackgroundHover
        : ButtonStyleConstants.operandBackground
}
