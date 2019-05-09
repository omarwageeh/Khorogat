import React from 'react';
import { View, Text, ScrollView, TextInput, Button, KeyboardAvoidingView, TouchableHighlight, Image  } from 'react-native';

import { Header, Icon } from 'react-native-elements';
import AvatarContainer from '../../components/AvatarContainer';

export default class responseScreen extends React.Component{
    state={
        plans: [],
    }
    onPress = ()=>{
        this.props.navigation.navigate('viewplanScreen')
    }
    componentWillMount(){
     //   hi = this.props.navigation.state.params.hi
    }
    render(){
        return(
            <View style={{justifyContent:'space-evenly'}}>
                <Plan style={{margin: 3}} onPress={this.onPress} planLetter = 'A'></Plan>
                <Plan style={{margin: 3}} onPress={this.onPress} planLetter = 'B'></Plan>
                <Plan style={{margin: 3}} onPress={this.onPress} planLetter = 'C'></Plan>
            </View>
        )
    }
}


export class Plan extends React.Component{
    render(){
        return(
            <View style={{borderColor: 'purple', borderWidth:3, padding: 5, borderRadius: 15, margin: this.props.style.margin}}>
                 <TouchableHighlight onPress = {this.props.onPress} underlayColor = '#ffff'>
                    <View>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}> Plan {this.props.planLetter}</Text>
                        <View style={{flexDirection:'row', justifyContent: 'space-evenly'}}>
                           <Image
                            source={{ uri: 'http://192.168.1.4:8081/assets/./assets/Mac.jpg '}}
                            style={{ width: 125, height: 100 }}
                            />
                            <Image
                            source={{ uri: 'http://192.168.1.4:8081/assets/./assets/Mac.jpg '}}
                            style={{ width: 125, height: 100 }}
                            />
                            <Image
                            source={{ uri: 'http://192.168.1.4:8081/assets/./assets/Mac.jpg '}}
                            style={{ width: 125, height: 100 }}
                            />
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{color: 'purple'}}>First Option {'\n'}Second Option {'\n'}Third Option</Text>
                            <Text style={{color: 'purple'}}>150$</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}