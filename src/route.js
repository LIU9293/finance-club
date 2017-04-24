import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import AppLayout from 'containers/AppLayout';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" render={props => <AppLayout {...props} />} />
      </Router>
    );
  }
}

export default Routes;
