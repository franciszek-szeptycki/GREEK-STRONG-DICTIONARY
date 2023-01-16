import {useQuery} from "react-query";
import instance from "../features/API";
import {useContext, useEffect, useState} from "react";
import {AppContext} from "../context";
import Spinner from "./Spinner";
import {Row, Verse} from "./DictionaryRow";

export default () => {

    const {state} = useContext(AppContext)

    const [info, setInfo] = useState<InfoType>()
    const [verses, setVerses] = useState<VersesType[]>()
    const [loading, setLoading] = useState(true)

    const loadInfo = useQuery('load-info', () => instance.get(`/info?id=${state.INDEX}`), {
        onSuccess: ({data} : {data: DictionaryType}) => {
            setInfo(data.info)
            setVerses(data.verses)
            setLoading(false)
        }
    })

    useEffect(() => {
        loadInfo.refetch()
        setLoading(true)
    }, [state.INDEX])


    if (loading) return <Spinner/>
    else if (info && verses) return (
        <div className="dictionary" style={{overflowY: (!loading && info && verses) ? "scroll" : "hidden"}} >
            <div className="row row-1" >
                <Row data={["original word", info.orthodox, "pronunciation", info.pronunciation]}/>
            </div>
            <div className="row row-2" >
                <Row data={["definition", info.definition, "examples", info.examples]}/>
            </div>
            <div className="row row-3" >
                <div className="row__label">
                    <p className="row__label-title">biblical verses</p>
                    <ul className="verses-ul" >
                        {verses.map((item: VersesType, id: number) => <Verse key={id} text={item.text} index={item.index}/>)}
                    </ul>
                </div>
            </div>
            <p className="original">Original website: <a className="original__link"  target="_blank" href={`http://biblia-online.pl/Slownik/Biblijny/JamesStrongGreek/Strong/G${state.INDEX}`}>link</a></p>
        </div>
    )
}

interface InfoType {
    orthodox: string,
    pronunciation: string,
    definition: string
    examples: string
}

type VersesType = {text: string, index: string}

interface DictionaryType {
    info: InfoType
    verses: VersesType[]
}