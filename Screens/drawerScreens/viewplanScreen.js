import React from 'react';
import { View, Text, ScrollView, TextInput, Button, KeyboardAvoidingView, TouchableHighlight, Image  } from 'react-native';

export default class viewplanScreen extends React.Component{
    state={
        planDetail: [],
    }
    onPress = ()=>{
        this.props.navigation.navigate('viewplanScreen')
    }
    componentWillMount(){
        planDetailarr = [];
        var i;
        this.setState({planDetail: this.props.navigation.getParam('planDetails')})
        for (i = 0; i < 3; i++) { 
            plandetail = this.state.planDetail ? this.state.planDetail : '' 
            planDetailarr[i] = <PlanDetail style={{margin: 3}} onPress={this.onPress} location={plandetail? plandetail[i]['details']: ''}></PlanDetail>;
        }
    }
    render() {
        return(
            <ScrollView>
                {this.state.planDetail}
            </ScrollView>
        )
    }
}

export class PlanDetail extends React.Component{
    render(){
        return(
            <View style={{borderColor: 'purple', borderWidth:3, padding: 5, borderRadius: 15, margin: this.props.style.margin}}>
                 <TouchableHighlight onPress = {this.props.onPress} underlayColor = '#ffff'>
                    <View>
                        <View style={{flexDirection:'row', justifyContent: 'space-evenly'}}>
                           <Image
                            source={{ uri: 'http://10.0.2.2:8081/assets/./assets/Mac.jpg '}}
                            style={{ width: 200, height: 100 }}
                            />
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 26, fontWeight: 'bold'}}>Mac</Text>
                            <Text style={{fontSize: 24, fontWeight: 'bold'}}>4.5</Text>
                        </View>
                        <Text style={{color: 'purple'}}>Located in: {this.props.location}</Text>
                        <Text style={{color: 'purple'}}>Address: {this.props.address}</Text>
                        <Text style={{color: 'purple'}}>Hours: {this.props.hours}</Text>
                        <Text style={{color: 'purple'}}>Phone: {this.props.phone}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}
