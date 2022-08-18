import React from 'react';
import { View, ScrollView, Text, Image, TouchableHighlight } from 'react-native'
import { Avatar } from 'react-native-elements';



export default class AvatarContainer extends React.Component{
    state={
       borderColor: '#ffff',

    }
   
    handlePress=()=>{
        if(this.state.borderColor === '#ffff')
        this.setState({borderColor: 'limegreen'})
        else
        this.setState({borderColor: '#ffff'})
    }
 
    render(){
        return(
            <TouchableHighlight onPress = {()=>{this.handlePress(), this.props.onPress()}} underlayColor = '#ffff' style={{marginHorizontal: 3,alignItems:'center', backgroundColor: '#ffff', borderRadius: 25, height:100, width:100}}>
                <View style={{borderColor: this.state.borderColor, borderWidth: 3, width:100, height:100, borderRadius: 25, alignItems: 'center'}}>
                    <Image
                        source={this.props.img}
                        style={{borderRadius: 25, height:75, width:75}}
                    />
                    <Text>{this.props.text}</Text>
                </View>
             </TouchableHighlight>
        )
        
    }
}

