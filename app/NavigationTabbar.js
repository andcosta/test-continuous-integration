import React from 'react';
import { Platform, Button, ScrollView } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import GlobalStyle from './global/Style';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
//import SampleText from './SampleText';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    {/* <SampleText>{banner}</SampleText> */}
    <Button onPress={() => navigation.navigate('Profile', { name: 'Jordan' })} title="Open profile screen" />
    <Button onPress={() => navigation.navigate('NotifSettings')} title="Open notifications screen" />
    <Button onPress={() => navigation.navigate('SettingsTab')} title="Go to settings tab" />
    <Button onPress={() => navigation.goBack(null)} title="Go back" />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => <MyNavScreen banner="Home Screen xx" navigation={navigation} />;
const MySettingsScreen = ({ navigation }) => <MyNavScreen banner="Settings Screen" navigation={navigation} />;

const MyProfileScreen = ({ navigation }) => <MyNavScreen banner={`${navigation.state.params.name}s Profile`} navigation={navigation} />;
const MyNotificationsSettingsScreen = ({ navigation }) => <MyNavScreen banner="Notifications Screen" navigation={navigation} />;

const TabNav = TabNavigator(
  {
    MainTab: {
      screen: MyHomeScreen,
      path: '/',
      navigationOptions: {
        title: 'Welcome 1',
        tabBarLabel: 'Home x',
        showIcon: false,
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={26} style={{ color: tintColor }} />
        )
      }
    },
    SettingsTab: {
      screen: MySettingsScreen,
      path: '/settings',
      navigationOptions: {
        title: 'Settings 1',
        tabBarLabel: 'Settings 2',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-settings' : 'ios-settings-outline'} size={26} style={{ color: tintColor }} />
        )
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: 'rgb(0, 0, 0)',
      inactiveTintColor: 'rgb(113, 113, 113)',
      pressColor: Platform.OS === 'android' ? 'rgb(210, 210, 210)' : null,
      showIcon: true,
      showLabel: true,
      upperCaseLabel: false,
      indicatorStyle: { backgroundColor: 'rgb(250, 250, 250)' },
      labelStyle: {
        color: 'red',
        fontSize: 11
      },
      style: {
        backgroundColor: 'rgb(250, 250, 250)',
        height: Platform.OS === 'ios' ? 48 : 60
      }
    }
  }
);

const StacksOverTabs = StackNavigator({
  Root: {
    screen: TabNav
  },
  NotifSettings: {
    screen: MyNotificationsSettingsScreen,
    navigationOptions: {
      title: 'Notifications'
    }
  },
  Profile: {
    screen: MyProfileScreen,
    path: '/people/:name',
    navigationOptions: ({ navigation }) => {
      title: `${navigation.state.params.name}'s Profile!`;
    }
  }
});

export default StacksOverTabs;
