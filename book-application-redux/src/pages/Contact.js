import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Contact.css";
import { CardHeader } from "@mui/material";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted!");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="contact-root">
      <Card className="contact-card">
        <Typography variant="h4" component="div" align="center">
          Contact Us
        </Typography>
        {/* <CardContent
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div className="contact-section1">
            <div>
              <div className="contact-information-logo"></div>
              <div className="contact-information-content">
                <Typography>Mobile Number:</Typography>
                <Typography>+1 123-456-7890</Typography>
              </div>
            </div>
          </div>
          <div className="contact-section2">
            <form className="contact-form" onSubmit={handleSubmit}>
              <TextField
                className="contact-input"
                label="Name"
                variant="outlined"
                value={name}
                onChange={handleNameChange}
                required
              />
              <TextField
                className="contact-input"
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <TextField
                className="contact-input"
                label="Mobile Number"
                variant="outlined"
                value={mobile}
                onChange={handleMobileChange}
                required
              />
              <TextField
                className="contact-input"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                value={message}
                onChange={handleMessageChange}
                required
              />
              <Button
                className="contact-button"
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </form>
          </div>
        </CardContent> */}
      </Card>
    </div>
  );
};

export default Contact;
