"use client";

import { Quote } from 'lucide-react';
import React from 'react';


export default function Audience () {
  return (
    <section className="audience-section">
        <div className="quote1"><Quote /></div>
        <h2>I plan each <span className='text-highlight'>fitness plan</span> just for you. <br /> If you&apos;re a total beginner or an athlete getting back at it, it&apos;ll fit your journey perfectly.</h2>
        <div className="quote2"><Quote /></div>
    </section>
  );
};

