import "../css/main.css";
import "../css/schedule.css";
import Header from "../components/header";

const Schedule = () => {
    return (
        <>
            <Header />
            
            <div id="schedule-content" class="columns">
            <section id="schedule-section">
                <img id="schedule-pic" src="images/school-logos/air-force-pic.jpg" alt="logo"/>
                <img id="schedule-pic" src="images/logo-pic.jpg" alt="logo" />
                <p id="schedule-info">USC vs Air Force</p>
                <p id="schedule-info">Date: Saturday October 26</p>
                <p id="schedule-info">Time: 4:00 pm</p>
            </section>
            <section id="schedule-section">
                <img id="schedule-pic" src="images/logo-pic.jpg" alt="logo" />
                <img id="schedule-pic" src="images/school-logos/cofc-pic.jpg" alt="logo" />
                <p id="schedule-info">USC at College of Charleston</p>
                <p id="schedule-info">Date: Thursday November 7</p>
                <p id="schedule-info">Time: 6:00 pm</p>
            </section>
        </div>

        <div id="schedule-content" class="columns">
        <section id="schedule-section">
                <img id="schedule-pic" src="images/school-logos/ou-pic.jpg" alt="logo" />
                <img id="schedule-pic" src="images/logo-pic.jpg" alt="logo" />
                <p id="schedule-info">USC vs Opponent</p>
                <p id="schedule-info">Date Friday March 14:</p>
                <p id="schedule-info">Time: TBA</p>
            </section>
            <section id="schedule-section">
                <img id="schedule-pic" src="images/school-logos/ou-pic.jpg" alt="logo" />
                <img id="schedule-pic" src="images/logo-pic.jpg" alt="logo"/>
                <p id="schedule-info">USC vs Opponent</p>
                <p id="schedule-info">Date: Saturday March 15</p>
                <p id="schedule-info">Time: TBA</p>
            </section>
            
        </div>
        </>
    );
};

export default Schedule;