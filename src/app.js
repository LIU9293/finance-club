import React, { Component } from 'react';
import store from 'Redux/store';
import { Provider } from 'react-redux';
import AppRoute from './route';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoute />
      </Provider>
    );
  }
}

export default App;
