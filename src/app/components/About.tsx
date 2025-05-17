import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <section className="about-section container-fluid">
        <h2>Meet Your Trainer</h2>
        <div className="row">
          <div className="col-md-6">
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Justin Lyons Profile Pic"
              width={400}
              height={400}
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
    </section>
  );
};

export default About;
