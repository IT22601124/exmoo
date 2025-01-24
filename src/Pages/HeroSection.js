import React from "react";
import "../css/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>
          Experience the power of digital marketing with{" "}
          <span className="highlight-text">DIGITALNEXUS</span>
        </h1>
        <p>
          A creative agency is a company that provides a range of services to
          help businesses and organizations with their creative and marketing
          needs. Creative agencies often employ a team of experts in various
          creative fields, such as design, advertising, copywriting, web
          development, social media marketing, and branding.
        </p>
        <button className="more-about-btn">MORE ABOUT US → </button>
      </div>
      <div className="wave-design"></div>
      <div className="chat-box">
        <div className="chat-message">Hi! What can I do for you?</div>
        <div className="chat-avatar">
          <img
            src="../images/ccare.png"
            alt="Chat Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
