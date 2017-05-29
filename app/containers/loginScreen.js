import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Button, Text, Form, Input, Item, Label, Icon, Spinner } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux'; 
import { loginAPICall, facebookLoginCall, is_authenticated } from '../actions/login'; 
import LoginForm from '../components/loginForm';

let styles, userdata;

let oneTimeCall = (props) => {
    props.navigation.navigate("Main");
    oneTimeCall = undefined;
}

class LoginScreen extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.authenticated();
  }

  render(){
    let props = this.props;

    let lf = <Spinner size={50} style={styles.spinner}/>;
    if(this.props.state.login.authData.auth && oneTimeCall){
      // if authenticated then navigate to the main screenx
      setTimeout(() => { oneTimeCall(this.props) }, 1);
    }

    userdata = {
      username: props.state.login.username,
      password: props.state.login.password
    }

    if(props.state.login.sending){
      lf = <Spinner size={50} style={styles.spinner}/>
    }else{
      lf = <LoginForm onSubmit={props.login} onFacebookSubmit={props.facebookLogin} />
    }

    return (
      <Container style={{backgroundColor: "#273c51"}}>
          <Grid>
            <Row size={2}></Row>
            <Row size={3}>
            <Grid>
              <Col size={2}></Col>
              <Col size={4}>
                <Text style={styles.noticeboard}>NOTICEBOARD</Text>
                {lf}
              </Col>
              <Col size={2}></Col>
              </Grid>
              </Row>
              <Row size={1}></Row>
          </Grid>
      </Container>
      )
  }
}

styles = {
  noticeboard: {
    color: "white",
    fontSize: 30,
    marginBottom: 20,
    textAlign: "center"
  },
  spinner: {
    padding: 100
  }
}

function mapStateToProps(state){
  return {
    state
  }
}

function mapDispatchToProps(dispatch){
  return {
    login: () => dispatch(loginAPICall(userdata)),
    facebookLogin: () => dispatch(facebookLoginCall()),
    authenticated: () => dispatch(is_authenticated())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
