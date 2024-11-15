//  import React, { useState } from "react";
import "../css/player.css"

const Player = (props) => {
    return (
        <section id="player">
            <img src={"http://localhost:3002/" + props.image} alt={props.name} />
            <p>Name: {props.name} </p>
            <p>Number: {props.number}</p>
            <p>Positions: {props.position}</p>
            <p>Year: {props.year}</p>
        </section>
    );
};

export default Player;