import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import accountSettings from '../Screens/drawerScreens/accountSettingsScreen'
import oldTrips from '../Screens/drawerScreens/oldTripsScreen'
import options from '../Screens/drawerScreens/optionsScreen'
import HomeStackNavigator from './MyStackNavigator'

 const MyDrawerNavigator = createDrawerNavigator({
  Home: HomeStackNavigator,
  Account: accountSettings,
  OldTrips: oldTrips,
  Options: options,
},{
  initialRouteName: 'Home',
  });

export default MyDrawerNavigator