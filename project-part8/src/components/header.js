import "../css/header.css";

const Header = () => {
    return (
        <header>
            <h1>USC Baseball Tracker</h1>
            <ul id="nav-items" class="columns hidden-small">
                <li><a href="/">Home</a></li>
                <li><a href="roster">Roster</a></li>
                <li><a href="coaches">Coaches</a></li>
                <li><a href="schedule">Schedule</a></li>
                <li><a href="aboutus">About Us</a></li>
                <li><a href="follow">How to Follow</a></li>
            </ul>
        </header>
    );
};

export default Header;