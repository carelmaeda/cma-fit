"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CirclePlus, CircleMinus } from "lucide-react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

// import required modules
import { Navigation } from "swiper/modules";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const about = [
    { image: "/images/justin/jl-img8.webp" },
    { image: "/images/justin/jl-img3.webp" },
    { image: "/images/justin/jl-img6.webp" },
    { image: "/images/justin/jl-img7.webp" },
    { image: "/images/justin/jl-img12.webp" },
    { image: "/images/justin/jl-img10.webp" },
    { image: "/images/justin/jl-img15.webp" },
    { image: "/images/justin/jl-img2.webp" },
  ];

  return (
    <section className="about-section">
      <div className="container">
        <Swiper
          slidesPerView={3.3}
          spaceBetween={8}
          navigation={true}
          modules={[Navigation]}
          className="swiper"
          centeredSlides={false}
          grabCursor={true}
        >
          {about.map((about, index) => (
            <SwiperSlide key={index} className="about-slide">
              <Image
                src={about.image}
                alt="Profile photo"
                width={224}
                height={400}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="about-content">
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              I&apos;m a personal trainer and online fitness coach with over a
              decade of hands-on experience in athletics, performance training,
              and injury prevention. My journey started on the football field,
              where I played for 12 years and earned a scholarship to compete at
              the collegiate level.
            </p>

            {isExpanded && (
              <div className="expanded-content">
                <p>
                  During that time, I had the opportunity to intern under elite
                  strength and conditioning coaches, shaping the foundation of
                  my approach to training. I&apos;ve coached professional
                  athletes through combine prep, guided youth athletes toward
                  earning scholarships, and helped countless clients reach their
                  next level—whether it&apos;s stepping onto the field, hitting
                  a personal best, or simply moving pain-free.
                </p>
                <p>
                  After herniating three discs in my lower back, I dove deep
                  into rehabilitation and injury prevention. That experience
                  redefined my philosophy around training—now, I focus not just
                  on performance, but longevity, function, and resilience.
                </p>
                <p>
                  Outside the gym, Ive spent the past eight years working as an
                  international model between Toronto and New York, while also
                  pushing my limits through half marathons, full marathons,
                  ultramarathon-distance trail races, and HYROX competitions. I
                  bring a unique blend of strength, endurance, and aesthetics to
                  every client I coach—whether you&apos;re an athlete, weekend
                  warrior, or just getting started.
                </p>
              </div>
            )}
            <button className="btn-toggle" onClick={toggleExpanded}>
              {isExpanded ? (
                <CircleMinus size={16} />
              ) : (
                <CirclePlus size={16} />
              )}{" "}
              Show {isExpanded ? "Less" : "More"}
            </button>
          </div>

          {/* Stats and Highlights Section */}
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">12+</div>
              <small>
                Years <br /> Experience
              </small>
            </div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <small>
                Clients <br /> Coached
              </small>
            </div>
            <div className="stat-item">
              <div className="stat-number">1M+</div>
              <small>Post Workout High-Fives</small>
            </div>
          </div>
          <div className="specialties d-none">
            <span>+ Performance Training</span>
            <span>+ Athletic Coaching</span>
            <span>+ Injury Prevention</span>
            <span>+ Strength & Conditioning</span>
            <span>+ Endurance Training</span>
            <span>+ Rehabilitation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
