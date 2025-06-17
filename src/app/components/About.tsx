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
            <p>We need Justin's Bio here</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel venenatis mi. Mauris ultrices molestie nibh ac venenatis. Donec placerat semper urna. Donec gravida, massa ut rutrum ullamcorper, nulla enim volutpat felis.
            </p>
            <p>Sed dignissim tellus ligula, nec lacinia tortor efficitur id. Nam commodo tellus elementum magna posuere vehicula. Donec commodo faucibus pretium. Mauris volutpat urna vel risus mattis hendrerit</p>
          </div>
        </div>
    </section>
  );
};

export default About;
