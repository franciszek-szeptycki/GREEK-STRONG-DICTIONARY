import SearchEngine from "./components/Search";
import {AppContext} from "./context";
import {useContext} from "react";
import "./styles/App.sass"
import Panel from "./components/Panel";
import Spinner from "./components/Spinner";

const App = () => {

    const {state} = useContext(AppContext)

    return (
        <div className={`App ${state.DARK_MODE ? "dark--theme" : "light--theme"}`}>
            <Panel/>
            <aside className={`App__aside ${state.INDEX > 0 ? state.MENU ? "" : "hidden" : ""}`}>
                <SearchEngine/>
            </aside>
            <main className="App__main">
                <Spinner/>
                {state.INDEX > 0 && <iframe
                    src={`http://biblia-online.pl/Slownik/Biblijny/JamesStrongGreek/Strong/G${state.INDEX}`}
                    height="100%"
                    width="100%"
                />}
            </main>
        </div>
)}

export default App
