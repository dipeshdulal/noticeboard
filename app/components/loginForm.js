// the login form component
import React, { Component } from 'react';
import { typing_username, typing_password } from '../actions/login';
import { Form, Icon, Input, Button, Text, Item } from 'native-base';
import { connect } from 'react-redux';
import { Col, Row, Grid } from 'react-native-easy-grid';

let styles;

const LoginForm = (props) => {
	const { textinput, icon, inputStyle, button, facebookIcon } = styles;
	const { usernameChange, passwordChange, onSubmit, onFacebookSubmit } = props;
	return (
		<Form>
                <Item rounded style={textinput}>
                  <Icon active name='ios-person' style={icon}/>
                  <Input placeholder='Email' style={inputStyle} placeholderTextColor="#f1f1f1" selectionColor="#3a77d8" onChangeText={usernameChange}/>
                </Item>
                <Item rounded style={textinput}>
                  <Icon active name='ios-lock' style={icon}/>
                  <Input placeholder='Password' style={inputStyle} type="password" secureTextEntry={true} selectionColor="#3a77d8" placeholderTextColor="#f1f1f1" onChangeText={passwordChange}/>
                </Item>
                  <Grid>
                  	  <Col size={3}>
		                  <Button rounded success style={button} onPress={onSubmit}>
		                    <Text style={{marginRight: 10}}>Login</Text>
		                    <Icon active name='ios-arrow-dropright' style={icon} />
		                  </Button>
	                  </Col>
	                  <Col size={5} >
	                  <Button rounded primary style={button} onPress={onFacebookSubmit}>
	                  	<Icon active name='logo-facebook' style={icon} />
	                    <Text style={{marginLeft: 10}}>Login with Facebook</Text>
	                  </Button>
	                  </Col>
                  </Grid>
        </Form>
	);
}

styles = {
  textinput: {
    paddingLeft: 20,
    marginTop: 20
  },
  inputStyle: {
    color: "white",
  },
  button: {
    marginTop: 20,
  },
  icon: {
    color: "white"
  },
  facebookIcon: {
  	paddingRight: 50
  }
};

export default connect((state) => ({}), (dispatch) => ({
	usernameChange: (text) => {
		dispatch(typing_username(text))
	},
	passwordChange: (text) => {
		dispatch(typing_password(text))
	}
}) )(LoginForm);