import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DrawerItems } from 'react-navigation';
import HeaderDrawer from './Header';

export default class Drawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View>
          <HeaderDrawer />
        </View>
        <View>
          <DrawerItems {...this.props.drawerItems} />
        </View>
      </View>
    );
  }
}
