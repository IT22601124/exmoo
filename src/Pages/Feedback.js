import React from 'react';
import '../css/Feedback.css'; // Import your custom CSS file
import man1 from "../images/man1.png"

const Feedback = () => {
  const feedbackData = [
    {
      id: 1,
      name: 'Amelia Clarke',
      position: 'CEO at Facebbok',
      rating: 4.8,
      feedback:
        'Lorem ipsum dolor sit amet consectetur. Aliquam in neque eleifend placerat scelerisque tincidunt erat porttitor.',
      image: man1, // Replace with actual image URLs
    }
  ];

  return (
    <div className="feedback-container">
      <h2 className="title">Feedback From Our <span className="highlight">VALUED CLIENTS</span></h2>
      <div className="map-and-feedback">
        {/* Map Section */}
        <div className="map">
          {/* Add map design using SVG, images, or CSS */}
          <div className="marker" style={{ top: '20%', left: '50%' }}>
            <img src={feedbackData[0].image} alt={feedbackData[0].name} />
          </div>
          <div className="marker" style={{ top: '50%', left: '70%' }}>
            <img src={feedbackData[0].image} alt={feedbackData[0].name} />
          </div>
        </div>

        {/* Feedback Section */}
        <div className="feedback">
          {feedbackData.map((feedback) => (
            <div key={feedback.id} className="feedback-card">
              <div className="rating">{feedback.rating}</div>
              <p className="feedback-text">{feedback.feedback}</p>
              <div className="client-info">
                <img src={feedback.image} alt={feedback.name} className="client-image" />
                <div>
                  <p className="client-name">{feedback.name}</p>
                  <p className="client-position">{feedback.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
