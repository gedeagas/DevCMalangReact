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

let { height, width } = Dimensions.get("window");

import QuickStartComp from '../components/quickstart_comp';
import NewsComp from '../components/news_comp';
import storage from '../models/storage';



export default class HomeView extends Component {
    static navigationOptions = {
        title: 'Welcome',
        header: null
    };
    constructor(props) {
		super(props);
		this.state = {
            text: "",
            user: {},
		};
    }

    componentWillMount = () => {
        let tmpThis = this;

         // load user
            storage.load({
            key: 'user',
            }).then(data => {
            console.log(`User found: ${data.user}`);
            this.setState({ user: data.user });
            }).catch(err => {
            console.log(`No user found ${err.message}`);
            });
    };

    

    


    
    
     render() {
        const { navigate } = this.props.navigation;
		return (
            
            <ScrollView
                style={styles.container}
            >    
                <StatusBar
                  backgroundColor="#3A5999"
                  barStyle="light-content"
                />
                <View
                style={{
                    flexDirection: 'row',
                    marginTop:15,
                    marginBottom:25,
                }}
                >
                    <Image 
                    style={{
                        height:59,
                        width:59,
                        borderRadius: 29.5,
                        marginRight:10,

                    }}
                    source={{uri: this.state.user.profileImageUri}}

                    />
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameTitle}>{this.state.user.firstName}</Text>
                    </View>
                </View>

                <Text style={styles.subTitle}>Quick Start</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.quickStartContainer}>
                    <TouchableOpacity
                    onPress={() =>
                        navigate('Meetup', { name: 'Jane' })
                    }
                    > 
                        <QuickStartComp title={"Monthly Meetup Schedule"}/>
                    </TouchableOpacity>
                    <QuickStartComp title={"Special Event Schedule"}/>
                    <QuickStartComp title={"Developer Circle Finder"}/>

                </ScrollView>

                <View
                style={{marginRight:18,paddingTop:15}}
                >
                <Text style={styles.subTitle}>News Feed</Text>
                    <NewsComp image={require('../images/1.jpg')} title={"Malang Developer Circle On RISE  Hong Kong !"} content={"See who's there on the screen?  DevC Malang is proudly mentioned by Konstantinos Papamiltiadis...#RISECONF #RISE #HongKong"}/>
                    <NewsComp image={require('../images/2.jpeg')} title={"React Native Workshop at University of Brawijaya"} content={"Workshop react native yang di selengarakandi Universitas Brawijaya telah berjalan dengan lancar.."}/>
                    <NewsComp image={require('../images/3.png')} title={"React Native Workshop at University of Brawijaya"} content={"Workshop react native yang di selengarakandi Universitas Brawijaya telah berjalan dengan lancar.."}/>

                </View>
            </ScrollView>
        )
     }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3A5999',
        paddingLeft:18,
        paddingTop:10,
        height: height,
        width: width,

    },

    subTitle: {
        fontSize: 20,
        color: '#fff',
        fontFamily: 'Freight-Sans-Bold',

    },
    nameTitle: {
        fontSize: 17,
        color: '#fff',
        fontFamily: 'Freight-Sans-Medium',
    },

    nameContainer: {
        justifyContent:'center'
    },
    quickStartContainer: {
        marginTop:15
    }
  
});