import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">3 Month Body Transformation</h1>
        <p className="hero-subtitle">Transform your fitness journey today</p>
        <div className="hero-buttons">
          <button className="btn btn-outline-light hero-button">Read More</button>
          <button className="btn btn-primary hero-button">Join Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
