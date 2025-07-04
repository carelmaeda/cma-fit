import React from 'react';
import Image from 'next/image';

export default function About () {
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
            <p>I'm a personal trainer and online fitness coach with over a decade of hands-on experience in athletics, performance training, and injury prevention. <br /> My journey started on the football field, where I played for 12 years and earned a scholarship to compete at the collegiate level. During that time, I had the opportunity to intern under elite strength and conditioning coaches, shaping the foundation of my approach to training.
            <br /> I’ve coached professional athletes through combine prep, guided youth athletes toward earning scholarships, and helped countless clients reach their next level—whether it’s stepping onto the field, hitting a personal best, or simply moving pain-free.
            <br /> After herniating three discs in my lower back, I dove deep into rehabilitation and injury prevention. That experience redefined my philosophy around training—now, I focus not just on performance, but longevity, function, and resilience.
            <br /> Outside the gym, I’ve spent the past eight years working as an international model between Toronto and New York, while also pushing my limits through half marathons, full marathons, ultramarathon-distance trail races, and HYROX competitions. I bring a unique blend of strength, endurance, and aesthetics to every client I coach—whether you're an athlete, weekend warrior, or just getting started.
            </p>
          </div>
        </div>
    </section>
  );
};

