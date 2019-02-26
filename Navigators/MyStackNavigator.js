import React from 'react';
import homeScreen from '../Screens/drawerScreens/homeScreen'
import { createStackNavigator } from 'react-navigation';
import map from '../Screens/drawerScreens/map'
import CardStackStyleInterpolator from 'react-navigation'
 

const MyStackNavigator = createStackNavigator({
  Home: homeScreen,
  Map: map,
},{
    initialRouteName: 'Home',
    transitionConfig: () => ({screenInterpolator: CardStackStyleInterpolator.forHorizontal}),
});

export default MyStackNavigator;