import React from "react";
import "../css/ServicesSection.css";

const ServicesSection = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>
          Explore Our Range of <span className="highlight">SERVICES</span>
        </h1>
        
      </div>
      <button className="all-services-btn">ALL SERVICES →</button>
      <div className="services-content">
        <div className="services-text">
          <h2>
            <span className="service-number">01 -</span><br></br> Setting Your{" "}
            
            <span className="highlight">GOALS</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend
            placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit
            lorem. Ut felis velit tristique posuere tellus sed.
          </p>
          <p>
            Arcu convallis nam massa leo viverra volutpat facilisis. Nulla
            sagittis nam pellentesque sagittis in turpis nulla et. Lorem ipsum
            dolor sit amet consectetur.
          </p>
          <button className="lets-create-btn">LET'S CREATE →</button>
        </div>
        
      </div>
      
    </div>
  );
};

export default ServicesSection;
