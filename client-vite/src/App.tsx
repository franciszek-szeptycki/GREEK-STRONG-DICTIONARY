import Header from "./layout/Header";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from "./pages/Dictionary";
import Top1000 from "./pages/Top1000";
import Info from "./pages/Info";
// import "./App.sass"

const App = () => {

return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<Dictionary/>}/>
                    <Route path="/najczestsze-slowa" element={<Top1000/>}/>
                    <Route path="/info" element={<Info/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    </div>
)}

export default App
