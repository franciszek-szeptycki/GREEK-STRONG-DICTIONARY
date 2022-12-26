export type State = {
    DARK_MODE: boolean
    INDEX: number
    MENU: boolean
}

export type ActionTypes = "DARK_MODE_ON" | "DARK_MODE_OFF" | "SET_INDEX" | "MENU_ON" | "MENU_OFF"

export type Action = {type: ActionTypes, item?: any}

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "DARK_MODE_ON":
            return {...state, DARK_MODE: true}
        case "DARK_MODE_OFF":
            return {...state, DARK_MODE: false}
        case "SET_INDEX":
            return {...state, INDEX: action.item}
        case "MENU_ON":
            return {...state, MENU: true}
        case "MENU_OFF":
            return {...state, MENU: false}
        default:
            throw new Error()
    }
}