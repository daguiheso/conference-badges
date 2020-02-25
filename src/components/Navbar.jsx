import React from "react";

import logo from '../assets/images/badge-header.svg';
import "../assets/styles/components/Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-conf">
      <div className="container-fluid">
        <Link to="/badges" className="navbar-conf__brand">
          <img className="navbar-conf__logo" src={logo} alt="Logo" />
          <span className="font-weight-light">Conference </span>
          <span className="font-weight-bold">Badges</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
