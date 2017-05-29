// the main component that combines the navigator and other screens
import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

// navigation components
import LoginScreen from './loginScreen';
import MainScreen from './mainScreen';


const navigationConfig = {
	headerMode: "none"
}

export const Main = StackNavigator({
	// Login: { screen: LoginScreen },
	Main: { screen: MainScreen }
}, navigationConfig);