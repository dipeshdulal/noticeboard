/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry, Text } from 'react-native';
 import { Main } from './app/containers/main.js';
 import { Provider } from 'react-redux';
 import configureStore from './configureStore';
 import firebase from 'firebase';

 import { firebaseConfig } from './config';

 firebase.initializeApp(firebaseConfig);

 const store = configureStore();
 
 export default class noticeboard extends Component{
 	render(){
 		return (
 			<Provider store={store}>
	 			<Main />
 			</Provider>
 			);	
 	}
 	
 }

 AppRegistry.registerComponent('noticeboard', () => noticeboard);
