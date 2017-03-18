import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Pages from './CCOs/pages';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Pages.Nav}>
      <IndexRoute component={Pages.Home} />
      <Route path="/placeholder" component={Pages.Placeholder} />
    </Route>
  </Router>
);

export default Routes;
