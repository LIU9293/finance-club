import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import HomePage from 'containers/HomePage';
import AppLayout from 'containers/AppLayout';

const Routes = () => (
  <Router>
    <AppLayout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Redirect from="*" to="/"/>
      </Switch>
    </AppLayout>
  </Router>
);

export default Routes;
