import React from 'react';
import styles from './styles';
import { View, Text, Switch, ScrollView } from 'react-native';
import MultiSelect from 'react-native-multiple-select';
import { Constants } from 'expo'


class Sports extends React.Component {
  state = {
    selectedItems: [],
  }
  items = [{
    id: 0,
    name: 'Football',
  }, {
    id: 1,
    name: 'Tennis',
  }, {
    id: 2,
    name: 'Gym',
  }]

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems })
  }


  render() {
    return (
      <View>
        <Text style={{ margin: 4 }}>Sports: </Text>
        <MultiSelect
          items={this.items}
          uniqueKey='id'
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
      </View>
    )
  }
}
class Food extends React.Component {
  state = {
    selectedItems: [],
  }
  items = [{
    id: 0,
    name: 'Pizza',
  }, {
    id: 1,
    name: 'Burger',
  }, {
    id: 2,
    name: 'Pasta',
  }]

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems })
  }


  render() {
    return (
      <View>
        <Text style={{ margin: 4 }}>Food: </Text>
        <MultiSelect
          items={this.items}
          uniqueKey='id'
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
      </View>
    )
  }
}
class Activities extends React.Component {
  state = {
    selectedItems: [],
  }
  items = [{
    id: 0,
    name: 'PlayStation',
  }, {
    id: 1,
    name: 'Cinema',
  }, {
    id: 2,
    name: 'Nile Cruse',
  }]

  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems })
  }


  render() {
    return (
      <View>
        <Text style={{ margin: 4 }}>Activities: </Text>
        <MultiSelect
          items={this.items}
          uniqueKey='id'
          onSelectedItemsChange={this.onSelectedItemsChange}
          selectedItems={this.state.selectedItems}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          displayKey="name"
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
      </View>
    )
  }
}

export default class ret extends React.Component {
  render() {
    return (

      <ScrollView style={{ marginTop: Constants.statusBarHeight }}>
        <Text style={{ backgroundColor: 'rgb(56,68,90)', alignSelf: 'stretch', height: 50 }}></Text>
        <Text>Prefrences</Text>

        <Sports />
        <Food />
        <Activities />

      </ScrollView>

    );
  }
}