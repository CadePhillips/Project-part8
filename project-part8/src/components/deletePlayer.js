import "../css/dialog.css";
import React, { useState } from "react";

const DeletePlayer = (props) => {

  const [result, setResult] = useState("");

  const deletePlayer = async() => {
    
    const response = await fetch(`https://project-part9.onrender.com/api/players/${props._id}`,{
      method:"DELETE"
    });

    if(response.status === 200) {
      setResult("Player successfully deleted");
      props.hidePlayer();
      props.closeDialog();
    } else {
      setResult("Sorry, player could not be deleted");
    }
  };



  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the {props.name}</h3>
            <section>
              <button onClick={props.closeDialog}>No</button>
              <button onClick={deletePlayer}>Yes</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};


export default DeletePlayer;