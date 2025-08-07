import React from "react";
import Image from "next/image";

const features = [
  {
    id: "workout-program",
    title: "Personalized Workout Program",
    icon: "/images/icons/icon-dumbell.png",
    alt: "Workout",
  },
  {
    id: "progress-tracking",
    title: "Progress Tracking via App",
    icon: "/images/icons/icon-dashboard.png",
    alt: "Tracking",
  },
  {
    id: "form-checkins",
    title: "Exercise Form Check-ins",
    icon: "/images/icons/icon-gym.png",
    alt: "Form Check",
  },
  {
    id: "accountability-checkins",
    title: "Weekly Accountability Check-ins",
    icon: "/images/icons/icon-watch.png",
    alt: "Check-in",
  },
  {
    id: "nutrition-guidance",
    title: "Food Tracking & Nutrition Guidance",
    icon: "/images/icons/icon-food.png",
    alt: "Nutrition",
  },
  {
    id: "supplement-guidance",
    title: "Supplement Guidance",
    icon: "/images/icons/icon-suplement.png",
    alt: "Supplements",
  },
];

export default function Features() {
  return (
    <section className="features-section">
      <h2>Complete 1-on-1 Coaching Experience</h2>
      <ul>
        {features.map((feature) => (
          <li key={feature.id}>
            <p>
              <Image
                src={feature.icon}
                alt={feature.alt}
                width={48}
                height={48}
              />
              {feature.title}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
