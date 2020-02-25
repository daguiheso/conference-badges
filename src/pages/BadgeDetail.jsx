import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import imgHeader from '../assets/images/platziconf-logo.svg';
import api from '../api.js';
import Badge from '../components/Badge';
import PageLoaging from '../components/PageLoading';
import PageError from '../components/PageError';

function BadgeDetail(props) {
  const { badgeId } = props.match.params;

  const [badge, setBadge] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    getBadgeById();
  }, []);

  const getBadgeById = async () => {
    try {
      let result = await api.badges.read(badgeId);
      setBadge(result);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  if (isLoading) return <PageLoaging />
  if (error) return <PageError error="error" />
  return (
    <>
      <div className="badges__hero  badges__hero--big">
        <div className="container d-flex d-flex align-items-center justify-content-center">
          <div className="col-6 text-right">
            <img src={imgHeader} alt="hero" className="img-fluid" />
          </div>
          <div className="col-6 text-left">
            <h1 className="title">{badge.firstName} {badge.lastName}</h1>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <Badge
              name={badge.firstName || 'Name'}
              lastName={badge.lastName || 'LastName'}
              jobTitle={badge.jobTitle || 'JobTitle'}
              twitter={badge.twitter || 'twitter'}
              email={badge.email || 'Email'}
            />
          </div>
          <div className="col-6">
            <h2 className="mb-3">Actions:</h2>
            <ul>
              <li className="mb-3">
                <Link
                  className="btn-action btn btn-primary"
                  to={`/badges/${badgeId}/edit`}>
                  Edit
                </Link>
              </li>
              <li>
                <button className="btn-action btn btn-danger">
                  Remove
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default BadgeDetail;
