import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/styles/app.css';
import Badge from './components/Badges';

const container = document.getElementById('app');

ReactDOM.render(<Badge />, container);