import React from 'react';
import { View, Text, ScrollView, TextInput, Button, KeyboardAvoidingView, TouchableHighlight, Image  } from 'react-native';

import { Header, Icon } from 'react-native-elements';
import AvatarContainer from '../../components/AvatarContainer';

export default class responseScreen extends React.Component{
    state={
        plans: [],
    }
    onPress = (id)=>{
        this.props.navigation.navigate('viewplanScreen',{planDetails: this.state.plans[id]['planPlaces']})
    }
    componentWillMount(){
        this.setState({plans: this.props.navigation.getParam('res')})
    }
    render(){
        return(
            <View style={{justifyContent:'space-evenly'}}>
                <Plan
                 style={{margin: 3}} 
                 onPress={()=>this.onPress(0)} 
                 movie={require('./../../assets/movie1.png')}
                 m_name='Stars Cinema'
                 food= {require('./../../assets/food1.png')}
                 f_name='Burger King'
                 cafe= {require('./../../assets/cafe1.png')}
                 c_name='Starbucks'
                 planLetter = 'A' 
                 plan = {this.state.plans? this.state.plans[0]['planPlaces'] : ''}
                 />

                <Plan 
                 style={{margin: 3}} 
                 onPress={()=>this.onPress(1)} 
                 movie={require('./../../assets/movie2.png')} 
                 m_name='Suncity'
                 food={require('./../../assets/food2.png')}
                 f_name='Mince'
                 cafe={require('./../../assets/cafe2.jpg')}
                 c_name='Dunkin Donuts'
                 planLetter = 'B' 
                 plan = {this.state.plans? this.state.plans[1]['planPlaces'] : ''}
                 />

                <Plan 
                 style={{margin: 3}} 
                 onPress={()=>this.onPress(2)} 
                 movie={require('./../../assets/movie3.png')} 
                 m_name='Cairo Festival'
                 food= {require('./../../assets/food3.jpg')}
                 f_name='McDonalds'
                 cafe= {require('./../../assets/cafe3.png')}  
                 c_name='Costa Coffee'
                 planLetter = 'C' 
                 plan = {this.state.plans? this.state.plans[2]['planPlaces'] : ''}
                />
            </View>
        )
    }
}


export class Plan extends React.Component{
    render(){
        return(
            <View style={{borderColor: 'black', borderWidth:3, padding: 5, borderRadius: 15, margin: this.props.style.margin}}>
                 <TouchableHighlight onPress = {this.props.onPress} underlayColor = '#ffff'>
                    <View>
                        <Text style={{fontSize: 16, fontWeight: 'bold'}}> Plan {this.props.planLetter}</Text>
                        <View style={{flexDirection:'row', justifyContent: 'space-evenly'}}>
                           <Image
                            source= {this.props.movie}
                            style={{ width: 125, height: 100, borderRadius: 30 }}
                            />
                            <Image
                            source={this.props.food}
                            style={{ width: 125, height: 100, borderRadius: 30 }}
                            />
                            <Image
                            source={this.props.cafe}
                            style={{ width: 125, height: 100, borderRadius: 30 }}
                            />
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{color: 'black', fontWeight: '400'}}>{this.props.plan? this.props.plan[0]['name']: this.props.m_name} {'\n'}{this.props.plan? this.props.plan[1]['name']: this.props.f_name} {'\n'}{this.props.plan? this.props.plan[2]['name']: this.props.c_name}</Text>
                            <Text style={{color: 'black', fontWeight: '600', marginRight: 10}}>{'\n'}$150-200</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}