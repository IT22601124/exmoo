import React from "react";
import "../css/Contact.css"; // Create a CSS file for styling
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">
        Get in <span className="highlight">TOUCH</span>
      </h1>
      <div className="contact-content">
        {/* Left Section */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Your email address is safe with us. Required fields are noted with *</p>
          <div className="info-item">
            <CiPhone  size={30} className="icons"/>
            <p>
              Phone Number:
              <br />
              +001 123 456 789, +002 321 654 987
            </p>
          </div>
          <div className="info-item">
          <MdOutlineEmail  size={30}  className="icons"/>
            <p>
              Email Address:
              <br />
              exampleinfo@gmail.com
            </p>
          </div>
          <div className="info-item">
          <CiLocationOn size={30}  className="icons" />
            <p>
              Address:
              <br />
              26 South Street, New York, NY 98, USA
            </p>
          </div>
          <div className="social-media">
            <p>Social Media:</p>
            <span className="icon">📘</span>
            <span className="icon">🎵</span>
            <span className="icon">✖️</span>
            <span className="icon">📷</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="contact-form">
          <form>
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="example@gmail.com" required />
            </div>
            <div className="form-row">
              <select required>
                <option value="">Project Type</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-app">Mobile App</option>
              </select>
              <input type="text" placeholder="Estimate Budget" required />
            </div>
            <textarea className="txtare"
              placeholder="Description"
              rows="4"
              required
            ></textarea>
            <div className="form-row">
              <label className="upload-label">
                Have a Brief (optional)
                <input type="file" />
              </label>
            </div>
            <br></br>
            <div className="form-row-checkbox">
              
              <p><input className="chk" type="checkbox" required  />
                Agree to the information submitted by us at TechSync and contact
                me with a proposal.
                <button type="submit" className="submit-btn">
              Submit
            </button>
              </p>
            </div>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
