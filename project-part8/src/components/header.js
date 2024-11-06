import {Outlet, Link} from "react-router-dom"
import "../css/header.css";

const Header = () => {
    return (
        <header>
            <h1>USC Baseball Tracker</h1>
            <ul id="nav-items" class="columns hidden-small">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/roster">Roster</Link></li>
                <li><Link to="/coaches">Coaches</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/follow">How to Follow</Link></li>
            </ul>
        </header>
    );
};

export default Header;