import React from 'react';
import { Text, View, Button, TextInput, KeyboardAvoidingView, Switch  } from 'react-native';
import {  createSwitchNavigator } from 'react-navigation';
import startScreen from './startScreen.js';
//import homeScreen from './homeScreen.js';
import SignUp from './signupScreen.js';
import styles from './styles.js';

//TODO handle signup button {props name is "Signup"}


class Item extends React.Component{
    state = {
      x: false,
    }
  render(){
    return(<View style={styles.item}>
      <Switch value = {this.state.x} onValueChange={()=>{this.setState({x:!this.state.x})}} />
      <Text>{this.props.food}</Text>
    </View>
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
    Login: startScreen,
    //Main: homeScreen,
    Signup: SignUp,
},{
  initialRouteName: 'Login',
});

export default class App extends React.Component {


  render() {
      
      return (
        <SwitchNavigator />
        )
  }
}

