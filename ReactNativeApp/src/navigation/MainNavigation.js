import React from 'react';
import { TabNavigator, TabView, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerVisible: true,
        title: 'Home',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

const ProfileStack = StackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        headerVisible: false,
        title: 'Profile',
      },
    },
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        headerVisible: true,
        title: 'Sign Up',
      },
    },
    SignIn: {
      screen: SignIn,
      navigationOptions: {
        headerVisible: true,
        title: 'Sign In',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

const MainNavigation = TabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} size={28} />,
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="face" color={tintColor} size={28} />,
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: TabView.TabBarBottom,
  },
);

export { HomeStack, MainNavigation };

export default MainNavigation;
