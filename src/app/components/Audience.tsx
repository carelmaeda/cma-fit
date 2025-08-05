"use client";

import { Quote } from 'lucide-react';
import React from 'react';


export default function Audience () {
  return (
    <section className="audience-section">
        <div className="quote1"><Quote /></div>
        <h3>I plan each <span className='text-highlight'>personalized fitness plan</span> just for you. So, if you&apos;re a total beginner or an athlete getting back at it, it&apos;ll fit your journey perfectly.</h3>
        <div className="quote2"><Quote /></div>
    </section>
  );
};

