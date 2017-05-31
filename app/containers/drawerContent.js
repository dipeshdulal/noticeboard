// this file contains the content for the drawer
import React, { Component } from 'react';
import { Text, View} from 'react-native';
import { Container, Content } from 'native-base';
import { Row, Col, Grid } from 'react-native-easy-grid';

let styles;

const DrawerContent = (props) => {
	const { container } = styles;
	return (
		<Container style={container}>
			<Content>
				<View style={container}>
					<Text>Hello from Drawer</Text>
				</View>
			</Content>
		</Container>
		);
}

styles = { 
	container: {
		backgroundColor: "white",
		padding: 10,
		flex: 1
	}
}

export default DrawerContent;