import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class Splash extends Component{
	render(){
		return(
			<View style={styles.container}>
			
			<Image style={styles.image} source={require('./img/splash.jpg')}>
			<Text style={styles.loader}>Loading</Text>
			</Image>
			</View>
			);

	}
}


const styles = StyleSheet.create({
  container: {
  	flex: 1,
  	backgroundColor:"#fff",
  	alignItems:'center',
  },
  image:{
  	width:490
  },
  loader:{
  	textAlign:'center',
  	fontSize:30,
  },
});