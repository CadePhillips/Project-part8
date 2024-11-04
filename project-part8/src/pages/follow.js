import "../css/main.css";
import "../css/follow.css";
import Header from "../components/header";

const Follow = () => {
    return (
        <>
            <Header />
            <p id="follow-content">Follow the Gamecocks with the links below: </p>
        <nav id="home-nav">
            <ul class="columns">
                <li><a href="socials.html">Instagram
                    <img id="social-logo" src="images/social-logos/instagram-logo.png" alt="logo"/>
                </a></li>
                <li><a href="socials.html">X/Twitter
                    <img id="social-logo" src="images/social-logos/x-logo.webp" alt="logo"/>
                </a></li>
                <li><a href="socials.html">Facebook
                    <img id="social-logo" src="images/social-logos/facebook-logo.png" alt="logo" />
                </a></li>
                <li><a href="socials.html">Tiktok
                    <img id="social-logo" src="images/social-logos/tiktok-logo.png" alt="logo" />
                </a></li>
            </ul>
        </nav>
        <p></p>
        <img id="home-pic" src="images/home-pic.jpg" alt="main picture" />
        </>
    );
};

export default Follow;