import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app/App';

class app extends Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('app', () => app);
