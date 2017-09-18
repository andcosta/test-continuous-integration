import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import styles from './index.style';

export default class Initial extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.text}>Personal starter template for react-native. By @andersondecarvalho</Text>
        </View>
        <View style={styles.containerButton}>
          <Button onPress={() => this.props.navigation.navigate('DrawerOpen')} title="Open drawer" />
        </View>
      </View>
    );
  }
}
