import React from "react"
import SwitchNavigator from './Navigators/MySwitchNavigator.js'
import { Font, AppLoading } from 'expo'

export default class App extends React.Component {

  state={
    fontsLoaded: false
  }
  async componentWillMount() {
    await Font.loadAsync({
      'MaterialIcons': require('./node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf'),
      'FontAwesome': require('./node_modules/@expo/vector-icons/fonts/FontAwesome.ttf')
    });
    this.setState({ fontsLoaded: true });
  };

  render() {
    return  this.state.fontsLoaded ? <SwitchNavigator/> : <AppLoading/> 
    }
  }

 