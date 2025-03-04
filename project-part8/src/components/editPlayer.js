import "../css/dialog.css";
import React, { useState } from "react";

const EditPlayer = (props) => {
  
  const [inputs, setInputs] = useState({
    _id: props._id,
    name: props.name,
    number: props.number,
    positions: props.position,
    year: props.year,
    prev_img: props.image
  });

  const [result, setResult] = useState("")

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values)=>({...values,[name]:value}));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values)=>({...values,[name]:value}));
  };

  const onSubmit = async(event) => {
    event.preventDefault();
    setResult("Sending...");
    
    const formData = new FormData(event.target);
    const response = await fetch(`https://project-part9.onrender.com/api/players/${props._id}`,{
      method:"PUT",
      body:formData
    });

    if(response.status === 200) {
      setResult("Player successfully updated");
      event.target.reset();
      props.updatePlayer(await response.json());
      props.closeDialog();
    } else {
      setResult("Error editing this player");
    }
  };


  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeDialog}>
            &times;
          </span>
          <form id="edit-player-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="name ">Player Name:</label>
              <input type="text" id="name" name="name" required value={inputs.name || ""} onChange={handleChange} />
            </p>
            <p>
              <label htmlFor="number">Number:</label>
              <input type="number" id="number" name="number" required value={inputs.number || ""} onChange={handleChange}/>
            </p>
            <p>
              <label htmlFor="position">Positions:</label>
              <input type="text" id="position" name="position" required value={inputs.position || ""} onChange={handleChange}/>
            </p>
            <p>
              <label htmlFor="year">Year:</label>
              <input type="text" id="year" name="year" required value={inputs.year || ""} onChange={handleChange}/>
            </p>

            <section className="columns">
              <p id="img-prev-section">
                <img id="img-prev" alt="" src={inputs.img != null ? URL.createObjectURL(inputs.img) : ""}/>
              </p>
              <p id="img-upload">
                <label htmlFor="img">Upload Image:</label>
                <input type="file" id="img" name="img" accept="image/*" onChange={handleImageChange}/>
              </p>
            </section>
            <p>
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPlayer;