import React, { Component, PropTypes } from 'react';
import {StyleSheet} from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    inputs: {
      padding: 5,
      margin: 2,
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 0.5,
      width: 400,
    },
  
    view: {
      margin: 4,
    },
  
    newPage: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      margin: 30,
  
    },
  
    Content: {
      flex: 1 ,
      margin:30,
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