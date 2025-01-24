import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import { MdOutlineSegment } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import ServicesSection2 from './ServicesSection2';
import ServicesSection3 from './ServicesSection3';
import Showcase from './showcase';
import Transforming from './Transforming';
import Feedback from './Feedback';
import Contact from './Contact';
import Blogs from './Blogs';
import Foot from './Foot';

const Home = () => {
  const [isDashVisible, setIsDashVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDashVisible(true); // Show the dashDiv on mouse hover
  };

  const handleMouseLeave = () => {
    setIsDashVisible(false); // Hide the dashDiv when mouse leaves
  };

 useEffect(() => {
    const reviewCards = document.querySelectorAll('.review-card');
    reviewCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 3}s`;
    });
  }, [])

  

  return (
  <div>
    <div className="container">
      <header className="header">
        <h1 className="brand">EXMOO</h1>
      </header>
      
      {/* Conditionally render MdOutlineSegment based on isDashVisible */}
      {!isDashVisible && (
        <MdOutlineSegment
          className='dashboardMark'
          size={50}
          onMouseEnter={handleMouseEnter}
        />
      )}
      
      <div className={`dashDiv ${isDashVisible ? 'visible' : ''}`}>
        <CiCircleRemove size={50} className='removeIcon' onClick={handleMouseLeave} />
        <header>
          <nav>
            <ul>
              <li><Link to="/" className="nav-item">Home</Link></li>
              <li><Link className="nav-item" to="/service">Service</Link></li>
              <li><Link className="nav-item" to="/about">About</Link></li>
              <li><Link className="nav-item" to="/portfolio">Portfolio</Link></li>
            </ul>
          </nav>
        </header>
      </div>
      <div className='opades'>
          <p className="description">
            A creative agency is a company that provides a range of services to help businesses and organizations with their creative and marketing needs.
          </p>
          </div>

      <main className="main-content">
        <div className="text-section">
          <p className="coordinates">6.1569° S, 106.1569° E</p>
          <h2 className="title">trusted design partner</h2>
          
          
          <button className="cta-button">Book a Free Consultation   <FaArrowRight size={25} /></button>
        </div>
        
      </main>
      <aside className="aside-section">
        <div className="fiverr-badge">fiverr. ★ 5.0</div>
        <div className="r1">
          <h3 className="reviewer-name">Benjamin</h3>
          <p className="review-text">
            Combines creativity with technology to offer unparalleled digital solutions. Our comprehensive services include SEO, social media.
          </p>
        </div>
        <div className="r2" >
          <h3 className="reviewer-name">hh</h3>
          <p className="review-text">
            Combines creativity with technology to offer unparalleled digital solutions. Our comprehensive services include SEO, social media.
          </p>
        </div>
      </aside>
      
      <div className='slider aria-hidden="true' style={{width: '1400px',height: '100px',quantity: 10}}>
      <div className='list'>
        <div className='item'><img src="../images/1.png" alt="logo1" /></div>
        <div className='item'><img src="../images/2.png" alt="logo1" /></div>
        <div className='item'><img src="../images/3.png" alt="logo1" /></div>
        <div className='item'><img src="../images/4.png" alt="logo1" /></div>
        <div className='item'><img src="../images/5.png" alt="logo1" /></div>
      </div> 
      </div>
      </div>
      <HeroSection/>
      <ServicesSection/>
      <ServicesSection2/>
      <ServicesSection3/>
      <Showcase/>
      <Transforming/>
      <Feedback/>
      <Contact/>
      <Blogs/>
      <Foot/>
      
      
     
      <footer className="footer">
        <div className="chat-widget">
          <h3 className='h33'>@2024 All Rights Copyright NEXUS Design & Developed By UIPARADOX</h3>
        </div>
      </footer>
    
    </div>
  );
};

export default Home;
