import React from "react";
import "./Enquiry.css"; // Import the CSS file

import Footerpg from "../Footer/Footer";
import { useState,useEffect } from "react";
import bg from "../Assets/background.jpg";

import { useSnackbar } from "notistack";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  //   console.log(name);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on component mount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update state based on the input name
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhoneNo(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let result = await fetch("http://localhost:4000/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phoneNo, email, message }),
      });
      if (result.status == 200) {
        console.log("i am done");
        const data = await result.json();
        // console.log("Form submission successful:", data);
        setSubmitted(true);
        setName("");
        setPhoneNo("");
        setEmail("");
        setMessage("");
        enqueueSnackbar("Email sent", { variant: "success" });
      }else if(result.status==500){
        enqueueSnackbar("Error occured", { variant: "error" });
      }
    } catch (error) {
      enqueueSnackbar("Error occured", { variant: "error" });
      // Optionally, you can handle errors here (e.g., show an error message)
    }
  };
  return (
    <div>
      <div className="topimage1">
        <div className="overlay"></div>
        <div className="heading">
          <h2>Contact Yamai Group</h2>
        </div>
      </div>
      <div className="contactcontent">
        <div className="contactimage">
          <div className="content">
            <div className="paragraph">
              <h3>Yamai Group of Construction</h3>
              <p>
                Feel free to contact us regarding your project, we would love to
                hear from you.
              </p>
            </div>
            <div className="information">
              <div className="info">
                <div className="icon">
                  <span class="material-symbols-outlined">location_on</span>
                </div>
                <div className="name">
                  163/3 Venkatesh Appartment Saat Rasta Railway Lines Solapur,
                  Maharashtra, 413001 India
                </div>
              </div>
              <div className="info">
                <div className="icon">
                  <span class="material-symbols-outlined">mail</span>
                </div>
                <div className="name">yamaigroup99@gmail.com</div>
              </div>
              <div className="info">
                <div className="icon">
                  <span class="material-symbols-outlined">call</span>
                </div>
                <div className="name">095613 34999</div>
              </div>
              <div className="info">
                <div className="icon">
                  <span class="material-symbols-outlined">apartment</span>
                </div>
                <div className="name">095613 34999</div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-container">
          <form onSubmit={handleSubmit} action="/enquiry" method="post">
            <h2>Do Enquiry</h2>
            <div>
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">Phone No*</label>
              <input
                type="phone"
                id="phone"
                name="phone"
                value={phoneNo}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          {/* {submitted && <div className="success-message">Form submitted successfully!</div>} */}
        </div>
      </div>
      <Footerpg />
    </div>
  );
};

export default ContactForm;
