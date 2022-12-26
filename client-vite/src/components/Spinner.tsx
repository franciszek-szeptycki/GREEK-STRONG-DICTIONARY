import {useContext} from "react";
import {AppContext} from "../context";

export default () => {

    const {state} = useContext(AppContext)

    return (
        <div className={`spinner ${state.MENU ? "moved" : ""}`}></div>
    )
}