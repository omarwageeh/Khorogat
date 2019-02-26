import React from 'react';
import { View, ScrollView } from 'react-native'
import { Avatar } from 'react-native-elements';
import style from '../../styles'
import {Constants} from 'expo'
class AvatarContainer extends React.Component{
    state={
       borderWidth: 0,

    }
    handlePress = () => {
        if(this.state.borderWidth === 0)
        this.setState({borderWidth: 3})
        else
        this.setState({borderWidth: 0})
    }

    render(){
        return(
            <Avatar
                containerStyle={{borderColor: 'limegreen', borderWidth: this.state.borderWidth}}
                rounded
                onPress = {() =>{this.handlePress()}}
                source={{
                       uri:'https://cdn1.iconfinder.com/data/icons/cartoon-snack/128/pizza-512.png', 
                }}
                size="large"
            />
        )
    }
}




export default class AccountSettings extends React.Component{
    state={
        Food: [],
        Sports: [],
        Activities: [],
    }
    componentWillMount(){
        let Arr = [];
        let  i = 0;
        for(i = 0; i < 10; i++){
            Arr.push(<AvatarContainer/>)
        }
       this.setState({Food: [...Arr]})

    }
    render() {
        return(
            <ScrollView style={{flex: 1,
                backgroundColor: '#fff',
                marginTop: Constants.statusBarHeight,
                paddingLeft: 3,
                flexDirection:'column'}}>
                
                {this.state.Food}
            </ScrollView>
        )
        
    }
}
