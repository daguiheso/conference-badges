import React from 'react';

import confLogo from '../assets/images/badge-header.svg';
import '../assets/styles/components/Badge.css';

const Badge = () => {
  return (
    <section className="badge-conf">
      <article className="badge-conf__header">
        <img src={confLogo} alt="Logo"/>
      </article>
      <article className="badge-conf__section-name">
        <img className="badge-conf__avatar" src="https://gravatar.com/avatar?d=identicon" alt="Avatar"/>
        <h1>Daniel <br/>Hernández</h1>
      </article>
      <article className="badge-conf__section-info">
        <h3>Developer Frontend</h3>
        <p>@daguiheso</p>
      </article>
      <footer className="badge-conf__footer">
        #platziconf
      </footer>
    </section>
  );
};

export default Badge;
