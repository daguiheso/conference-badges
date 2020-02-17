import React from 'react';

import confLogo from '../assets/images/badge-header.svg';
import '../assets/styles/components/Badge.css';

const Badge = (props) => {
  const { name, lastName, jobTitle, twitter, avatar } = props;
  return (
    <section className="badge-conf">
      <article className="badge-conf__header">
        <img src={confLogo} alt="Logo"/>
      </article>
      <article className="badge-conf__section-name">
        <img className="badge-conf__avatar" src={avatar} alt="Avatar"/>
        <h1>{name} <br />{lastName}</h1>
      </article>
      <article className="badge-conf__section-info">
        <h3>{jobTitle}</h3>
        <p>@{twitter}</p>
      </article>
      <footer className="badge-conf__footer">
        #platziconf
      </footer>
    </section>
  );
};

export default Badge;
