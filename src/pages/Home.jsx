import React from 'react';

import logo from '../assets/images/platziconf-logo.svg';
import astronaut from '../assets/images/astronauts.svg';
import '../assets/styles/components/Home.css';

const Home = () => {
  return (
    <section className="home d-flex align-items-center justify-content-center flex-wrap">
      <article className="home__info">
        <img className="mb-4" src={logo} alt="Logo" />
        <h1 className="mb-0">Print Your Badges</h1>
        <p className="mb-4">The easiest way to manage your conference</p>
        <a href="/" className="btn btn-primary">
          Start Now
        </a>
      </article>
      <img className="home__img" src={astronaut} alt="NotFound" />
    </section>
  );
}

export default Home;
