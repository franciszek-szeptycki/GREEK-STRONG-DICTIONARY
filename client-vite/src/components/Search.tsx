import {useContext, useEffect, useRef, useState} from "react";
import instance from "../features/API";
import {SearchLi, SearchCounter} from "./SearchLi";
import {AppContext} from "../context";


export default () => {

    const {state, dispatch} = useContext(AppContext)

    const [suggestions, setSuggestions] = useState<string[][]>([])
    const [suggestionsCounter, setSuggestionsCounter] = useState<number>(0)

    const refInput: any = useRef()

    useEffect(() => {
        refInput.current.value = ""
        setSuggestions([])
        setSuggestionsCounter(0)
    }, [state.INDEX])


    const handleSearch = async (value: string) => {
        const {data}: suggestionsAPIType = await instance.get(`/suggestions?value=${value}`)
        setSuggestions(value ? data ? data.data : [] : [])
        setSuggestionsCounter(value ? data.count : 0)
    }

    console.log(suggestions, suggestionsCounter)

    return (
        <div className="search" >
            <div className="search__label">
                <span className="material-symbols-outlined">search</span>
                <input ref={refInput} className="search__label-input" onChange={e => handleSearch(e.target.value)} />
                <span className="material-symbols-outlined search__help" >help</span>
            </div>
            <ul className="search__ul">
                {suggestions.length ? suggestions.map((item, index) => (
                <SearchLi key={index} item={item} />)): <></>}
                {suggestionsCounter > 10 ? <SearchCounter count={suggestionsCounter} /> : <></>}
            </ul>
        </div>
    )
}

interface suggestionsAPIType {
    data: {
        data: string[][],
        count: number
    }
}