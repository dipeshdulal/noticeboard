/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import * as firebase from "firebase";
import Splash from './Splash'
import Login from './src/components/Login/Login'

export default class noticeboard extends Component{
render(){
  return(
   
      <Login/>
    );

}

}

AppRegistry.registerComponent('noticeboard', () => noticeboard);
