export type State = {
    LANGUAGE: "polski" | "angielski"
    DARK_MODE: boolean
}

export type ActionTypes = "SET_LANGUAGE" | "DARK_MODE_ON" | "DARK_MODE_OFF"

export type Action = {type: ActionTypes, item?: any}

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "SET_LANGUAGE":
            return { ...state, LANGUAGE: action.item}
        case "DARK_MODE_ON":
            return {...state, DARK_MODE: true}
        case "DARK_MODE_OFF":
            return {...state, DARK_MODE: false}
        default:
            throw new Error()
    }
}