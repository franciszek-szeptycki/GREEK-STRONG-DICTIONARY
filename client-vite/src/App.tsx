import SearchEngine from "./components/Search";
import {AppContext} from "./context";
import {useContext} from "react";
import "./styles/App.sass"
import Panel from "./components/Panel";
import Spinner from "./components/Spinner";
import Dictionary from "./components/Dictionary";

const App = () => {

    const {state} = useContext(AppContext)

    return (
        <div className={`App ${state.DARK_MODE ? "dark--theme" : "light--theme"}`}>
            <Panel/>
            <aside className={`App__aside ${state.INDEX > 0 ? state.MENU ? "" : "hidden" : ""}`}>
                <SearchEngine/>
            </aside>
            <main className="App__main">
                {state.INDEX > 0 ?
                    (<Dictionary/>) :
                    (<p className={`App__main-placeholder ${state.INDEX > 0 ? "" : "moved"}`}>chose a word</p>)
                }
            </main>
        </div>
)}

export default App
