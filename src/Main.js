import React, { Component } from "react";
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	StatusBar,
	Image,
	Dimensions,
	TextInput,
	Animated,
	Easing,
	ScrollView,
	TouchableOpacity
} from "react-native";

import {
  StackNavigator,
  NavigationActions
} from 'react-navigation';


import HomeView from './view/home';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;
let { height, width } = Dimensions.get("window");


export default class MainView extends Component {
    constructor(props) {
		super(props);
		this.state = {
			text: "",
		};
    }
    
    componentWillMount() {
        const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Home'})
        ]
        })
        this.props.navigation.dispatch(resetAction)


    }

    render() {
		return (
            <View>  
                <Text>Hello World</Text>
                <LoginButton
                publishPermissions={["publish_actions"]}
                onLoginFinished={
                    (error, result) => {
                    if (error) {
                        alert("login has error: " + result.error);
                    } else if (result.isCancelled) {
                        alert("login is cancelled.");
                    } else {
                        AccessToken.getCurrentAccessToken().then(
                        (data) => {
                            alert(data.accessToken.toString())
                        }
                        )
                    }
                    }
                }
                onLogoutFinished={() => alert("logout.")}/>
            </View>

        );
    }
    

}

const fbdevc = StackNavigator(
    {
    Main: { screen: MainView },
    Home: { screen: HomeView }
    },{ 
        headerMode: 'screen' 
    } 
);

AppRegistry.registerComponent('fbdevc', () => fbdevc);
