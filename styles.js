import React, { Component, PropTypes } from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Constants} from 'expo';
let {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'stretch',
      //justifyContent: 'center',
    },
  
    inputs: {
      padding: 5,
      margin: 2,
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 0.5,
    },
    inputs2: {
      padding: 5,
      margin: 2,
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 0.5,
      width: width/2 - 4,
    },
  
    startScreenView: {
      flex: 1,
      margin: 4,
      justifyContent: 'center'
    },
  
    newPage: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      margin: 30,
  
    },
  
    Content: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop: Constants.statusBarHeight,
      paddingLeft: 3,
    },
    
    item: {
      flexDirection:'row',
      justifyContent: 'space-between',
  
    },
    registerButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 5
    }
  
  });
  
  export default styles;