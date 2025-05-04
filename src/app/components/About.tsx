import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Meet Your Trainer</h2>
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 text-center">
            <Image
              src="/images/trainer.jpg"
              alt="Your Trainer"
              width={400}
              height={400}
              className="rounded-circle object-fit-cover"
            />
          </div>
          <div className="col-md-6">
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
      </div>
    </section>
  );
};

export default About;
