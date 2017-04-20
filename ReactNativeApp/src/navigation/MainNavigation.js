import React from 'react';
import { TabNavigator, TabView, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '../screens/Home';

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

// const ProfileStack = StackNavigator({
//
// })
//

const MainNavigation = TabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} size={28} />,
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
