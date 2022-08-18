import React from 'react';
import { View,  TextInput, KeyboardAvoidingView } from 'react-native';
import styles from '../styles';
import { Header, Button, Badge, Text } from 'react-native-elements';



export default class Inputs extends React.Component {
  state = {
    name: '',
    pass: '',
    isValid: false,
  };

 

    

  handleChange = key => val => {
    this.setState({ [key]: val })
  }


 
  render(){
    return (

      <KeyboardAvoidingView
        style={styles.container}
        behavior='padding'
      >
             <Header
                    
                    centerComponent={<Badge containerStyle={{backgroundColor:'black'}}><Text h4 style={{color: '#ffff'}}>Hangouts</Text></Badge>}

                 

                    containerStyle={{ backgroundColor: 'black', justifyContent: 'space-around', }}
                />
        <View style={styles.startScreenView}>

          <TextInput
            style={styles.inputs}
            placeholder='Username'
            value={this.state.name}
            underlineColorAndroid='transparent'
           >
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
                title="SignUp"
                titleStyle={{ fontWeight: "500" }}

                buttonStyle={{
                    backgroundColor: "black",
                    borderColor: "grey",
                    borderWidth: 0,
                    borderRadius: 10,
                }}
                onPress={()=>this.props.navigation.navigate('signup')}
              />
              <Button
                title="Login"
                titleStyle={{ fontWeight: "500" }}

                buttonStyle={{
                    backgroundColor: "black",
                    borderColor: "grey",
                    borderWidth: 0,
                    borderRadius: 10,
                }}
                onPress={()=>this.props.navigation.navigate('DrawerNavigator')}
              />
            
          </View>

        </View>
      </KeyboardAvoidingView>
      )
    }
  }
  

