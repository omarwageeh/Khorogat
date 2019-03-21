import React from "react"
import SwitchNavigator from './Navigators/MySwitchNavigator.js'
import {Alert} from 'react-native';
import io from 'socket.io-client';


export default class App extends React.Component {
 
  state={
    x:'',
    msg:''
  }
 
  render() {
    return <SwitchNavigator />
  }
}

 