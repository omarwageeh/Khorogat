import React from 'react';
import homeScreen from '../Screens/drawerScreens/homeScreen'
import { createDrawerNavigator } from 'react-navigation';
import accountSettings from '../Screens/drawerScreens/accountSettingsScreen'
import oldTrips from '../Screens/drawerScreens/oldTripsScreen'
import options from '../Screens/drawerScreens/optionsScreen'
import MyStackNavigator from './MyStackNavigator'

 const MyDrawerNavigator = createDrawerNavigator({
  Home: MyStackNavigator,
  Account: accountSettings,
  OldTrips: oldTrips,
  Options: options,
},{
  initialRouteName: 'Home',
  });

export default MyDrawerNavigator