'use client';

import { Clock, Plus, Minus } from 'lucide-react';
import React, { useState } from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

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
    goals: ['Build consistency', 'Improve mobility', 'Learn proper form', 'Increase body awareness'],
    focus: ['Fundamental movements', 'Core activation', 'Technique', 'Mind-muscle connection'],
    outcomes: 'Solid base and confidence in key movements.',
  },
  {
    step: '2',
    title: 'Adaptation',
    image: '/images/justin/jl-img12.webp',
    duration: '4 Weeks',
    description:
      'Time to challenge your body with increased intensity. You’ll introduce more advanced movements and weight training.',
    goals: ['Increase stamina', 'Enhance strength', 'Adapt to routine', 'Improve muscular endurance'],
    focus: ['Progressive overload', 'Volume training', 'Body awareness', 'Compound lifts'],
    outcomes: 'Visible improvements in endurance and strength.',
  },
  {
    step: '3',
    title: 'Break Through',
    image: '/images/justin/jl-img3.webp',
    duration: '4 Weeks',
    description:
      'Push past limits with demanding workouts, refining technique, and aiming for specific performance goals.',
    goals: ['Break plateaus', 'Elevate performance', 'Boost metabolism', 'Improve anaerobic capacity'],
    focus: ['Intensity training', 'Interval work', 'Power output', 'Advanced techniques'],
    outcomes: 'Major breakthroughs in performance and resilience.',
  },
  {
    step: '4',
    title: 'Peak',
    image: '/images/justin/jl-img5.webp',
    duration: 'Ongoing',
    description:
      'Fine-tune your training to reach peak physical condition, focusing on precision, intensity, and sustainability.',
    goals: ['Maximize output', 'Sharpen physique', 'Achieve peak form', 'Maintain high performance'],
    focus: ['High-intensity', 'Sport-specific drills', 'Recovery management', 'Periodization'],
    outcomes: 'Achieve your personal best.',
  },
];

export default function Program () {

  const [openStates, setOpenStates] = useState<boolean[]>(
    Array(programData.length).fill(false)
  );

  const toggleDropdown = (index: number) => {
    setOpenStates((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };


  return (
    <section className="program-section">
      <h2>Here&rsquo;s How It Works</h2>
        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {programData.map((phase, index) => (
            <SwiperSlide key={index}>
              <div className="program-card">
                <div
                  className="card-row-top"
                  style={{ backgroundImage: `url(${phase.image})` }}
                >
                  <h2>{phase.step}</h2>
                  <span className="badge badge-secondary">
                    <Clock size={16} /> {phase.duration}
                  </span>
                </div>

                <div className='program-content'>
                <div className="program-title">
                  <h3>{phase.title}</h3>
                </div>
                  <h4>{phase.outcomes}</h4>
                <div className="program-description">
                  <p>{phase.description}</p>
                </div>

                <div className="program-accordion">
                    <details>
                      <summary>
                        <h5>Goals</h5>
                        <span className="faq-toggle-icon">+</span>
                      </summary>
                        <ul className="specialties">
                          {phase.goals.map((goal, i) => (
                            <li key={i} className="badge badge-secondary">
                              {goal}
                            </li>
                          ))}
                        </ul>
                    </details>

                      <details>
                        <summary>
                          <h5>Key Focus</h5>
                          <span className="faq-toggle-icon">+</span>
                        </summary>
                        <div className="faq-answer">
                          <ul className="specialties">
                            {phase.focus.map((item, i) => (
                              <li key={i} className="badge badge-secondary">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </details>
                </div>

                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
};

