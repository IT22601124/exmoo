import React, { useState } from 'react';
import '../css/showcase.css';
import man1 from "../images/man1.png";
import man2 from "../images/man2.png";
import man3 from "../images/man3.png";


const Showcase = () => {
  const [visibleSection, setVisibleSection] = useState('web-design');

  const handleButtonClick = (section) => {
    setVisibleSection(section);
  };

  return (
    <div className="showcase-container">
      <div className="showcase-header">
        <h1>Showcase of Our Exceptional <span className='highlights-text'>PORTFOLIO</span></h1>
      </div>

      <div className='btn-aria'>
        <button className='btn' onClick={() => handleButtonClick('web-design')}>Web Design</button>
        <button className='btn' onClick={() => handleButtonClick('app-design')}>App Design</button>
        <button className='btn' onClick={() => handleButtonClick('ui-design')}>Ui Design</button>
        <button className='btn' onClick={() => handleButtonClick('e-commerce')}>E-Commerce</button>
      </div>
      <hr className='hr-line' />

      <div className='content'>
        <div className='showcase-content'>
          
            <div className='he1'>
              <h1>Featured</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetur</p>
            </div>
          
          {visibleSection === 'app-design' && (
            <div className='app-design'>
              <h1>App Design</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetur</p>
              <img src={man1} alt='app design' className='img1' />
            </div>
          )}
          {visibleSection === 'web-design' && (
            <div className='web-design'>
              <h1>Web Design</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetur</p>
              <img src={man2} alt='app design' className='img1' />
            </div>
          )}
          {visibleSection === 'ui-design' && (
            <div className='ui-design'>
              <h1>Ui Design</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetur</p>
              <img src={man3} alt='app design' className='img1' />
            </div>
          )}
          {visibleSection === 'e-commerce' && (
            <div className='e-commerce'>
              <h1>E-Commerce</h1>
              <p>Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetur</p>
              <img src={man2} alt='app design' className='img1' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
