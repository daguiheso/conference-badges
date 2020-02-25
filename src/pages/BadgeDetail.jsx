import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import imgHeader from '../assets/images/platziconf-logo.svg';
import Badge from '../components/Badge';

const BadgeDetail = (props) => {
  const { firstName, lastName, jobTitle, twitter, email, id } = props;
  return (
    <>
      <div className="badges__hero  badges__hero--big">
        <div className="container d-flex d-flex align-items-center justify-content-center">
          <div className="col-6 text-right">
            <img src={imgHeader} alt="hero" className="img-fluid" />
          </div>
          <div className="col-6 text-left">
            <h1 className="title">{firstName} {lastName}</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <Badge
              name={firstName || 'Name'}
              lastName={lastName || 'LastName'}
              jobTitle={jobTitle || 'JobTitle'}
              twitter={twitter || 'twitter'}
              email={email || 'Email'}
            />
          </div>
          <div className="col-6">
            <h2 className="mb-3">Actions:</h2>
            <ul>
              <li className="mb-3">
                <Link
                  className="btn-action btn btn-primary"
                  to={`/badges/${id}/edit`}>
                  Edit
                </Link>
              </li>
              <li>
                <button className="btn-action btn btn-danger">
                  Remove
                </button>
                { ReactDOM.createPortal(
                  <h1>Hola portal</h1>,
                  document.getElementById('modal'))
                }
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BadgeDetail;
