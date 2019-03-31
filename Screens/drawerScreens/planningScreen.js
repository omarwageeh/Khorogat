import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header, Icon, Button } from 'react-native-elements';
import AvatarContainer from '../../components/AvatarContainer';


//TODO fix the space between icons in ScrollView

export default class Options extends React.Component{
    state={
        AvatarArr: [],
        Clicked: [],
        borderWidth: 3
    }

    clicked = ({text})=>{
        this.setState({Clicked: [...text]})
    }
    
  


    componentDidMount(){

       this.setState({AvatarArr: [...
       [<AvatarContainer text= 'Movies' borderColor='limegreen' size='large' href='https://cdn2.iconfinder.com/data/icons/maki/100/cinema-256.png' onPress={this.clicked}/>,
       <AvatarContainer text='Coffee' borderColor='limegreen' size='large' href='https://cdn0.iconfinder.com/data/icons/office-239/64/hot-coffee-cup-mug-capucino-256.png'/>,
       <AvatarContainer text='Shopping' borderColor='limegreen' size='large' href='https://cdn1.iconfinder.com/data/icons/feather-2/24/shopping-cart-256.png'/>,
       <AvatarContainer text='Food' borderColor='limegreen' size='large' href='https://cdn2.iconfinder.com/data/icons/food-drink-10/24/food-drink-36-256.png'/>]]}) 
       
    }
   
    render(){
       return( 
       <View>
            <View style={{marginBottom: 20}}>
                <Text style={{fontSize: 20, marginBottom:5}}>Hi, User Name</Text>
                <Text>What are you planning for today ?</Text>
            </View>
            <View>
                <Text>Select your interests</Text>
                <ScrollView horizontal>
                    {this.state.AvatarArr}
                </ScrollView>
            </View>
        </View>
        )
    }
}