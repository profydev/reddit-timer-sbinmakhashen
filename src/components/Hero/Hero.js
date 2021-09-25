import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SubContext from '../../Context/SubContext';
import HeroBtn from './HeroBtn';
import HeroImg from './HeroImage';
import '@fontsource/bitter';
import '@fontsource/montserrat';

const Hero = () => {
  const { subreddit } = useContext(SubContext);

  return (
    <section id="hero">
      <div className="hero-heading">
        <h1 className="title">No reactions to your reddit posts?</h1>
        <p className="subtitle">
          Great timing, great results! Find the best time to post on your
          subreddit.
        </p>
      </div>
      <div className="hero-content">
        <Link to={`/search/${subreddit}`}>
          <HeroBtn />
        </Link>
        <p className="r-subreddit">r/javascript</p>
        <Link to={`/search/${subreddit}`}>
          <HeroImg />
        </Link>
      </div>
    </section>
  );
};
export default Hero;
