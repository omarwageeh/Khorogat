import React from 'react';
import homeScreen from '../Screens/drawerScreens/homeScreen'
import { createStackNavigator } from 'react-navigation';
import map from '../Screens/drawerScreens/map'
import CardStackStyleInterpolator from 'react-navigation'
import planningScreen from '../Screens/drawerScreens/planningScreen'
import responseScreen from '../Screens/drawerScreens/responseScreen'

const HomeStackNavigator = createStackNavigator({
  Home: homeScreen,
  Map: map,
  planningScreen: planningScreen,
  responseScreen: responseScreen,
},{
    initialRouteName: 'Home',
    transitionConfig: () => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal}),
});

export default HomeStackNavigator;