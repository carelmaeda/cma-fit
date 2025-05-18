import React from 'react';
import Image from 'next/image';
import { Clock } from 'lucide-react';


const programData = [
  {
    step: '1',
    title: 'Foundation',
    image: '/images/jl-img1.webp',
    duration: '4 Weeks',
    description: 'Begin your journey by building a strong and stable base. This phase focuses on mastering proper form, improving mobility, and developing basic strength and cardiovascular endurance. Establishing these fundamentals is key to preventing injury and setting the stage for long-term success.',
    goals: ['Build consistency', 'Improve mobility', 'Learn proper form'],
    focus: ['Fundamental movements', 'Core activation', 'Technique'],
    outcomes: 'By the end of this phase, you will have built a solid base and confidence in key movements.',
  },
  {
    step: '2',
    title: 'Adaptation',
    image: '/images/jl-img2.webp',
    duration: '4 Weeks',
    description: 'With a solid foundation in place, it’s time to challenge your body with increased intensity. In this phase, you’ll introduce more advanced movements, incorporate weight training, and gradually push your strength and stamina. Your body will start adapting to new levels of stress, paving the way for noticeable improvements in overall fitness.',
    goals: ['Increase stamina', 'Enhance strength', 'Adapt to routine'],
    focus: ['Progressive overload', 'Volume training', 'Body awareness'],
    outcomes: 'You will begin to feel stronger and more energetic, with visible improvements in endurance.',
  },
  {
    step: '3',
    title: 'Break Through',
    image: '/images/jl-img3.webp',
    duration: '4 Weeks',
    description: 'Now that your body is conditioned, it’s time to break through plateaus and elevate your performance. This phase is about pushing past limits with more demanding workouts, refining your technique, and aiming for specific performance goals. Expect to build resilience, strength, and a deeper sense of confidence.',
    goals: ['Break plateaus', 'Elevate performance', 'Boost metabolism'],
    focus: ['Intensity training', 'Interval work', 'Power output'],
    outcomes: 'You will experience major breakthroughs in performance and mental resilience.',
  },
  {
    step: '4',
    title: 'Peak Performance',
    image: '/images/jl-img4.webp',
    duration: 'Ongoing',
    description: 'The final phase is where everything comes together. You’ll fine-tune your training to reach peak physical condition, focusing on precision, intensity, and sustainability. Whether you’re striving for elite performance or long-term fitness, this phase helps you maintain and maximize your results.',
    goals: ['Maximize output', 'Sharpen physique', 'Achieve peak form'],
    focus: ['High-intensity', 'Sport-specific drills', 'Recovery management'],
    outcomes: 'You will reach your personal best in strength, endurance, and overall fitness.',
  },
];


const Program: React.FC = () => {
  return (
<section className='program-section'>
  <h2>Program Breakdown</h2>
  <div className="program-grid">
    {programData.map((phase, index) => (
      <div className="card-wrapper" key={index}>
        <div className="card-img">
        <Image width={600} height={600} src={phase.image} alt={phase.title} />
        <h3>{phase.step}</h3>
        </div>
        <div className="card-body">

        <div className='card-title'>
          <h3>{phase.title}</h3>    
          <p className='badge badge-primary'><Clock />{phase.duration}</p>
        </div>
        
        <p>{phase.description}</p>

        <div>
        <h4>Goals:</h4>
          <ul className='d-flex flex-wrap gap-1'>
            {phase.goals.map((goal, i) => (
              <li key={i} className='badge badge-primary'>{goal}</li>
            ))}
          </ul>
        </div>

        <div>
        <h4>Key Focus:</h4>
          <ul className='d-flex flex-wrap gap-1'>
            {phase.focus.map((item, i) => (
              <li key={i} className='badge badge-primary'>{item}</li>
            ))}
          </ul>
        </div>

        <div>
        <h4>Outcomes:</h4>
        <p>{phase.outcomes}</p>
        </div>


        </div>
      </div>
    ))}
  </div>
</section>

  );
};

export default Program;
