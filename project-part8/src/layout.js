import {Outlet, Link} from "react-router-dom";
import {useState} from "react";
import Header from "./components/header";
import "./css/Layout.css";

const Layout = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu =() => {
        setMenuOpen(!menuOpen);
    }

    return (
        <>
            <p onclick={toggleMenu}>|||</p>
            <Header />
        </>
    );
};

export default Layout;