import React, { useState } from 'react'
import '../css/Transforming.css'
import man1 from "../images/man1.png";
import man2 from "../images/man2.png";
import man3 from "../images/man3.png";

const Transforming = () => {
    const [visibleSection, setVisibleSection] = useState('Need');
    const [activeSpan, setActiveSpan] = useState(null);

    const handleSpanClick = (section, index) => {
        setVisibleSection(section);
        setActiveSpan(index);
    };


  return (
    <div className='Transforming-container'>
        <div className='Transforming-header'>
            <h1>Transforming Ideas into Digital Excellence <span className='highlights-text'>OUR PROVEN PROCESS</span></h1>

        </div>
        
        <div className='Transforming-content'>
            <div className='left'>
                {visibleSection === 'Need' && (<img src={man2} alt='app design' className='img1' />)}
                {visibleSection === 'Meaning' && (<img src={man1} alt='app design' className='img1' />)}
                {visibleSection === 'Technology' && (<img src={man3} alt='app design' className='img1' />)}
                {visibleSection === 'Experience' && (<img src={man1} alt='app design' className='img1' />)}
                {visibleSection === 'Engagement' && (<img src={man2} alt='app design' className='img1' />)}

            </div>
            <div className='Right'>
                <div>
                    <span
                        className={activeSpan === 0 ? 'active' : ''}
                        onClick={() => handleSpanClick('Need', 0)}
                    >
                        Need
                    </span>
                    {visibleSection === 'Need' && (
                        <p>Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetu</p>
                    )}
                </div>  
                <div>
                    <span
                        className={activeSpan === 1 ? 'active' : ''}
                        onClick={() => handleSpanClick('Meaning', 1)}
                    >
                        Meaning
                    </span>
                    {visibleSection === 'Meaning' && (
                        <p>Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetu</p>
                    )}
                </div>
                <div>
                    <span
                        className={activeSpan === 2 ? 'active' : ''}
                        onClick={() => handleSpanClick('Technology', 2)}
                    >
                        Technology
                    </span>
                    {visibleSection === 'Technology' && (
                        <p>Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetu</p>
                    )}
                </div>
                <div>
                    <span
                        className={activeSpan === 3 ? 'active' : ''}
                        onClick={() => handleSpanClick('Experience', 3)}
                    >
                        Experience
                    </span>
                    {visibleSection === 'Experience' && (
                        <p>Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetu</p>
                    )}
                </div>
                <div>
                    <span
                        className={activeSpan === 4 ? 'active' : ''}
                        onClick={() => handleSpanClick('Engagement', 4)}
                    >
                        Engagement
                    </span>
                    {visibleSection === 'Engagement' && (
                        <p>Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque ut nisl nibh a. Lorem ipsum dolor sit amet consectetur. Lectus mattis dignissim elit quis scelerisque. Lorem ipsum dolor sit amet consectetu</p>
                    )}
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Transforming
