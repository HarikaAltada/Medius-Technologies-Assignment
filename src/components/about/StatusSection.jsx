import React from "react";
import "./StatusSection.css"; // Import custom CSS

const StatusSection = () => {
  return (
    <div className="status-section">
      {/* Left Content */}
      <div className="text-content">
        <h2>The status quo is broken</h2>
        <p>
          The traditional processes around homeownership are opaque and stressful. 
          Fees aren’t transparent and some are simply outrageous in size. Traditional 
          mortgage lending is rife with unnecessary fees and slow, painful processes. 
          It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, 
          set out to change that.
        </p>
        <button className="read-story-btn">Read Vishal’s story</button>
      </div>

      {/* Right Video Section */}
      <div className="video-section">
        <img src="./assets/vishal-mission.jpg" alt="Vishal Garg" className="video-thumbnail" />
        <div className="play-button">&#9654;</div>
      </div>
    </div>
  );
};

export default StatusSection;
