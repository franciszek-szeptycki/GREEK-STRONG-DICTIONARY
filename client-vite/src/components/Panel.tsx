import {useContext} from "react";
import {AppContext} from "../context";

export default () => {

    const {state, dispatch} = useContext(AppContext)

    return (
        <div>
            <div>
                {state.LANGUAGE}
                <button onClick={() => dispatch({type: "SET_LANGUAGE", item: "polski"})} >polski</button>
                <button onClick={() => dispatch({type: "SET_LANGUAGE", item: "english"})} >english</button>
            </div>
            <div>
                {state.DARK_MODE ? "dark-mode" : "light-mode"}
                <button onClick={() => dispatch({type: state.DARK_MODE ? "DARK_MODE_OFF" : "DARK_MODE_ON"})} >darkmode</button>
            </div>
        </div>
    )
}