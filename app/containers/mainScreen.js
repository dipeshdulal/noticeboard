// here hoes the main screen container

import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { Text } from 'react-native';
import { connect } from 'react-redux';

const MainScreen = (props) => {
	return (
		<Container>
            <Header noShadow={false} style={{backgroundColor: "#273c51"}}>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>NOTICEBOARD</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <Text> Welcome user you are authenticated! </Text>
                <Text> Now, Drawer remains to be added and ofcourse other functions </Text>
            </Content>
        </Container>
	);
}

export default connect((state) => ({

}), (dispatch) => ({

}))(MainScreen);
