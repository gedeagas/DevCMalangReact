import React, { Component } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	TextInput,
	Animated,
	Easing,
	ScrollView,
	TouchableOpacity
} from "react-native";


export default class QuickStartComp extends Component {
 
    constructor(props) {
		super(props);
		this.state = {
			text: "",
		};
    }

    
    
     render() {
		return (
            <View style={styles.container}>
                <Text style={styles.titleStyle}>{this.props.title}</Text>
            </View>
        )
     }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4267B2',
        padding:10,
        height: 150,
        width: 150,
        marginRight: 12,
    },

    titleStyle: {
        color: "#fff",
        fontSize: 17,
        fontFamily: 'Freight-Sans-Medium',

    }
  
});