import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { BsFillPhoneFill } from "react-icons/bs";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success(`${text} copied to clipboard!`);
  };

  return (
    <>
      <div className="contact-page-main-container">
        <div className="contact-page">
          <div
            className="contact-card"
            onClick={() => handleCopyToClipboard("Gujarat, India")}
          >
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-title">Address</div>
            <div className="contact-info">Gujarat, India</div>
          </div>

          <div
            className="contact-card"
            onClick={() => handleCopyToClipboard("+91 7698362613")}
          >
            <BsFillPhoneFill className="contact-icon" />
            <div className="contact-title">Mobile Number</div>
            <div className="contact-info">+91 7698362613</div>
          </div>

          <div
            className="contact-card"
            onClick={() => handleCopyToClipboard("pratik1020@gmail.com")}
          >
            <FaEnvelope className="contact-icon" />
            <div className="contact-title">Email</div>
            <div className="contact-info">pratik1020@gmail.com</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
