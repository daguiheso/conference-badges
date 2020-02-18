import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import Home from '../pages/Home';
import Layout from './Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={BadgeNew} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
