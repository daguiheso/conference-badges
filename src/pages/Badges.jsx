import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BadgesList from '../components/BadgesList';
import api from '../api';

import '../assets/styles/components/Badges.css';
import confLogo from '../assets/images/badge-header.svg';

const Badges = () => {
  const [badges, setBadges] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await api.badges.list();
      setBadges(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  const existBadges = () => badges.length > 0;

  if (isLoading) return 'Loading...'
  if (error) return `Error: ${error.message}`;
  return (
    <>
      <div className="badges">
        <div className="badges__hero">
          <div className="badges__container">
            <img
              className="badges__conf-logo"
              src={confLogo}
              alt="Conf Logo"
            />
          </div>
        </div>
      </div>

      <div className="badges__container">
        <div className="badges__buttons">
          <Link to="/badges/new" className="btn btn-primary">
            New Badge
          </Link>
        </div>
        { existBadges() ?
          <BadgesList badges={badges} /> :
          <h1 className="text-center">
            No hay badges disponibles
          </h1>
        }

      </div>
    </>
  );
};

export default Badges;