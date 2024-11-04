import "../css/main.css";
import "../css/aboutus.css";
import Header from "../components/header";

const Aboutus = () => {
    return (
        <>
            <Header />
            <p id="about-content">Welcome to the University of South Carolina Gamecocks Baseball site. The Gamecocks are a Division 1 Baseball program that compete in the South Eastern Conference</p>
            <h2 id="about-header">Ticketing Information</h2>
            <h3 id="home-content">Would you like to learn more about tickets?</h3>
            <p id="home-content">Student ticket request</p>
            <p id="home-content">Season ticket information</p>
            <p id="home-content">Account manager</p>
            <p id="home-content">Access your digital tickets</p>
            <img id="home-pic" src="images/home-pic.jpg" alt="Main picture" />
        </>
    );
};

export default Aboutus;