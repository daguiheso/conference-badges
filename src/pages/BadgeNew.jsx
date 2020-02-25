import React, { useState } from 'react';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import imgHeader from '../assets/images/platziconf-logo.svg';
import api from '../api';

const BadgeNew = (props) => {
  const [form, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: '',
    avatarUrl: 'https://gravatar.com/avatar?d=identicon'
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await api.badges.create(form);
      setIsLoading(false);
      props.history.push('/badges');
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  if (isLoading) return <PageLoading />
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
              jobTitle={form.jobTitle || 'JobTitle'}
              twitter={form.twitter || 'twitter'}
              email={form.email || 'Email'}
            />
          </div>
          <div className="col-6">
            <BadgeForm
              onSubmit={handleSubmit}
              onChange={handleChange}
              error={error}
              {...form}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BadgeNew;
