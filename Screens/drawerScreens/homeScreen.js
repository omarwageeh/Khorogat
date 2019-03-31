import React from 'react';
import { View } from 'react-native';
import { Header, Icon, Button } from 'react-native-elements';
import { DrawerActions } from 'react-navigation';
//! Fix the Underlay in buttonLongPress
// TODO onPress function for left component, center component and right componen
// TODO Show Recommended Plans for User

export default class Home extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View>
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

                    rightComponent={<Icon name='map' type='font-awesome' color='black' underlayColor='transparent' onPress={() => this.props.navigation.navigate('Map')} />}

                    containerStyle={{ backgroundColor: '#fff', justifyContent: 'space-around' }}
                />
            </View>
        )
    }
}
