import React from "react";
import "../css/ServicesSection2.css";
import eye from "../images/eye.png";

const ServicesSection2 = () => {
  return (
    <div className="services-container2">
      <div className="services-header2">
      </div>
      <div className="services-content2">
        {/* Left Image Section */}
        <div className="services-graphic2">
          <img
            src={eye}
            alt="Eye"
            className="eye-image"
          />
        </div>
        {/* Right Text Section */}
        <div className="services-text2">
          <h2>
            <span className="service-number2">02 -</span> Visual and{" "}
            <span className="highlight2">CONTENT</span>
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
      </div>
    </div>
  );
};

export default ServicesSection2;
