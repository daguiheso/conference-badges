import React from "react";

import "../assets/styles/components/BadgeForm.css";

const BadgeForm = (props) => {
  const { onChange, onSubmit, firstName, lastName, email, jobTitle, twitter, } = props;
  return (
    <>
      <h1>New Attendant</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            onChange={onChange}
            value={firstName}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            onChange={onChange}
            value={lastName}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            onChange={onChange}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Job Title</label>
          <input
            className="form-control"
            type="text"
            name="jobTitle"
            onChange={onChange}
            value={jobTitle}
          />
        </div>
        <div className="form-group">
          <label>Twitter</label>
          <input
            className="form-control"
            type="text"
            name="twitter"
            onChange={onChange}
            value={twitter}
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
