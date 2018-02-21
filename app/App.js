import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/reducers';
import NavigationDrawer from './NavigationDrawer';
import NavigationTabbar from './NavigationTabbar';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <NavigationTabbar />
      </Provider>
    );
  }
}
