import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

class Inputs extends Component {
    state = {
	fullname: '',
	mail: ''
    }
    handleFullname = (text) => {
        this.setState({ fullname: text })
    }
    handleMail = (text) => {
        this.setState({ mail: text })
    }
    register = (fullname, mail) => {
	alert(`Thank you ${fullname} for your interest in becoming a Faspay beta user. Please visit our FasPay landing page to register.`);
    }
    render(){
	return (
	    <View style = {styles.container}>
		<Text style = { styles.textColor }>Didn't Register yet? {"\n"} Please, fill the form below and become a beta user!</Text>
		<Text></Text>
		<TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
			   placeholder = "  Full name"
                           placeholderTextColor = "#808080"
                           autoCapitalize = "none"
                           onChangeText = {this.handleFullname}/>
		<TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
			   placeholder = "  Email"
			   placeholderTextColor = "#808080"
                           autoCapitalize = "none"
			   onChangeText = {this.handleMail}/>

		<TouchableOpacity
		    style = {styles.submitButton}
		    onPress = {
                        () => this.register(this.state.fullname, this.state.mail)
                    }>
                    <Text style = {styles.submitButtonText}> Register </Text>
                </TouchableOpacity>
		
	    </View>
	)
    }
} export default Inputs

const styles = StyleSheet.create({
    container: {
	paddingTop: 0,
	alignItems: 'center',
	justifyContent: 'center'
    },
    input: {
	height: 40,
	width: 250,
	margin: 15,
	color: '#228b22',
	borderColor: '#2483DB',
	borderWidth: 2,
	borderRadius: 10
    },
    submitButton: {
	backgroundColor: '#2483DB',
	padding: 10,
	margin: 15,
	height: 40,
	width: 100,
	borderRadius: 50
    },
    submitButtonText:{
	color: 'white',
	textAlign: 'center',
	fontWeight: 'bold',
    },
    textColor: {
	textAlign: 'center',
	color: '#0040FF',
    },
})
