import { useState, useEffect } from "react";
import axios from "axios";
import "../css/main.css";
import "../css/roster.css";
import Header from "../components/header";
import AddPlayer from "../components/addPlayer";
import Player from "../components/player";

const Roster = () => {

    const [players, setPlayers] = useState([]);
        const [showAddDialog, setShowAddDialog] = useState(false);

        useEffect(() => {
        (async () => {
            const response = await axios.get("https://project-part9.onrender.com/api/players");
            setPlayers(response.data);
        })();
        }, []);

        const openAddDialog = () => {
        setShowAddDialog(true);
        };

        const closeAddDialog = () => {
        setShowAddDialog(false);
        };

        const updatePlayer = (player) => {
            setPlayers((players)=>[...players, player]);
        }

    return (
        <>
            <Header />

        <div className="players">
            <h3>Add Players</h3>

            <button id="add-player" onClick={openAddDialog}>Add Player Here</button>

            {showAddDialog ? (
            <AddPlayer closeDialog={closeAddDialog} showNewPlayer={updatePlayer} />
            ):("")} 
            

            <div className="columns">
            {players.map((player) => (
                <Player 
                name={player.name}
                number={player.number}
                position={player.position}
                year={player.year}
                image={player.image}
                />
            ))}
            </div>
        </div>
        </>
    );
};

export default Roster;