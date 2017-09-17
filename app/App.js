import React from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DrawerItems, DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Initial from './screens/Initial';
import TabBarExample from './screens/TabBarExample';

const InitialScreen = ({ navigation }) => <Initial navigation={navigation} />;
InitialScreen.navigationOptions = {
  drawerLabel: 'Tela inicial',
  drawerIcon: ({ tintColor }) => <MaterialIcons name="credit-card" size={24} style={{ color: tintColor }} />
};

const TabBarExampleScreen = ({ navigation }) => <TabBarExample navigation={navigation} />;
TabBarExampleScreen.navigationOptions = {
  drawerLabel: 'Exemplo Tabbar',
  drawerIcon: ({ tintColor }) => <MaterialIcons name="credit-card" size={24} style={{ color: tintColor }} />
};

const contentComponent = props => (
  <View>
    <View>
      <Text>Header fixo</Text>
      <Text>Header fixo</Text>
    </View>
    <View>
      <DrawerItems {...props} />
    </View>
  </View>
);

const DrawerExample = DrawerNavigator(
  {
    Initial: {
      path: '/initial',
      screen: InitialScreen
    },
    TabBarExample: {
      path: '/tabBarExample',
      screen: TabBarExampleScreen
    }
  },
  {
    contentComponent: contentComponent,
    initialRouteName: 'Initial',
    contentOptions: {
      activeTintColor: '#e91e63'
    }
  }
);

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 0
  }
});

export default DrawerExample;
