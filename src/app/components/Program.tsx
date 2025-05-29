﻿'use client';

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
    image: '/images/justin/jl-img7.webp',
    duration: '4 Weeks',
    description:
      'Build a solid foundation through proper form, better mobility, and basic strength and cardio development.',
    goals: ['Build consistency', 'Improve mobility', 'Learn proper form'],
    focus: ['Fundamental movements', 'Core activation', 'Technique'],
    outcomes: 'You will have built a solid base and confidence in key movements.',
  },
  {
    step: '2',
    title: 'Adaptation',
    image: '/images/justin/jl-img12.webp',
    duration: '4 Weeks',
    description:
      'Time to challenge your body with increased intensity. You’ll introduce more advanced movements and weight training.',
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
      'Push past limits with demanding workouts, refining technique, and aiming for specific performance goals.',
    goals: ['Break plateaus', 'Elevate performance', 'Boost metabolism'],
    focus: ['Intensity training', 'Interval work', 'Power output'],
    outcomes: 'Major breakthroughs in performance and resilience.',
  },
  {
    step: '4',
    title: 'Peak',
    image: '/images/justin/jl-img5.webp',
    duration: 'Ongoing',
    description:
      'Fine-tune your training to reach peak physical condition, focusing on precision, intensity, and sustainability.',
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

      <div className="program-card"  >

          {/* 1. Step number and duration */}
          <div className="card-row-top" style={{ backgroundImage: `url(${programData[activeIndex].image})` }}>
            <h3>{programData[activeIndex].step}</h3>
            <span className="badge badge-secondary">
                <Clock size={16} /> {programData[activeIndex].duration}
            </span>
          </div>

          {/* 2. Outcome (Moved Up) */}
          <div className="program-outcome">
            <p>{programData[activeIndex].outcomes}</p>
          </div>

          {/* 3. Description */}
          <div className="program-description">
            <p>{programData[activeIndex].description}</p>
          </div>

          {/* 4. Navigation Tabs */}
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

          {/* 5. Goals */}
          <div className="program-list">
            <h4>Goals</h4>
            <ul className="badge-list">
              {programData[activeIndex].goals.map((goal, i) => (
                <li key={i} className="badge badge-secondary">
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          {/* 6. Key Focus */}
          <div className="program-list">
            <h4>Key Focus</h4>
            <ul className="badge-list">
              {programData[activeIndex].focus.map((item, i) => (
                <li key={i} className="badge badge-secondary">
                  {item}
                </li>
              ))}
            </ul>
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
