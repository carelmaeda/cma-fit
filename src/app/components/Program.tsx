"use client";

import { Clock } from "lucide-react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

interface ProgramPhase {
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
    title: "1 - Foundation",
    image: "/images/justin/jl-img7.webp",
    duration: "4 Weeks",
    description:
      "We will build a solid foundation through proper form, better mobility, and basic strength and cardio development.",
    goals: ["Consistency", "Mobility", "Proper Form", "Bbody Awareness"],
    focus: [
      "Fundamental movements",
      "Core activation",
      "Technique",
      "Mind-muscle connection",
    ],
    outcomes: "Solid base and confidence in key movements.",
  },
  {
    title: "2 - Adaptation",
    image: "/images/justin/jl-img12.webp",
    duration: "4 Weeks",
    description:
      "Time to challenge your body with increased intensity. You’ll introduce more advanced movements and weight training.",
    goals: ["Stamina", "Strength", "Routine", "Endurance"],
    focus: [
      "Progression",
      "Volume training",
      "Body awareness",
      "Compound lifts",
    ],
    outcomes: "Start seeing visible improvements in endurance and strength.",
  },
  {
    title: "3 - Break Through",
    image: "/images/justin/jl-img3.webp",
    duration: "4 Weeks",
    description:
      "Push past limits with demanding workouts, refining technique, and aiming for specific performance goals.",
    goals: [
      "Break plateaus",
      "Elevate performance",
      "Boost metabolism",
      "Improve anaerobic capacity",
    ],
    focus: [
      "Intensity training",
      "Interval work",
      "Power output",
      "Advanced techniques",
    ],
    outcomes: "Major breakthroughs in performance and resilience.",
  },
  {
    title: "4 - Peak",
    image: "/images/justin/jl-img5.webp",
    duration: "Ongoing",
    description:
      "Fine-tune your training to reach peak physical condition, focusing on precision, intensity, and sustainability.",
    goals: [
      "Maximize output",
      "Sharpen physique",
      "Achieve peak form",
      "Maintain high performance",
    ],
    focus: [
      "High-intensity",
      "Sport-specific drills",
      "Recovery management",
      "Periodization",
    ],
    outcomes: "Achieve and maintain your personal best.",
  },
];

export default function Program() {
  return (
    <section className="program-section">
      <h2>The Game Plan</h2>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={16}
        freeMode={true}
        modules={[FreeMode]}
        className="swiper"
      >
        {programData.map((phase, index) => (
          <SwiperSlide key={index} className="program-slide">
            <div className="program-title">
              <h3>{phase.title}</h3>
              <span className="badge">
                <Clock size={16} /> {phase.duration}
              </span>
            </div>

            <h4>{phase.outcomes}</h4>

            <p>{phase.description}</p>

            <div>
              <h5>Goals</h5>
              <ul className="specialties">
                {phase.goals.map((goal, i) => (
                  <li key={i} className="badge badge-secondary">
                    {goal}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5>Key Focus</h5>
              <ul className="specialties">
                {phase.focus.map((item, i) => (
                  <li key={i} className="badge badge-secondary">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
