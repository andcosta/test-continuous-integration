import React, { Component } from 'react';
import { View, Text } from 'react-native';
import NavigationDrawer from './NavigationDrawer';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <NavigationDrawer />;
  }
}
