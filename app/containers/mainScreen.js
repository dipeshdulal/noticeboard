// here hoes the main screen container

import React, { Component } from 'react';
import { Container, Drawer, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import DrawerContent from './drawerContent';

let drawer;

class MainScreen extends Component{
    
    constructor(props){
        super(props);
    }

    closeDrawer(){
        drawer._root.close();
    }

    openDrawer(){
        drawer._root.open();
    }

    render(){
        const { navigation } = this.props;
    	return (
            <Drawer 
                content={<DrawerContent navigator={navigation} />}
                ref={(ref) => { drawer = ref; }}
                onClose={this.closeDrawer}
                openDrawerOffset={0.3} >
            		<Container>
                        <Header noShadow={false} style={{backgroundColor: "#273c51"}}>
                            <Left>
                                <Button transparent onPress={this.openDrawer}>
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
            </Drawer>
    	);
    }
}

export default connect((state) => ({

}), (dispatch) => ({

}))(MainScreen);
