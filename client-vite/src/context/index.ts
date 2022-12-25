import React, {createContext} from "react";
import {Action, State} from "./reducers";

export const initialState: State = {
    LANGUAGE: "polski"
}

export const AppContext = createContext<{state: State, dispatch: React.Dispatch<Action>}>({
    state: initialState,
    dispatch: () => initialState
})
