'use client';

import React, { useState } from 'react';
import { Clock, MoveLeft, MoveRight } from 'lucide-react';

interface ProgramPhase {
  step: string;
  title: string;
  image: string;
  duration: string;
  description: string;
  goals: string[];
  focus: string[];
  outcomes: string;
}

const programData: ProgramPhase[] = [
  {
    step: '1',
    title: 'Foundation',
    image: '/images/justin/jl-img1.webp',
    duration: '4 Weeks',
    description:
      'Start by building a solid foundation through proper form, better mobility, and basic strength and cardio development.',
    goals: ['Build consistency', 'Improve mobility', 'Learn proper form'],
    focus: ['Fundamental movements', 'Core activation', 'Technique'],
    outcomes: 'You will have built a solid base and confidence in key movements.',
  },
  {
    step: '2',
    title: 'Adaptation',
    image: '/images/justin/jl-img2.webp',
    duration: '4 Weeks',
    description:
      'With a solid foundation in place, it’s time to challenge your body with increased intensity. You’ll introduce more advanced movements and weight training.',
    goals: ['Increase stamina', 'Enhance strength', 'Adapt to routine'],
    focus: ['Progressive overload', 'Volume training', 'Body awareness'],
    outcomes: 'Visible improvements in endurance and strength.',
  },
  {
    step: '3',
    title: 'Break Through',
    image: '/images/justin/jl-img3.webp',
    duration: '4 Weeks',
    description:
      'This phase is about pushing past limits with demanding workouts, refining technique, and aiming for specific performance goals.',
    goals: ['Break plateaus', 'Elevate performance', 'Boost metabolism'],
    focus: ['Intensity training', 'Interval work', 'Power output'],
    outcomes: 'Major breakthroughs in performance and resilience.',
  },
  {
    step: '4',
    title: 'Peak',
    image: '/images/justin/jl-img4.webp',
    duration: 'Ongoing',
    description:
      'You’ll fine-tune your training to reach peak physical condition, focusing on precision, intensity, and sustainability.',
    goals: ['Maximize output', 'Sharpen physique', 'Achieve peak form'],
    focus: ['High-intensity', 'Sport-specific drills', 'Recovery management'],
    outcomes: 'Achieve your personal best in fitness.',
  },
];

const Program: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? programData.length - 1 : prev - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === programData.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className='program-section'>
      <h2>Program Breakdown</h2>

      <div className="program-card">
        <div className="card-img" style={{ backgroundImage: `url(${programData[activeIndex].image})` }}>
          <div className='card-img-top'>
            <h3>{programData[activeIndex].step}</h3>
            <span className="badge badge-secondary">
                <Clock size={16} /> {programData[activeIndex].duration}
            </span>
          </div>

          <div className="program-nav">
            {programData.map((phase, index) => {
              const isCompleted = index < activeIndex;
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  className={`nav-tab ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {phase.title}
                </button>
              );
            })}
          </div>
        </div>

        <div className="card-body">

          {/* <div className="card-title">
            <h3>{programData[activeIndex].title}</h3>
            <p className="badge badge-primary">
              <Clock size={16} /> {programData[activeIndex].duration}
            </p>
          </div> */}

          <p>{programData[activeIndex].description}</p>

          <div>
            <h4>Goals</h4>
            <ul className="badge-list">
              {programData[activeIndex].goals.map((goal, i) => (
                <li key={i} className="badge badge-primary">
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Key Focus</h4>
            <ul className="badge-list">
              {programData[activeIndex].focus.map((item, i) => (
                <li key={i} className="badge badge-primary">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Outcomes</h4>
            <p>{programData[activeIndex].outcomes}</p>
          </div>
        </div>
      </div>
      <div className='btn-row'>
            <button className="btn btn-icon-primary" onClick={handlePrev}>
              <MoveLeft />
            </button>

            <button className="btn btn-icon-primary" onClick={handleNext}>
              <MoveRight />
            </button>
        </div>

    </section>
  );
};

export default Program;
