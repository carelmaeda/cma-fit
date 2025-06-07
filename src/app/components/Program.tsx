'use client';

import React, { useState } from 'react';
import { Clock, MoveLeft, MoveRight } from 'lucide-react';
import { motion, PanInfo } from 'framer-motion';

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
    outcomes: 'Solid base and confidence in key movements.',
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
    outcomes: 'Achieve your personal best.',
  },
];

const Program: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Handle swipe drag end
  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -50) {
      // Swiped left — next
      setActiveIndex((prev) => (prev === programData.length - 1 ? 0 : prev + 1));
    } else if (info.offset.x > 50) {
      // Swiped right — prev
      setActiveIndex((prev) => (prev === 0 ? programData.length - 1 : prev - 1));
    }
  };

  // Progress bar width percentage
  const progressPercent = ((activeIndex + 1) / programData.length) * 100;

  return (
    <section className="program-section">
      <h2>Program Breakdown</h2>

      {/* Progress Bar */}
      <div className="progress-bar-container" aria-label="Program progress">
        <div
          className="progress-bar-fill"
          style={{ width: `${progressPercent}%` }}
          aria-valuenow={activeIndex + 1}
          aria-valuemin={1}
          aria-valuemax={programData.length}
          role="progressbar"
        />
      </div>

      <motion.div
        className="program-card"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        key={programData[activeIndex].step} // helps with smooth animation when index changes
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.4 }}
      >
        {/* 1. Step number and duration */}
        <div
          className="card-row-top"
          style={{ backgroundImage: `url(${programData[activeIndex].image})` }}
        >
          <h3>{programData[activeIndex].step}</h3>
          <span className="badge badge-secondary">
            <Clock size={16} /> {programData[activeIndex].duration}
          </span>
        </div>

        <div>
          {/* 2. Outcome */}
          <div className="program-outcome">
            <p>{programData[activeIndex].outcomes}</p>
          </div>

          {/* 3. Description */}
          <div className="program-description">
            <p>{programData[activeIndex].description}</p>
          </div>
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
                aria-current={isActive ? 'step' : undefined}
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
      </motion.div>

      {/* Navigation Buttons */}
      <div className="btn-row">
        <button className="btn btn-icon-primary" onClick={() => setActiveIndex((prev) => (prev === 0 ? programData.length - 1 : prev - 1))} aria-label="Previous phase">
          <MoveLeft />
        </button>

        <button className="btn btn-icon-primary" onClick={() => setActiveIndex((prev) => (prev === programData.length - 1 ? 0 : prev + 1))} aria-label="Next phase">
          <MoveRight />
        </button>
      </div>
    </section>
  );
};

export default Program;
