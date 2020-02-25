import React, { useState } from 'react';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import imgHeader from '../assets/images/platziconf-logo.svg';

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
      <div className="badges__hero d-flex align-items-center justify-content-center">
        <img src={imgHeader} alt="hero" className="img-fluid" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              name={form.firstName || 'Name'}
              lastName={form.lastName || 'LastName'}
              avatar={form.avatar}
              jobTitle={form.jobTitle || 'JobTitle'}
              twitter={form.twitter || 'twitter'}
              email={form.email || 'Email'}
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
