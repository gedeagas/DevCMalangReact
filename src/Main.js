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
import MeetupView from './view/meetup';
import storage from './models/storage';
import UserModel from './models/user';


const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} = FBSDK;
let { height, width } = Dimensions.get("window");


export default class MainView extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };
    constructor(props) {
		super(props);
		this.state = {
			text: "",
		};
    }
    
    componentWillMount() {
        

    }

    goToHomePage(){
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
            <View style={styles.container}>
                 <StatusBar
                  backgroundColor="#3A5999"
                  barStyle="light-content"
                />

                <Image 
                style={{
                    height:121,
                    width:118,
                    alignSelf:"center",
                    marginTop:15,
                }}
                source={require('./images/logo.png')}

                />

                <Image 
                style={{
                    height:29,
                    width:193,
                    alignSelf:"center",
                    marginTop:15,
                    marginBottom:40,
                }}
                source={require('./images/devc.png')}

                />    
                
                <View
                style={{
                    alignSelf:"center"
                }}>
                <LoginButton
                publishPermissions={["publish_actions"]}
                onLoginFinished={
                    (error, result) => {
                    if (error) {
                        alert("login has error: " + result.error);
                    } else if (result.isCancelled) {
                        alert("login is cancelled.");
                    } else {
                        let tmpThis = this;

                        AccessToken.getCurrentAccessToken().then(data => {
                            if (!data) {
                            console.warn('No access token available');
                            } else {
                                console.log(`Got access token ${data.accessToken}`);
                                console.log(`Permissions ${data.permissions}`);
                                const graphPath = '/me?fields=id,first_name,picture{url}';
                                const requestHandler = (error, result) => {
                                    if (!error) {
                                        console.log(
                                            `Result is ${result.id}, ${result.first_name}, ${result
                                            .picture.data.url}`
                                        );
                                        const user = new UserModel(
                                            result.id,
                                            result.first_name,
                                            result.picture.data.url
                                        );
                                        console.log('USERRRR', user);
                                        storage.save({
                                            key: 'user',
                                            data: {
                                            user: {
                                                id: user.id,
                                                firstName: user.firstName,
                                                profileImageUri: user.profileImageUri
                                            }
                                            }
                                        });

                                        tmpThis.goToHomePage();
                                    }
                                }

                                const userInfoRequest = new GraphRequest(
                                    graphPath,
                                    null,
                                    requestHandler
                                );
                                new GraphRequestManager().addRequest(userInfoRequest).start();


                            }
                        });
                        
                    }
                    }
                }
                onLogoutFinished={() => alert("logout.")}/>
                </View>
                <TouchableOpacity onPress={this.goToHomePage.bind(this)}> 
                    <Text
                    style={{
                        alignSelf:"center",
                        color:"#fff",
                        marginTop:15
                    }}
                    >I don't have a facebook account</Text>
                </TouchableOpacity>
                
            </View>

        );
    }
    

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3A5999',
        padding:25,
        height: height,
        width: width,

    },

    subTitle: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Freight-Sans-Bold',

    },

    quickStartContainer: {
        marginTop:15
    }
  
});

const fbdevc = StackNavigator(
    {
    Main: { screen: MainView },
    Home: { screen: HomeView },
    Meetup: { screen: MeetupView},
    },{ 
        headerMode: 'screen' 
    } 
);

AppRegistry.registerComponent('fbdevc', () => fbdevc);
