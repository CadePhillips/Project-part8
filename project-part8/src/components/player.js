import React, { useState } from "react";
import "../css/player.css";
import "../css/dialog.css";
import DeletePlayer from "./deletePlayer";
import EditPlayer from "./editPlayer";

const Player = (props) => {

    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [player, setPlayer] = useState(props);
    const [showPlayer, setShowPlayer] = useState(true);

    const openEditDialog = () => {
        setShowEditDialog(true);
    };
    const closeEditDialog = () => {
        setShowEditDialog(false);
    };
    const openDeleteDialog = () => {
        setShowDeleteDialog(true);
    };
    const closeDeleteDialog = () => {
        setShowDeleteDialog(false);
    };
    const hidePlayer = () => {
        setShowPlayer(false);
    }
    const editPlayer = (newPlayer) => {
        console.log("In edit player");
        console.log(newPlayer);
        setPlayer(newPlayer);
    };

    return (
        <>
        {showPlayer ? (
            <div>
                {showDeleteDialog ?(
                    <DeletePlayer
                        closeDialog={closeDeleteDialog}
                        hidePlayer={hidePlayer}
                        name={player.name}
                        _id={player._id}
                    />
                ) : (
                    ""
                )}

                {showEditDialog ? (
                    <EditPlayer
                        closeDialog={closeEditDialog}
                        updatePlayer={editPlayer}
                        _id={player._id}
                        name={player.name}
                        number={player.number}
                        position={player.position}
                        year={player.year}
                    />
                ) : (
                    ""
                )}


            <section id="player">
                <img src={"https://project-part9.onrender.com/" + player.image} alt={player.name} />
                <h2>{player.name} </h2>
                
                <section className="change-buttons">
                    <a href="#" onClick={openEditDialog}>
                        &#9998;
                    </a>
                    <a href="#" onClick={openDeleteDialog}>
                        &#x2715;
                    </a>
                </section>

                <p>Number: {player.number}</p>
                <p>Position(s): {player.position}</p>
                <p>Year: {player.year}</p>
            </section>
            </div>
        ) : (
            ""
        )}
        </>
    );
};

export default Player;