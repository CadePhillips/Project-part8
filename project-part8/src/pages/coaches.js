import "../css/main.css";
import "../css/coaches.css";
import Header from "../components/header";

const Coaches = () => {
    return (
        <>
            <Header />
            <div id="coaches" class="columns">
            <section id="coach">
                <img id="coach-pics" src="images/coach-pics/hc-pic.webp" alt="Coach Mainieri" />
                <p>Name: Paul Mainieri</p>
                <p>Head Coach</p>
            </section>
            <section id="coach">
                <img id="coach-pics" src="images/coach-pics/ahd-pic.webp" alt="Coach Lee" />
                <p>Name: Monte Lee</p>
                <p>Associate Head Coach/Hitting Coach</p>
            </section>
            <section id="coach">
                <img id="coach-pics" src="images/coach-pics/pc-pic.webp" alt="Coach Rooney" />
                <p>Name: Terry Rooney</p>
                <p>Pitching Coach/Recruiting Coordinator</p>
            </section>
            <section id="coach">
                <img id="coach-pics" src="images/coach-pics/ac-pic.webp" alt="Coach Hendry" />
                <p>Name: John Hendry</p>
                <p>Assistant Coach </p>
            </section>
            <section id="coach">
                <img id="coach-pics" src="images/coach-pics/doo-pic.jpg" alt="Coach Gordon" />
                <p>Name: Chris Gordon</p>
                <p>Director of Operations & Player Development</p>
            </section>
            <section id="coach">
                <img id="coach-pics" src="images/coach-pics/ga-pic.jpg" alt="Coach Westfall" />
                <p>Name: Caleb Westfall</p>
                <p>Graduate Assistant</p>
            </section>
        </div>
        </>
    );
};

export default Coaches;