import React from 'react';
import { Link } from 'react-router-dom';
import imgHeader from '../assets/images/platziconf-logo.svg';
import Badge from '../components/Badge';
import Modal from '../components/Modal';

const BadgeDetail = (props) => {
  const { firstName, lastName, jobTitle, twitter, email, id, onOpenModal, modalIsOpen } = props;
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
                <button
                  onClick={onOpenModal}
                  className="btn-action btn btn-danger">
                  Remove
                </button>
                <Modal
                  isOpen={modalIsOpen}
                  onClose={props.onCloseModal}>
                  <h1>Children</h1>
                </Modal>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BadgeDetail;
