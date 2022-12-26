import React, {createContext} from "react";
import {Action, State} from "./reducers";

export const initialState: State = {
    DARK_MODE: false,
    INDEX: 0,
    MENU: true
}

export const AppContext = createContext<{state: State, dispatch: React.Dispatch<Action>}>({
    state: initialState,
    dispatch: () => initialState
})
