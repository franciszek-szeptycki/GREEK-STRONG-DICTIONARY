import {useContext} from "react";
import {AppContext} from "../context";

export const Row = ({data}: { data: string[] }) => (
        <>
            <div className="row__label">
                <p className="row__label-title">{data[0]}</p>
                <p className="row__label-content" >{data[1]}</p>
            </div>
            <div className="row__label">
                <p className="row__label-title">{data[2]}</p>
                <p className="row__label-content" >{data[3]}</p>
            </div>
        </>
    )

export const Verse = ({text, index} : {text: string, index: string}) => {

    const {state} = useContext(AppContext)

    const data: string[] = text.split(`G${state.INDEX}`)

    let newText: any[] = []
    data.map((item: any, index: number) => {
        if (index >= data.length - 1) newText.push(<p key={index} >{item}</p>)
        else {
            newText.push(<p key={index} >{item}</p>)
            newText.push(<span key={index+1000} >G{state.INDEX}</span>)
    }})


    return (
        <li className="verses-ul__li">
            <p className="verses-ul__li-text" >{newText.map((item: any) => item)}</p>
            <p className="verses-ul__li-index" >{index}</p>
        </li>
)}
