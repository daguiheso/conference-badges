import React from 'react';

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import imgHeader from '../assets/images/badge-header.svg';

const BadgeNew = () => {
  return (
    <>
      <Navbar />
      <div className="badges__hero">
        <img src={imgHeader} alt="hero" className="img-fluid" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              name="Daniel"
              lastName="Hernández"
              avatar="https://gravatar.com/avatar?d=identicon"
              jobTitle="Developer Frontend"
              twitter="daguiheso"
            />
          </div>
          <div className="col-6">
            <BadgeForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default BadgeNew;
