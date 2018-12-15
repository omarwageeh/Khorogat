import React from 'react';
import { View } from 'react-native'
import { Header, Icon, Button } from 'react-native-elements'

//! Fix the Underlay in buttonLongPress 
// TODO onPress function for left component, center component and right componen
// TODO Show Recommended Plans for User

export default class Home extends React.Component{

    
    render() {
        return(
            <View>
                <Header
                    leftComponent={ <Icon name='list' type='font-awesome' color='black'  underlayColor='transparent'  onPress={() => console.log('hello')} /> }
                    centerComponent={ <Button 
                                            title="Plan Trip"
                                            titleStyle={{ fontWeight: "700" }}
                                            
                                            buttonStyle={{
                                                backgroundColor: "black",
                                                width: 200,
                                                height: 40,
                                                borderColor:"grey",
                                                borderWidth: 0,
                                                borderRadius: 20,
                                            }}
                                        />}

                    rightComponent={<Icon name='map' type='font-awesome' color='black'  underlayColor='transparent'  onPress={() => console.log('hello')} />}
                    
                    containerStyle={{ backgroundColor: '#fff', justifyContent: 'space-around', }}
                    />
            </View>
        )
    }
}
