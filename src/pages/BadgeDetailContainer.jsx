import React, { useState, useEffect } from 'react';
import api from '../api.js';
import PageLoaging from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeDetail from './BadgeDetail';

const BadgeDetailContainer = (props) => {
  const { badgeId } = props.match.params;

  const [badge, setBadge] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(null);
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

  const handleToggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  }

  const handleDeleteBadge = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await api.badges.remove(badgeId);
      props.history.push('/badges');
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  if (isLoading) return <PageLoaging />
  if (error) return <PageError error="error" />
  return (
    <BadgeDetail
      {...badge}
      modalIsOpen={modalIsOpen}
      onToggleModal={handleToggleModal}
      onDeleteBadge={handleDeleteBadge}
    />
  );
}

export default BadgeDetailContainer;
