import {ChangeEvent, useState} from "react";
import {getAvailableWords} from "../features/API";
import {useQuery} from "react-query";

let inputFlag: string = ""

export default () => {

    const [inputValue, setInputValue] = useState("")
    const [suggestions, setSuggestions] = useState([])
    
    const suggestsQuery = useQuery("load-suggestions", () => getAvailableWords(inputFlag), {
        onSuccess: ({data}) => {
            setSuggestions(data)
        }
    })

    if (inputFlag !== inputValue) {
        inputFlag = inputValue
        suggestsQuery.refetch()
    }

    return (
        <div>
            <div><input onChange={e => setInputValue(e.target.value)} /></div>
            <ul>{suggestions.map((item, index) => <li key={index}>{item[0]}{" --> "}{item[1]}</li>)}</ul>
        </div>
    )
}