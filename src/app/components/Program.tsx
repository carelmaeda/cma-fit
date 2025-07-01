'use client';

import { Clock } from 'lucide-react';

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
  return (
    <section className="program-section">
      <h2>Program Breakdown</h2>

      <div className="swiper-wrapper-fixed">
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
                  <h3>{phase.step}</h3>
                  <span className="badge badge-secondary">
                    <Clock size={16} /> {phase.duration}
                  </span>
                </div>
                <div className="program-title">
                  <h3>{phase.title}</h3>
                </div>
                <div className="program-outcome">
                  <p>{phase.outcomes}</p>
                </div>

                <div className="program-description">
                  <p>{phase.description}</p>
                </div>

                <div className="program-list">
                  <h4>Goals</h4>
                  <ul className="badge-list">
                    {phase.goals.map((goal, i) => (
                      <li key={i} className="badge badge-secondary">
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="program-list">
                  <h4>Key Focus</h4>
                  <ul className="badge-list">
                    {phase.focus.map((item, i) => (
                      <li key={i} className="badge badge-secondary">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Program;
