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


export default class NewsComp extends Component {
 
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
        marginTop: 17,
        zIndex:1,
        flexDirection:'row',
        justifyContent:'flex-start'
    },

    titleStyle: {
        color: "#fff",
        fontSize: 17,
        fontFamily: 'Freight-Sans-Medium',

    }
  
});