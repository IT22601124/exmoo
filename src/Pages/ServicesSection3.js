import React from "react";
import "../css/ServicesSection2.css";

const ServicesSection3 = () => {
  return (
    <div className="services-container2" style={{paddingLeft: "40px"}}>
      <div className="services-header2">
      </div>
      <div className="services-content2">
        {/* Left Image Section */}
        <div className="services-text2">
          <h2>
            <span className="service-number2">03 -</span> Testing and{" "}
            <span className="highlight2">LAUNCHING</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend
            placerat scelerisque tincidunt erat porttitor. Sed sed in suscipit
            lorem. Ut felis velit tristique posuere tellus sed.
          </p>
          <p>
            Arcu convallis nam massa leo viverra volutpat facilisis. Nulla
            sagittis nam pellentesque sagittis in turpis nulla et. Lorem ipsum
            dolor sit amet consectetur. Aliquam in neque eleifend placerat
            scelerisque tincidunt erat porttitor.
          </p>
          <button className="lets-create-btn2">LET'S CREATE →</button>
        </div>
        {/* Right Text Section */}
        <div className="services-graphic2">
          <img
            src="../images/rc.png"
            alt="Eye"
            className="eye-image"
          />
        </div>
        
      </div>
    </div>
  );
};

export default ServicesSection3;
