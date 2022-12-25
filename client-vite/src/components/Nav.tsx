import {NavLink} from "react-router-dom";

export default () => {
    return (
    <nav>
        <ul>
            <li><NavLink to="/">Słownik</NavLink></li>
            <li><NavLink to="/najczestsze-slowa">Top 1000 słów</NavLink></li>
            <li><NavLink to="/info">Info</NavLink></li>
        </ul>
    </nav>)
}