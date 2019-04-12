import React from 'react';
import { View, Text, ScrollView, TextInput, Button, KeyboardAvoidingView  } from 'react-native';
import { Header, Icon} from 'react-native-elements';
import AvatarContainer from '../../components/AvatarContainer';
import { NavigationActions } from 'react-navigation'
import Expo from 'expo'


export default class planningScreen extends React.Component{
    state={
        Clicked: [false,false,false,false],
        borderWidth: 3,
        AvatarArr: [],
        text0: '',
        text1: '',
        text2: '',
        text3: '',
        geoLocation: '',
    }
   
    clicked = (id)=>{
        click = this.state.Clicked;
        click[id] = !click[id];
        this.setState({Clicked: [...click]})
    }
    
  
    onPress = ()=>{
        text = [this.state.text0, this.state.text1, this.state.text2, this.state.text3]
        send = []
      //  if(this.state.Clicked[0])
      //      send.push({Movies: text[0]})
      //  if(this.state.Clicked[1])
      //      send.push({Coffee: text[1]})
      //  if(this.state.Clicked[2])
       //     send.push({Shopping: text[2]})
      //  if(this.state.Clicked[3])
      //      send.push({Food: text[3]})
      
        send={categories:[], prices:[]}
        send.prices = text;
        send.categories = ['Movie', 'Coffe', 'Shopping', 'Food'];

       fetch('http://192.168.1.11:9000/api/contact', {
               method: 'POST',
               body: JSON.stringify(send),
               headers:{
                 'Content-Type': 'application/json'
               }
              })
               .then((res)=> { console.log(res); return(res.json())}).then((res)=>{console.log(JSON.stringify(res))})
            
        
        //this.props.navigation.navigate('responseScreen', {hi:'hi'})
        //this._getGeoLocationAsync()
     }


    _getGeoLocationAsync = async () => {
        let location = await Expo.Location.geocodeAsync('')
        this.setState({text1: JSON.stringify(location)})
    }

    componentWillMount(){

       this.setState({AvatarArr: [...
       [{id:0, avatar: <AvatarContainer text= 'Movies' borderColor='limegreen' size='large' href='https://cdn2.iconfinder.com/data/icons/maki/100/cinema-256.png' onPress={()=>this.clicked(0)}/>},
       {id:1, avatar:<AvatarContainer text='Coffee' borderColor='limegreen' size='large' href='https://cdn0.iconfinder.com/data/icons/office-239/64/hot-coffee-cup-mug-capucino-256.png' onPress={()=>this.clicked(1)}/>},
       {id:2, avatar: <AvatarContainer text='Shopping' borderColor='limegreen' size='large' href='https://cdn1.iconfinder.com/data/icons/feather-2/24/shopping-cart-256.png' onPress={()=>this.clicked(2)}/>},
       {id:3, avatar: <AvatarContainer text='Food' borderColor='limegreen' size='large' href='https://cdn2.iconfinder.com/data/icons/food-drink-10/24/food-drink-36-256.png' onPress={()=>this.clicked(3)}/>}]]}) 
       
    }
   
    render(){
       return( 
       <KeyboardAvoidingView
            style={{flex:1}}
            behavior='position'
        >
            <View style={{marginBottom: 20}}>
                <Text style={{fontSize: 20, marginBottom:5}}>Hi, User Name</Text>
                <Text>What are you planning for today ?</Text>
            </View>
            <View>
                <Text>Select your interests</Text>
                <ScrollView  horizontal>
                    {this.state.AvatarArr[0].avatar}
                    {this.state.AvatarArr[1].avatar}
                    {this.state.AvatarArr[2].avatar}
                    {this.state.AvatarArr[3].avatar}
                </ScrollView>
                    <Text style={{marginLeft: 25, marginTop: 25}}>
                        Search Destination {'\n'}
                        Nasr City
                    </Text>
            </View>

            <View style={{marginTop:40}}>
                    <TextInput
                        style={{marginBottom: 5,height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingLeft: 5}}
                        onChangeText={(text) => this.setState({text0: text})}
                        value={this.state.text0}
                        placeholder='Movies'
                        underlineColorAndroid='transparent'
                        editable={this.state.Clicked[0]}
                    />
                    <TextInput
                        style={{marginBottom: 5, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingLeft: 5}}
                        onChangeText={(text) => this.setState({text1: text})}
                        value={this.state.text1}
                        placeholder='Coffee'
                        underlineColorAndroid='transparent'
                        editable={this.state.Clicked[1]}
                    />
                    <TextInput
                        style={{marginBottom: 5, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingLeft: 5}}
                        onChangeText={(text) => this.setState({text2: text})}
                        value={this.state.text2}
                        placeholder='Shopping'
                        underlineColorAndroid='transparent'
                        editable={this.state.Clicked[2]}
                    />
                   <TextInput
                        style={{marginBottom: 5, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingLeft: 5}}
                        onChangeText={(text) => this.setState({text3: text})}
                        value={this.state.text3}
                        placeholder='Food'
                        underlineColorAndroid='transparent'
                        editable={this.state.Clicked[3]}
                        
                    />
                     <Button
                title="Solid Button"
                onPress={()=>{this.onPress()}}
            />
            </View>
            
           
        </KeyboardAvoidingView>
        )
    }
}