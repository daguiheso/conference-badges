import React, { useState } from "react";

import "../assets/styles/components/BadgeForm.css";

const BadgeForm = () => {
  const [form, setValues] = useState({
    firstName: 'Pepe',
    lastName: '',
    email: '',
    jobTitle: '',
    twitter: ''
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log( form );
  };

  return (
    <>
      <h1>New Attendant</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            onChange={handleInput}
            value={form.firstName}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            onChange={handleInput}
            value={form.lastName}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={handleInput}
            value={form.email}
          />
        </div>
        <div className="form-group">
          <label>Job Title</label>
          <input
            className="form-control"
            type="text"
            name="jobTitle"
            onChange={handleInput}
            value={form.jobTitle}
          />
        </div>
        <div className="form-group">
          <label>Twitter</label>
          <input
            className="form-control"
            type="text"
            name="twitter"
            onChange={handleInput}
            value={form.twitter}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </>
  );
};

export default BadgeForm;
