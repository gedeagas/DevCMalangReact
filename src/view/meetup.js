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

let { height, width } = Dimensions.get("window");

export default class HomeView extends Component {
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

    
    
     render() {
		return (
            <ScrollView
                style={}
            >    

            </ScrollView>
        )
     }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3A5999',
        height: height,
        width: width,
    },
  
});