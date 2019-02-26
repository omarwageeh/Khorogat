import React from "react"
import { View, Alert } from "react-native"
import { MapView, Permissions, Location } from "expo"
import { Icon } from "react-native-elements"
export default class Map extends React.Component {
  state = {
    location: 0,
    locationServicesDisabeled: true,
    err: "",
  }

  _getLocationAsync = async () => {
    try {
        let { status } = await Permissions.askAsync(Permissions.LOCATION)
        if (status !== "granted") {
          this.setState({ err: "Permission Denied" })
        }
        let location = await Location.getCurrentPositionAsync({
          enableHighAccuracy: false,
          maximumAge: 3000,
        })
        console.log(location)
        this.setState({ locationServicesDisabeled: false, location: location })
    } 
    catch (error) {
      Alert.alert("Enable Location Services !")
      this.setState({ locationServicesDisabeled: true })
    }
  }

  // findCoordinates is not working as expected for the time being _getLocationAsync should suffice
  findCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = JSON.stringify(position)

        this.setState({ location })
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
    )
  }

  componentDidMount() {
    this._getLocationAsync()
    // this.findCoordinates()
  }

  render() {
    if (this.state.locationServicesDisabeled && !this.state.location) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Icon
            name="refresh"
            onPress={() => this._getLocationAsync()}
            iconStyle={{ fontSize: 70 }}
          />
        </View>
      )
    }
    return (
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: this.state.location.coords.latitude,
          longitude: this.state.location.coords.longitude,
          latitudeDelta: 0.0082,
          longitudeDelta: 0.0042,
        }}
      >
        <MapView.Marker
          title="You are here"
          coordinate={this.state.location.coords}
        />
      </MapView>
    )
  }
}
