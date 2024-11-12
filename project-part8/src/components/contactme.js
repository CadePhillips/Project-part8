import React from "react";
import "../css/contactme.css";

export default function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div id="contact-section">
        <form id="contact" onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Name" required/>
          <input type="email" name="email" placeholder="email@email.com" required/>
          <textarea name="message" placeholder="Message" required></textarea>
  
          <button type="submit">Submit Form</button>
  
        </form>
        <span>{result}</span>
  
      </div>
    );
  }