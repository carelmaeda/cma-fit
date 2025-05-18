import React from 'react';

const Carousel: React.FC = () => {
  const words = ["Bodybuilding", "Coaching", "Community", "Personal Trainer", "Fitness Plan", "Workout Routine", "Nutrition", "Life Changing"];
  
  return (
    <div className="carousel-container surface-glass">
      <div className="carousel-wrapper">
        <div className="marquee">
          <div className="marquee-content">
            {[...Array(4)].map((_, i) => (
              <React.Fragment key={i}>
                {words.map((word, index) => (
                  <span key={`${word}-${i}-${index}`} className="marquee-word">
                    {word}
                  </span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;