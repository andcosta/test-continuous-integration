import React from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Drawer from './components/Drawer';
import Initial from './screens/Initial';
import TabBarExample from './screens/TabBarExample';

const InitialScreen = ({ navigation }) => <Initial navigation={navigation} />;
InitialScreen.navigationOptions = {
  drawerLabel: 'Tela inicial',
  drawerIcon: ({ tintColor }) => <MaterialIcons name="chrome-reader-mode" size={24} style={{ color: tintColor }} />
};

const TabBarExampleScreen = ({ navigation }) => <TabBarExample navigation={navigation} />;
TabBarExampleScreen.navigationOptions = {
  drawerLabel: 'Exemplo Tabbar',
  drawerIcon: ({ tintColor }) => <MaterialIcons name="call-to-action" size={24} style={{ color: tintColor }} />
};

const contentComponent = drawerItems => <Drawer drawerItems={drawerItems} />;

const DrawerNav = DrawerNavigator(
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
      activeTintColor: 'rgba(68, 124, 255, 1.0)'
    }
  }
);

export default DrawerNav;
