export const getBackgroundColour = (modifier?: boolean, pressed?: boolean) => {
    if (modifier) {
        return pressed ? "#e58928" : "orange"
    }
    return pressed ? "#dcdcdc" : "whitesmoke"
}
