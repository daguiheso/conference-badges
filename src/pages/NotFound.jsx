import React from 'react';
import img404 from '../assets/images/404.png';
import '../assets/styles/components/NotFound.css';

const NotFound = () => {
  return (
    <section className="notfound d-flex justify-content-center">
      <h1 className="notfound__title">
        404 <br/> No Encontrado
      </h1>
      <img
        className="notfound__img align-self-end"
        src={img404}
        alt="404"
      />
    </section>
  )
}

export default NotFound
