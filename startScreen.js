import React from 'react';
import { View, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from './styles.js';


export default class Inputs extends React.Component {
    state = {
      name: '' ,
      pass: '',
      isValid: false,
    };
  
    handleChange = key => val => {
      this.setState( {  [key]: val  }  )
    }
      render(){
        return(
          <KeyboardAvoidingView
            style = {styles.container}
            behavior = 'padding'
            >
        <View style = {styles.view}>
              <TextInput
                style = {styles.inputs}
                placeholder = 'Username'
                value = {this.state.name}
                underlineColorAndroid='transparent'
                onChange = {this.handleChange('name')}>
              </TextInput>
  
              <TextInput
                style = {styles.inputs}
                placeholder = 'Password'
                secureTextEntry = {true}
                value = {this.state.pass}
                underlineColorAndroid = 'transparent'
                onChange = {this.handleChange('pass')} >
              </TextInput>
  
              <View style={styles.registerButtons}>
              <Button
                      title ='Signup'
                      onPress = {this.props.Signup}
                  />
                <Button
                      title ='Login'
                      onPress = {() => {this.props.navigation.navigate('Prefrence')}}
                  />
              </View>
  
            </View>
            </KeyboardAvoidingView>
            )
          }
  }
