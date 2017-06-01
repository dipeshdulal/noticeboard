// this file contains the content for the drawer
import React, { Component } from 'react';
import { Text, View,TouchableOpacity,Alert} from 'react-native';
import { Container, Content ,List,ListItem ,Icon,Left,Body,Right,Thumbnail} from 'native-base';
import { Row, Col, Grid } from 'react-native-easy-grid';

let styles;

const DrawerContent = (props) => {
	const { container } = styles;
	return (
		<Container style={container}>
			<Content>
				<View style={container}>
					<List>
						
						<ListItem avatar>
						<Left>
						<Thumbnail square size ={80} source={require("../img/user.png")} />
						</Left>
						<Body>
						<Text style={styles.user_name}>User_name</Text>
						</Body>
						</ListItem>
						<ListItem button onPress={() => Alert.alert("item clicked")}>
						<Left>
						<Icon name='home' />
						</Left>
						<Body>
						<Text>Home</Text>
						</Body>
						<Right>
						<Icon name='arrow-forward'/>
						</Right>
						</ListItem>
						<ListItem button onPress={() => Alert.alert("item clicked")}>
						<Left>
						<Icon name='person' />
						</Left>
						<Body>
						<Text>Notice Board</Text>
						</Body>
						<Right>
						<Icon name='arrow-forward'/>
						</Right>
						</ListItem>
						<ListItem button onPress={() => Alert.alert("item clicked")}>
						<Left>
						<Icon name='person' />
						</Left>
						<Body>
						<Text>To - Do List</Text>
						</Body>
						<Right>
						<Icon name='arrow-forward'/>
						</Right>
						</ListItem>
					</List>
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
	},
	user_name:{
		fontSize:30,
	}
}

export default DrawerContent;