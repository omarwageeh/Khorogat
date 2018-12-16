import React from 'react';
import { View, Button, TextInput, KeyboardAvoidingView, Text } from 'react-native';
import styles from './styles.js';
import { Constants } from 'expo'

export default class Inputs extends React.Component {
  state = {
    name: '',
    pass: '',
    isValid: false,
  };

  handleChange = key => val => {
    this.setState({ [key]: val })
  }
  render() {
    return (

      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
      >
        <Text style={{ marginTop: Constants.statusBarHeight, backgroundColor: 'rgb(56,68,90)', alignSelf: 'stretch', height: 50 }}></Text>
        <View style={styles.startScreenView}>

          <TextInput
            style={styles.inputs}
            placeholder='Username'
            value={this.state.name}
            underlineColorAndroid='transparent'
            onChange={this.handleChange('name')}>
          </TextInput>

          <TextInput
            style={styles.inputs}
            placeholder='Password'
            secureTextEntry={true}
            value={this.state.pass}
            underlineColorAndroid='transparent'
            onChange={this.handleChange('pass')} >
          </TextInput>

          <View style={styles.registerButtons}>
            <Button
              title='Signup'
              onPress={() => this.props.navigation.navigate('Signup')}
            />
            <Button
              title='Login'
              onPress={this.props.Login}
            />
          </View>

        </View>
      </KeyboardAvoidingView>
    )
  }
}
