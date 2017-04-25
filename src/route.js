import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import HomePage from 'containers/AppHomepage';
import JoinUs from 'containers/JoinUs';
import ContactUs from 'containers/ContactUs';
import ProjectRefer from 'containers/ProjectRefer';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={ContactUs} />
          <Route path="/join" component={JoinUs} />
          <Route path="/refer" component={ProjectRefer} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
