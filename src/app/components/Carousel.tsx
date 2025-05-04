import React from 'react';

const Carousel: React.FC = () => {
  const words = ["Bodybuilding", "Coaching", "Personal Trainer", "Fitness Plan", "Workout Routine", "Nutrition"];

  return (
    <section className="carousel-wrapper">
          {words.map((word, index) => (
            <div key={index} >
              {word}
            </div>
          ))}
    </section>
  );
};

export default Carousel;
