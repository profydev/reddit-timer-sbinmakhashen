import React from 'react';
import HeroBtn from './HeroBtn';
import HeroImg from './HeroImage';

const Hero = () => (
  <section className="hero">
    <div className="hero-heading">
      <h1 className="title">No reactions to your reddit posts?</h1>
      <p className="subtitle">
        Great timing, great results! Find the best time to post on your
        subreddit.
      </p>
    </div>
    <div className="hero-content">
      <HeroBtn />
      <p>r/javascript</p>
      <HeroImg />
    </div>
  </section>
);

export default Hero;
