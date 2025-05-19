'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Clock } from 'lucide-react';

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
    image: '/images/jl-img1.webp',
    duration: '4 Weeks',
    description:
      'Begin your journey by building a strong and stable base. This phase focuses on mastering proper form, improving mobility, and developing basic strength and cardiovascular endurance.',
    goals: ['Build consistency', 'Improve mobility', 'Learn proper form'],
    focus: ['Fundamental movements', 'Core activation', 'Technique'],
    outcomes: 'You will have built a solid base and confidence in key movements.',
  },
  {
    step: '2',
    title: 'Adaptation',
    image: '/images/jl-img2.webp',
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
    image: '/images/jl-img3.webp',
    duration: '4 Weeks',
    description:
      'This phase is about pushing past limits with demanding workouts, refining technique, and aiming for specific performance goals.',
    goals: ['Break plateaus', 'Elevate performance', 'Boost metabolism'],
    focus: ['Intensity training', 'Interval work', 'Power output'],
    outcomes: 'Major breakthroughs in performance and resilience.',
  },
  {
    step: '4',
    title: 'Peak Performance',
    image: '/images/jl-img4.webp',
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

  return (
    <section className="program-section">
      <h2>Program Breakdown</h2>

      <div className="nav-wrapper">
        {programData.map((phase, index) => (
          <button
            key={index}
            className={`nav-tab ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {phase.title}
          </button>
        ))}
      </div>

      <div className="program-content">
        {programData.map((phase, index) =>
          index === activeIndex ? (
            <div className="card-wrapper" key={index}>
              <div className="card-img">
                <Image
                  width={600}
                  height={600}
                  src={phase.image}
                  alt={phase.title}
                />
                <h3>{phase.step}</h3>
              </div>

              <div className="card-body">
                <div className="card-title">
                  <h3>{phase.title}</h3>
                  <p className="badge badge-primary">
                    <Clock size={16} /> {phase.duration}
                  </p>
                </div>

                <p>{phase.description}</p>

                <div>
                  <h4>Goals:</h4>
                  <ul className="badge-list">
                    {phase.goals.map((goal, i) => (
                      <li key={i} className="badge badge-primary">
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4>Key Focus:</h4>
                  <ul className="badge-list">
                    {phase.focus.map((item, i) => (
                      <li key={i} className="badge badge-primary">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4>Outcomes:</h4>
                  <p>{phase.outcomes}</p>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
};

export default Program;
