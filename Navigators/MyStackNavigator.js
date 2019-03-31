import React from 'react';
import homeScreen from '../Screens/drawerScreens/homeScreen'
import { createStackNavigator } from 'react-navigation';
import map from '../Screens/drawerScreens/map'
import CardStackStyleInterpolator from 'react-navigation'
import planningScreen from '../Screens/drawerScreens/planningScreen'

const HomeStackNavigator = createStackNavigator({
  Home: homeScreen,
  Map: map,
  planningScreen: planningScreen,
},{
    initialRouteName: 'Home',
    transitionConfig: () => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal}),
});

export default HomeStackNavigator;