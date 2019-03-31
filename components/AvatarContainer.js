import React from 'react';
import { View, ScrollView, Text } from 'react-native'
import { Avatar } from 'react-native-elements';



export default class AvatarContainer extends React.Component{
    state={
       borderWidth: 0,

    }
   
    handlePress=()=>{
        if(this.state.borderWidth === 0)
        this.setState({borderWidth: 3})
        else
        this.setState({borderWidth: 0})
    }
 
    render(){
        return(
            <View style={{alignItems:'center', backgroundColor: '#d1dddd'}}>
                <Avatar
                    containerStyle={{borderColor: this.props.borderColor, borderWidth: this.state.borderWidth}}
                    rounded={this.props.rounded}
                    avatarStyle={{backgroundColor:'#d1dddd'}}
                    onPress = {()=>{this.handlePress(); this.props.onPress(this)}}
                    source={{
                        uri:this.props.href, 
                    }}
                    size={this.props.size}
                />
                <Text>{this.props.text}</Text>
             </View>
        )
        
    }
}

