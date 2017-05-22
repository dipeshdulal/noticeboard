
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import LoginForm from './LoginForm';
export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../../../img/icon_1.png')}/>
      <Text style={styles.aboutApp}>A noticeboard </Text>
      </View>
      <View style={styles.formContainer}>
      <LoginForm/>
      </View>
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7f8c8d',
  },
 logoContainer: {
    alignItems: 'center',
    margin: 10,
    justifyContent:'center',
  },
  logo:{
    width:100,
    height:100,
    opacity:0.9,
  },
  aboutApp: {
    textAlign: 'center',
    marginTop: 5,
  },
});