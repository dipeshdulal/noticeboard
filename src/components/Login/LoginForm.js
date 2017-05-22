import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
    	<View style={styles.container}>
       <TextInput
       style={styles.input}
       placeholder='Username'
       returKeyType="next"
       keyboardType='email-address'
       />

       <TextInput
       style={styles.input}
       placeholder='Password'
       secureTextEntry={true}
		/>
		
		<TouchableOpacity style={styles.buttonLogin}>
		<Text style={styles.buttonText}>Login</Text>
		</TouchableOpacity>
		</View>
    );
  }
}


const styles = StyleSheet.create({
input:{
	height:40,
marginBottom:20,
backgroundColor:'rgba(255,255,255,0.2)',
color:'#fff',
},
buttonLogin:{
backgroundColor:'#bdc3c7',
paddingVertical:15,
},
buttonText:{
fontSize:20,
textAlign:'center',
color:"#fff",
fontWeight:'700',
},
});