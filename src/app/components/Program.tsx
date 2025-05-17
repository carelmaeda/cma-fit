import React from 'react';
import Image from 'next/image';

const programData = [
  {
    title: 'Phase 1: Foundation',
    image: '/images/foundation.jpg',
    duration: 'Duration: 4 Weeks',
    goals: ['Build consistency', 'Improve mobility', 'Learn proper form'],
    focus: ['Fundamental movements', 'Core activation', 'Technique'],
    outcomes: 'By the end of this phase, you will have built a solid base and confidence in key movements.',
  },
  {
    title: 'Phase 2: Adaptation',
    image: '/images/adaptation.jpg',
    duration: 'Duration: 4 Weeks',
    goals: ['Increase stamina', 'Enhance strength', 'Adapt to routine'],
    focus: ['Progressive overload', 'Volume training', 'Body awareness'],
    outcomes: 'You will begin to feel stronger and more energetic, with visible improvements in endurance.',
  },
  {
    title: 'Phase 3: Break Through',
    image: '/images/breakthrough.jpg',
    duration: 'Duration: 6 Weeks',
    goals: ['Break plateaus', 'Elevate performance', 'Boost metabolism'],
    focus: ['Intensity training', 'Interval work', 'Power output'],
    outcomes: 'You will experience major breakthroughs in performance and mental resilience.',
  },
  {
    title: 'Phase 4: Peak Performance',
    image: '/images/peak.jpg',
    duration: 'Duration: 4 Weeks',
    goals: ['Maximize output', 'Sharpen physique', 'Achieve peak form'],
    focus: ['High-intensity', 'Sport-specific drills', 'Recovery management'],
    outcomes: 'You will reach your personal best in strength, endurance, and overall fitness.',
  },
];

const Program: React.FC = () => {
  return (
    <section className="program-section container-fluid">
      <h2 className="text-center">Program Breakdown</h2>
      <div className="row">
        {programData.map((phase, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card h-100 program-card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{phase.title}</h5>
                <p className="text-muted">{phase.duration}</p>

                <strong>Goals:</strong>
                <ul>
                  {phase.goals.map((goal, i) => (
                    <li key={i}>{goal}</li>
                  ))}
                </ul>

                <strong>Key Focus:</strong>
                <ul>
                  {phase.focus.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <strong>Outcomes:</strong>
                <p className="mb-0">{phase.outcomes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
