import {useContext} from "react";
import {AppContext} from "../context";

export default () => {

    const {state} = useContext(AppContext)

    return (
        <div className={`spinner ${state.MENU ? "moved" : ""}`}>
            <div className="spinner__item spinner__item-1"></div>
            <div className="spinner__item spinner__item-2"></div>
            <div className="spinner__item spinner__item-3"></div>
        </div>
    )
}