import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { Header, Icon, Button, Avatar } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';
import  Net from 'react-native-network-info';
import Map from './map';

// Get Local IP

//! Fix the Underlay in buttonLongPress
// TODO onPress function for left component, center component and right componen
// TODO Show Recommended Plans for User

export default class Home extends React.Component {
    static navigationOptions = {
        header: null
    }
    state={
        FoodArr: []
    }
    loadPics = ()=>{
        Food = []
        Food[0] = <Image
                     source={require('./../../assets/home1.jpeg')}
                     style={{ width: 105, height: 90, borderRadius: 10, marginHorizontal: 2 }}
                     /> 
        Food[1] = <Image
                     source={require('./../../assets/home5.jpg')}
                     style={{ width: 105, height: 90, borderRadius: 10, marginHorizontal: 2 }}
                     />
        Food[2] = <Image
                     source={require('./../../assets/home3.jpeg')}
                     style={{ width: 105, height: 90, borderRadius: 10, marginHorizontal: 2 }}
                     />
        Food[3] = <Image
                      source={require('./../../assets/home4.jpg')}
                      style={{ width: 105, height: 90, borderRadius: 10, marginHorizontal: 2 }}
                     />
        Food[4] = <Image
                     source={require('./../../assets/home5.jpg')}
                     style={{ width: 105, height: 90, borderRadius: 10, marginHorizontal: 2 }}
                     />

        return Food
    }

    async componentWillMount(){
        let i = 0
        Food = []
        Food = this.loadPics();
        
        this.setState({FoodArr: Food})
    }

    render() {
        return (
            <View style = {{flex:1, paddingBottom: 20}}>
                <Header
                    leftComponent={<Icon name='list' type='font-awesome' color='black' underlayColor='transparent' onPress={()=> this.props.navigation.openDrawer()} />}
                    centerComponent={
                        <Button
                            title="Plan Trip"
                            titleStyle={{ fontWeight: "700" }}

                            buttonStyle={{
                                backgroundColor: "black",
                                width: 200,
                                height: 40,
                                borderColor: "grey",
                                borderWidth: 0,
                                borderRadius: 20,
                            }}
                            onPress={()=>this.props.navigation.navigate('planningScreen')}
                        />}

                   

                    containerStyle={{ backgroundColor: '#fff', justifyContent: 'space-around' }}
                />
                <Map></Map>
                <View>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}  >Discover Unique Experiences {'\n'}Around You </Text>
                    
                    <ScrollView contentContainerStyle ={{justifyContent: 'space-between', marginTop: 5}} horizontal>
                        {this.state.FoodArr}
                     
                    </ScrollView>
                    
                   
                
                </View>
                
            </View>
        )
    }
}
