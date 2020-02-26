import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import Modal from '../components/Modal';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import api from '../api';

import '../assets/styles/components/Badges.css';
import confLogo from '../assets/images/badge-header.svg';

const Badges = () => {
  const [badges, setBadges] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(null);
  const [currentIdBadge, setCurrentIdBadge] = useState(null);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 5000);
    return () => {
      clearInterval(intervalId);
    };
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

  const handleToggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const setIdBadget = (id) => {
    setCurrentIdBadge(id);
    handleToggleModal();
  };

  const handleDeleteBadge = async (idBadge) => {
    handleToggleModal();
    setIsLoadingDelete(true);
    setError(null);
    try {
      await api.badges.remove(idBadge);
      setIsLoadingDelete(false);
      fetchData();
    } catch (error) {
      setIsLoadingDelete(false);
      setError(error);
    }
  }

  if ((isLoading && !badges) || isLoadingDelete) return <PageLoading />
  if (error) return <PageError error={error} />
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
          <BadgesList
            badges={badges}
            onToggleModal={setIdBadget}
          /> :
          <h1 className="text-center">
            No hay badges disponibles
          </h1>
        }
        { isLoading && <MiniLoader /> }
      </div>

      <Modal
        isOpen={modalIsOpen}
        onClose={handleToggleModal}>
        <DeleteBadgeModal
          onClose={handleToggleModal}
          onDeleteBadge={() => handleDeleteBadge(currentIdBadge)}
        />
      </Modal>
    </>
  );
};

export default Badges;

