import React from "react";
import phone_icon from "../images/phone_icon.png";
import email_icon from "../images/email_icon.png";
import location_icon from "../images/location_icon.png";
import message_sent_icon from "../images/message_sent_icon.png";

export default function ContactSection() {
  const formRef = React.useRef(null);

  const clearFormFields = () => {
    formRef.current.reset();
  };

  const Submit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    if (!formData.get("Name") || !formData.get("Email") || !formData.get("Message")) {
      alert("Please fill in all fields.");
      return;
    }

    fetch(process.env.REACT_APP_GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text()) // Change from .json() to .text()
      .then((data) => {
        console.log("Success Response:", data);
        
        if (data.includes("success") || data.includes("Message sent")) {
          alert("Message sent successfully!");
          clearFormFields();
        } else {
          alert("Failed to send message. Server response: " + data);
        }
      })
      .catch((error) => {
        console.error("Error Response:", error);
        alert("Failed to send the message.");
      });
    
  };

  return (
<div
  id="contact_us"
  className="flex flex-col sm:flex-row items-center justify-center rounded-[7%] p-4 text-alice sm:h-auto"
>
  {/* Left Column */}
  <div className="contact-col flex flex-col items-center w-full sm:w-[40%] bg-[#EEE7E7] text-black text-center sm:text-left p-4 sm:h-auto">
    <ul>
      <li className="mb-4 flex items-center">
        <img src={email_icon} alt="email_icon" className="w-6 h-6 mr-2" />
        <span>lebedhealthways@gmail.com</span>
      </li>
      <li className="mb-4 flex items-center">
        <img src={phone_icon} alt="phone-icon" className="w-6 h-6 mr-2" />
        <span>+254 723477313</span>
      </li>
      <li className="mb-4 flex items-center">
        <img src={location_icon} alt="location_icon" className="w-6 h-6 mr-2" />
        <span>009381 Kikuyu, Kiambu Kenya</span>
      </li>
    </ul>
  </div>

  {/* Right Column */}
  <div className="contact-col-2 w-full sm:w-[60%] p-4">
    <h3 className="text-lg font-semibold text-center text-white sm:text-left mb-4">Send us a message</h3>
    <form ref={formRef} onSubmit={Submit} className="form flex flex-col gap-4">
      <input
        type="text"
        name="Name"
        placeholder="Name"
        className="input-style w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CA5050]"
      />
      <input
        type="email"
        name="Email"
        placeholder="Email"
        className="input-style w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CA5050]"
      />
      <textarea
        name="Message"
        placeholder="Your Message"
        rows="4"
        className="text-area w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#CA5050]"
      ></textarea>
      <button
  type="submit"
  className="Button-submit w-full sm:w-[50%] lg:w-[30%] px-4 py-2 bg-[#CA5050] text-white text-sm sm:text-base lg:text-lg rounded-md flex justify-center items-center hover:bg-[#b64444] transition-all mx-auto"
>
  Send Message
  <img src={message_sent_icon} className="w-4 sm:w-5 lg:w-6 ml-2" alt="message_sent icon" />
</button>

    </form>
  </div>
</div>

  );
}
