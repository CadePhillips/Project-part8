import "../css/main.css";
import "../css/roster.css";
import Header from "../components/header";

const Roster = () => {
    return (
        <>
            <Header />
            <div id="roster" class="columns">
            <section id="player">
                <a href="stats.html"><img id="player-pics" src="images/player-pics/kimball-pic.webp" alt="Picture of Roman Kimball" /></a>
                <p>Name: Roman Kimball</p>
                <p>Number: 2</p>
                <p>Position: Right Handed Pitcher</p>
                <p>Year: Redshirt Sophomore</p>
            </section>
            <section id="player">
                <a href="stats.html"><img id="player-pics" src="images/player-pics/ellis-pic.webp" alt="Picture of Lee Ellis" /></a>
                <p>Name: Lee Ellis</p>
                <p>Number: 3</p>
                <p>Position: Infield</p>
                <p>Year: Freshman</p>
            </section>
            <section id="player">
                <a href="stats.html"><img id="player-pics" src="images/player-pics/phipps-pic.webp" alt="Picture of Jackson Phipps" /></a>
                <p>Name: Jackson Phipps</p>
                <p>Number: 4</p>
                <p>Position: Left Handed Pitcher</p>
                <p>Year: Redshirt Junior</p>
            </section>
            <section id="player">
                <a href="stats.html"><img id="player-pics" src="images/player-pics/lecroy-pic.webp"alt="Picture of Talmadge Lecroy" /></a>
                <p>Name: Talmadge LeCroy</p>
                <p>Number: 5</p>
                <p>Position: Infield/Catcher</p>
                <p>Year: Junior</p>
            </section>
            <section id="player">
                <a href="stats.html"><img id="player-pics" src="images/player-pics/jackson-pic.webp" alt="Picture of Blake Jackson" /></a>
                <p>Name: Blake Jackson</p>
                <p>Number: 6</p>
                <p>Position: Outfield</p>
                <p>Year: Junior</p>
            </section>
            <section id="player">
                <a href="stats.html"><img id="player-pics" src="images/player-pics/jones-pic.webp" alt="Picture of Kennedy Jones" /></a>
                <p>Name: Kennedy Jones</p>
                <p>Number: 7</p>
                <p>Position: Outfield</p>
                <p>Year: Junior</p>
            </section>
        </div>
        </>
    );
};

export default Roster;