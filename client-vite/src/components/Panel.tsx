import {useContext} from "react";
import {AppContext} from "../context";

export default () => {

    const {state, dispatch} = useContext(AppContext)

    return (
        <div className={`panel ${state.INDEX > 0 ? "" : "hidden"}`}>
            <button className="panel__menu" onClick={() => dispatch({type: state.MENU ? "MENU_OFF" : "MENU_ON" })} ><span className="material-symbols-outlined c1">menu</span></button>
        </div>
    )
}