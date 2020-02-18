import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import imgHeader from '../assets/images/badge-header.svg';

const BadgeNew = () => {
  const [form, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
    avatar: 'https://gravatar.com/avatar?d=identicon'
  });

  const handleChange = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

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
              name={form.firstName}
              lastName={form.lastName}
              avatar={form.avatar}
              jobTitle={form.jobTitle}
              twitter={form.twitter}
            />
          </div>
          <div className="col-6">
            <BadgeForm
              onSubmit={handleSubmit}
              onChange={handleChange}
              {...form}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BadgeNew;
