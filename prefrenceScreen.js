import React from 'react';
import styles from './styles';
import {  View, Text, Switch  } from 'react-native';



class Item extends React.Component{
  state = {
    x: false,
  }
  render(){
    return(<View style={styles.item}>
      <Text>{this.props.food}</Text>
      <Switch value = {this.state.x} onValueChange={()=>{this.setState({x:!this.state.x})}} />
    </View>
    )
  }
}

export default class ret extends React.Component {
  render(){
    return(
    <View style = {styles.Content}>
      <Text>
        FOOD
      </Text>
      <Item style = {styles.item} food = 'Cheese'/> 
      <Item style = {styles.item} food = 'Hello' />
      <Item style = {styles.item} food='Test'/>
    </View>
    );
  }
}