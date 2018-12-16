import React from 'react';
import { View, Button, TextInput, KeyboardAvoidingView, Picker } from 'react-native';
import styles from './styles.js';
import { Constants } from 'expo';


export default class SignupScreen extends React.Component {

    state = {
        Fname: '',
        Lname: '',
        pass: '',
        email: '',
        gender: -1,
        doB: '',
        phone: '',
    };


    handleChange = key => val => {
        this.setState({ [key]: val })
    }


    render() {
        return (
            <KeyboardAvoidingView
                style={{ flex: 1, marginTop: Constants.statusBarHeight }}
                behavior='padding'

            >
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 2 }}>
                    <TextInput
                        style={styles.inputs2}
                        placeholder='First Name'
                        value={this.state.Fname}
                        underlineColorAndroid='transparent'
                        onChange={this.handleChange('Fname')} />

                    <TextInput
                        style={styles.inputs2}
                        placeholder='Last Name'
                        value={this.state.Lname}
                        underlineColorAndroid='transparent'
                        onChange={this.handleChange('Lname')} />

                </View>

                <TextInput
                    style={styles.inputs}
                    placeholder='Email'
                    value={this.state.email}
                    underlineColorAndroid='transparent'
                    onChange={this.handleChange('email')} />

                <TextInput
                    style={styles.inputs}
                    placeholder='Password'
                    value={this.state.pass}
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChange={this.handleChange('pass')} />

                <TextInput
                    style={styles.inputs}
                    placeholder='dd/mm/yyyy'
                    value={this.state.doB}
                    underlineColorAndroid='transparent'
                    onChange={this.handleChange('doB')} />

                <Picker
                    selectedValue={this.state.gender}
                    style={{ height: 50 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ gender: itemValue })}>
                    <Picker.Item label="Specify your Gender" value="-1" />
                    <Picker.Item label="Female" value="0" />
                    <Picker.Item label="Male" value="1" />
                    <Picker.Item label="Other" value="2" />
                </Picker>

                <TextInput
                    style={styles.inputs}
                    placeholder='Phone'
                    value={this.state.phone}
                    underlineColorAndroid='transparent'
                    onChange={this.handleChange('phone')}
                    keyboardType='phone-pad'
                />

                <View style={{ margin: 5 }} >
                    <Button
                        title='Submit'
                        onPress={() => this.props.submit}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}