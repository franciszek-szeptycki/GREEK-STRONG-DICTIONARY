import {useContext} from "react";
import {AppContext} from "../context";

export const SearchLi = ({item}: {item: string[]}) => {

    const {dispatch} = useContext(AppContext)

    const handleClick = () => {
        dispatch({type: "SET_INDEX", item: item[0]})
        dispatch({type: "MENU_OFF"})
    }

    return (
        <li className="search__li" onClick={handleClick}>
            <p className="search__li-p">{item[1]}</p>
            <p className="search__li-p">{item[2]}</p>
        </li>)
}

export const SearchCounter = ({count}: {count: number}) => {
    return <li className="search__li">+{count - 10}</li>
}
