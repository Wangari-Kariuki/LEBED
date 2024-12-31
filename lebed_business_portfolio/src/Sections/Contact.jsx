import React from "react";
import phone_icon from "../images/phone_icon.png";
import email_icon from "../images/email_icon.png";
import location_icon from "../images/location_icon.png";
import message_sent_icon from "../images/message_sent_icon.png"

export default function ContactSection() {
  const formRef = React.useRef(null);

  const Submit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    if (!formData.get("Name") || !formData.get("Email") || !formData.get("Message")) {
      alert("Please fill in all fields.");
      return;
    }

    fetch(
      "https://script.google.com/macros/s/AKfycbzhnFQ2FYX7WrzA68PQBGnTxqi-fQbWQSNd-zdNCCmh-0cmbX-WiyaiSd6zWG5KJJbP/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Message sent!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message.");
      });
  };

  return (
    <div className="contact">
     
      <div className="contact-col">
      <div className="empty">
        
      </div>
        <ul>
          <li>www.lebedhealthways.com</li>
          <li>
            <img src={email_icon} alt="email_icon" /> contacts@datashield.
          </li>
          <li>
            <img src={phone_icon} alt="phone-icon" /> +254 113188250
          </li>
          <li>
            <img src={location_icon} alt="location_icon" /> 009300 Ongata Rongai,
            Kajiado, Kenya
          </li>
        </ul>
      </div>
      <div className="contact-col-2">
        <h3>Send us a message</h3>
        <form
          ref={formRef}
          onSubmit={Submit}
          className="form"
        >
          <input
            type="text"
            name="Name"
            placeholder="Name"
            className="input-style"
          />
          <input
            type="email"
            name="Email"
            placeholder="Email"
            className="input-style"
          />
          <textarea
            name="Message"
            placeholder="Your Message"
            rows="4"
            className="text-area"
          ></textarea>
          <button type="submit" className="Button-submit">
            Send Message
            <img src= {message_sent_icon} className="w-9 pl-[20px]"/>
          </button>
        </form>
      </div>
    </div>
  );
}
