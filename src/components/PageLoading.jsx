import React from 'react';
import '../assets/styles/components/PageLoading.css';
import Loader from './Loader';

const PageLoaging = () => {
  return (
    <div className="page-loading">
      <Loader />
    </div>
  );
}

export default PageLoaging;
