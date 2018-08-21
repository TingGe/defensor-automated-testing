import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import NotFound from './components/NotFound';
import Home from './containers/Home';

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={NotFound} />
  </Switch>
);

export default routes;
