import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/app.css';
import Badge from './components/Badges';

const container = document.getElementById('app');
ReactDOM.render(
  <Badge
    name="Daniel"
    lastName="Hernández"
    avatar="https://gravatar.com/avatar?d=identicon"
    jobTitle="Developer Frontend"
    twitter="daguiheso"
  />, container);