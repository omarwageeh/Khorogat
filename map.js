import React from 'react';
import { View } from 'react-native';
import { MapView, Permissions, Location } from 'expo';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

export default class Map extends React.Component{

    state = {
        location: 0,
        err: "",
    }
    

    _getLocationAsync = async () => {
        Permissions.askAsync()
        let { status } = await Permissions.askAsync(Permissions.LOCATION)
        if( status !== "granted" ){
            this.setState({err: "Permission Denied"})
        
            let location = await Location.getCurrentPositionAsync({})
            this.setState({location})
       
        }
    }
    componentDidMount(){
        this._getLocationAsync()
    }
   
    render(){
        if(!this.state.location)
        {
            return (<View></View>)
        }
        return(
            
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                latitude: this.state.location.coords.latitude,
                longitude: this.state.location.coords.longitude,
                latitudeDelta: 0.0082,
                longitudeDelta: 0.0042,
                }} >
               
                <MapView.Marker title= "You are here" coordinate={this.state.location.coords} />
            
            </MapView>
        )
    }
}