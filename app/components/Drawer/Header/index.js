import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './index.style';

export default class HeaderDrawer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Header</Text>
      </View>
    );
  }
}
