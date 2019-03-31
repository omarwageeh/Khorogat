import React from 'react';
import { View, ScrollView, Text } from 'react-native'
import { Avatar } from 'react-native-elements';
import style from '../../styles'
import {Constants} from 'expo'
import AvatarContainer from '../components/AvatarContainer'

//https://cdn1.iconfinder.com/data/icons/cartoon-snack/128/pizza-512.png
//"http://192.168.1.4:8081/assets/./assets/splash.png"
export default class AccountSettings extends React.Component{
    state={
        Food: [],
        Sports: [],
        Activities: [],
    }
    componentWillMount(){
        let Arr = [];
        let  i = 0;
        for(i = 0; i < 5; i++){
            Arr.push(<AvatarContainer href='http://192.168.1.55:8081/assets/./assets/avatar.png' borderColor='limegreen' rounded size='medium'/>)
        }
       this.setState({Food: [...Arr]})
        let Sports = [];
        i = 0;
        for(i = 0; i < 5; i++){
            Sports.push(<AvatarContainer href='http://192.168.1.55:8081/assets/./assets/avatar.png' borderColor='limegreen' rounded size='medium'/>)
        }
        this.setState({Sports: [...Sports]})
        let Activities = [];
        i = 0;
        for(i = 0; i < 5; i++){
            Activities.push(<AvatarContainer href='http://192.168.1.55:8081/assets/./assets/avatar.png' borderColor='limegreen' rounded size='medium'/>)
        }
        this.setState({Activities: [...Activities]})
    }
    render() {
        return(
            <ScrollView style={{
                backgroundColor: '#fff',
                marginTop: Constants.statusBarHeight
                }}>

                <View style={{ alignItems:'center',backgroundColor: 'blue'}}><Text style={{color:'#fff',fontSize: 25, fontWeight:'bold'}}>Food</Text></View>
                
                <ScrollView style={{
                    paddingHorizontal: 10
                    }}>
                    
                    
                    <View style={{justifyContent:'space-evenly',flexDirection:'row', marginTop: 3}}>
                    {this.state.Food}
                    </View>
                    
                    <View style={{justifyContent:'space-evenly',flexDirection:'row', marginTop: 3}}>
                    {this.state.Food}
                    </View>
                    
                    <View style={{justifyContent:'space-evenly',flexDirection:'row', marginTop: 3}}>
                    {this.state.Food}
                    </View>
                
                    <View style={{justifyContent:'space-evenly',flexDirection:'row', marginTop: 3}}>
                    {this.state.Food}
                    </View>

                    

                </ScrollView>
                <View style={{ alignItems:'center',backgroundColor: 'blue'}}><Text style={{color:'#fff',fontSize: 25, fontWeight:'bold'}}>Sports</Text></View>
                <ScrollView style={{
                    paddingHorizontal: 10
                    }}>
                    
                    
                    <View style={{justifyContent:'space-evenly',flexDirection:'row', marginTop: 3}}>
                    {this.state.Sports}
                    </View>
                    
                    <View style={{justifyContent:'space-evenly',flexDirection:'row', marginTop: 3}}>
                    {this.state.Sports}
                    </View>
                    
                    <View style={{justifyContent:'space-evenly',flexDirection:'row', marginTop: 3}}>
                    {this.state.Sports}
                    </View>
                
                    <View style={{justifyContent:'space-evenly',flexDirection:'row', marginTop: 3}}>
                    {this.state.Sports}
                    </View>

                    

                </ScrollView>
                <View style={{ alignItems:'center',backgroundColor: 'blue'}}><Text style={{color:'#fff',fontSize: 25, fontWeight:'bold'}}>Activities</Text></View>
                <ScrollView style={{
                    paddingHorizontal: 10
                    }}>
                    
                    
                    <View style={{justifyContent:'space-evenly',flexDirection:'row', marginTop: 3}}>
                    {this.state.Activities}
                    </View>
                    
                    <View style={{justifyContent:'space-evenly',flexDirection:'row', marginTop: 3}}>
                    {this.state.Activities}
                    </View>
                    
                    <View style={{justifyContent:'space-evenly',flexDirection:'row', marginTop: 3}}>
                    {this.state.Activities}
                    </View>
                
                    <View style={{justifyContent:'space-evenly',flexDirection:'row', marginTop: 3}}>
                    {this.state.Activities}
                    </View>

                    

                </ScrollView>

            </ScrollView>
        )  
    }
}
