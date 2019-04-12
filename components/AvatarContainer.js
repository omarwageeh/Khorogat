import React from 'react';
import { View, ScrollView, Text } from 'react-native'
import { Avatar } from 'react-native-elements';



export default class AvatarContainer extends React.Component{
    state={
       borderColor: '#d1dddd',

    }
   
    handlePress=()=>{
        if(this.state.borderColor === '#d1dddd')
        this.setState({borderColor: 'limegreen'})
        else
        this.setState({borderColor: '#d1dddd'})
    }
 
    render(){
        return(
            <View style={{marginHorizontal: 3,alignItems:'center', backgroundColor: '#d1dddd', borderColor: this.state.borderColor, borderWidth: 3}}>
                <Avatar
                    containerStyle={{ }}
                    rounded={this.props.rounded}
                    avatarStyle={{backgroundColor:'#d1dddd'}}
                    onPress = {()=>{this.handlePress(), this.props.onPress()}}
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

