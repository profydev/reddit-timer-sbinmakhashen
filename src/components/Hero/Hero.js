import React from 'react';
import HeroBtn from './HeroBtn';
import HeroImg from './HeroImage';
import '@fontsource/bitter';
import '@fontsource/montserrat';

const Hero = () => (
  <section id="hero">
    <div className="hero-heading">
      <h1 className="title">No reactions to your reddit posts?</h1>
      <p className="subtitle">
        Great timing, great results! Find the best time to post on your
        subreddit.
      </p>
    </div>
    <div className="hero-content">
      <HeroBtn />
      <p className="r-subreddit">r/javascript</p>
      <HeroImg />
    </div>
  </section>
);

export default Hero;
