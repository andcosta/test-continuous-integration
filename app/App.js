import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Personal starter template for react-native. By @andersondecarvalho</Text>
        <MaterialIcons name="drafts" size={200} style={{ color: 'red' }} />
        <Icon.Button name="facebook" backgroundColor="#3b5998">
          Logar com o Facebook
        </Icon.Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
