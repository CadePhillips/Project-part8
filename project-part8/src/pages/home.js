import "../css/main.css";
import "../css/home.css";
import Header from "../components/header";

const Home = () => {
    return (
        <>
            <Header />
            <div className="next">
                <p>Next Game: </p>
                <p>USC vs Air Force</p>
                <p>October 26th 4pm</p>
            </div>
            <div>
                <p>Welcome to the USC Baseball Tracker</p>
                <p>The one stop shop for everything USC Baseball</p>
            </div>
            <img src={process.env.PUBLIC_URL + '/images/home-pic.jpg'} />
            <div>
                <p id="home-content">NCAA National Champions: 2010, 2011</p>
                <p id="home-content">College World Series Runner-Ups: 1975, 1977, 2002, 2012</p>
                <p id="home-content">College World Series Appearances: 1975, 1977, 1981, 1982, 1985, 2002, 2003, 2004, 2010, 2011, 2012</p>
                <p id="home-content">Conference Tournament Champions: 2004</p>
                <p id="home-content">SEC Regular Season Conference Champions: 2000, 2002, 2011</p>
            </div>
        </>
    );
};

export default Home;