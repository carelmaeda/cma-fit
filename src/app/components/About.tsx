import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="about-section">
        <h2>About Me</h2>
        <div className='about-card'>
            <Image
              src="/images/justin/jl-img8.webp"
              alt="Justin Lyons Profile Pic"
              width={400}
              height={400}
            />
          <div className="about-text">
            <p>
             Whether you are starting your fitness journey or aiming for the next
level, this training program is designed to help you reach your full
potential through a structured approach that builds progressively over
time. 
            </p>
            <p>I have created a four-phase system that will guide you every step
of the way, from establishing a solid foundation to achieving peak
performance.</p>
          </div>
        </div>
    </section>
  );
};

export default About;
