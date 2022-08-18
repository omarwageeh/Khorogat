import React from 'react';
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView  } from 'react-native';
import { Header, Icon, Button} from 'react-native-elements';
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
        text4: '',
        geoLocation: '',
    }
   
    clicked = (id)=>{
        click = this.state.Clicked;
        click[id] = !click[id];
        this.setState({Clicked: [...click]})
    }
    
  
    onPress = ()=>{
        text = [this.state.text0, this.state.text1, this.state.text2, this.state.text3, this.state.text4]
        send = []
      //  if(this.state.Clicked[0])
      //      send.push({Movies: text[0]})
      //  if(this.state.Clicked[1])
      //      send.push({Coffee: text[1]})
      //  if(this.state.Clicked[2])
       //     send.push({Shopping: text[2]})
      //  if(this.state.Clicked[3])
      //      send.push({Food: text[3]})
      
        send={
            details:[text[0], text[1], text[2], text[3], text[4]], 
            location:'NasrCity'
        }

    //    fetch('http://192.168.1.9:9000/api/contact', {
    //            method: 'POST',
    //            body: JSON.stringify(send),
    //            headers:{
    //              'Content-Type': 'application/json'
    //            }
    //         }).then((res)=> {return(res.json())}).then((res)=>{console.log(res),this.props.navigation.navigate('responseScreen', {res: res})}).catch()
            
        
        //this.props.navigation.navigate('responseScreen', {hi:'hi'})
        this.props.navigation.navigate('responseScreen')
        //this._getGeoLocationAsync()
     }


    _getGeoLocationAsync = async () => {
        let location = await Expo.Location.geocodeAsync('')
        this.setState({text1: JSON.stringify(location)})
    }

    componentWillMount(){

       this.setState({AvatarArr: [...
       [{id:0, avatar: <AvatarContainer text= 'Movies' borderColor='limegreen'  size='large' img={require('./../../assets/New/Movies.jpg')} onPress={()=>this.clicked(0)}/>},
       {id:1, avatar:<AvatarContainer text='Coffee' borderColor='limegreen'  size='large' img={require('./../../assets/New/Coffee.png')} onPress={()=>this.clicked(1)}/>},
       {id:2, avatar: <AvatarContainer text='Shopping' borderColor='limegreen'  size='large' img={require('./../../assets/New/Shopping.jpg')} onPress={()=>this.clicked(2)}/>},
       {id:3, avatar: <AvatarContainer text='Food' borderColor='limegreen'  size='large' img={require('./../../assets/New/Food.png')} onPress={()=>this.clicked(3)}/>}]]}) 
       
    }
   
    render(){
       return( 
       <KeyboardAvoidingView
            style={{flex:1, paddingHorizontal: 5}}
            behavior='position'
        >
            <View style={{marginBottom: 20}}>
                <Text style={{fontSize: 18, marginBottom:5}}>Hi</Text>
                <Text style={{fontSize: 18, marginBottom:5}}>What are you planning for today ?</Text>
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
                    <TextInput
                        style={{marginBottom: 5, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, paddingLeft: 5}}
                        onChangeText={(text) => this.setState({text4: text})}
                        value={this.state.text4}
                        placeholder='Total'
                        underlineColorAndroid='transparent'
                        
                    />
                    <Button
                            title="Find me a Plan"
                            titleStyle={{ fontWeight: "700" }}

                            buttonStyle={{
                                backgroundColor: "black",
                                width: this.props.width ,
                                height: 40,
                                marginTop: 20,
                                borderColor: "grey",
                                borderWidth: 0,
                                borderRadius: 20,
                            }}
                            onPress={()=>this.onPress()}
                        />
            </View>
            
           
        </KeyboardAvoidingView>
        )
    }
}