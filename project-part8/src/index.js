import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './css/index.css';
import "./css/main.css";
import Aboutus from "./pages/aboutus";
import Admin from "./pages/admin";
import Coaches from "./pages/coaches";
import Contactme from "./pages/contactme";
import Follow from "./pages/follow";
import Home from "./pages/home";
import Roster from "./pages/roster";
import Schedule from "./pages/schedule";
import Socials from "./pages/socials";
import Stats from "./pages/stats";


const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
      <Route path="/">
          <Route index element={(<Home />)} />
          <Route path="roster" element={(<Roster />)} />
          <Route path='coaches' element={(<Coaches />)} />
          <Route path='schedule' element={(<Schedule />)} />
          <Route path="aboutus" element={(<Aboutus />)} />
          <Route path='follow' element={(<Follow />)} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

root.render(
  <App />
);
