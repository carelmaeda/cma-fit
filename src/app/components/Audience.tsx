"use client";

import { Quote } from 'lucide-react';
import React from 'react';


export default function Audience () {
  return (
    <section className="audience-section">
        <div className='quote1'><Quote /></div>
        <h3>This program is for anyone ready to take control of their fitness. <br/>I offer <span>tailored fitness classes</span> to suit every need, from total beginners to returning athletes.</h3>
        <div className='quote2'><Quote /></div>
    </section>
  );
};

