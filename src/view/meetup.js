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

export default class MeetupView extends Component {
    static navigationOptions = {
        title: 'Monthly Meetup Schedule',
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
                style={{
                    color: "#fff"
                }}
            >    
                <Text>SATU HATI</Text>
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