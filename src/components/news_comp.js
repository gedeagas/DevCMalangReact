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

let { height, width } = Dimensions.get("window");


export default class NewsComp extends Component {
 
    constructor(props) {
		super(props);
		this.state = {
			text: "",
		};
    }

    
    
     render() {
		return (
            <Image 
            style={styles.container}
            source={this.props.image}

            >
                <View
                style={{
                    flex:4.4,
                    
                }}    
                >
                </View>

                <View
                style={{
                    flex:7.6,
                    backgroundColor:"rgba(35, 53, 91, .7)",
                    padding:10,
                    justifyContent:'center'

                }}
                >
                    <Text style={styles.titleStyle}>{this.props.title}</Text>
                    <Text style={styles.contentStyle}>{this.props.content}</Text>
                </View>
                
            </Image>
        )
     }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4267B2',
        height: 150,
        width: width-36,
        marginTop: 10,
        zIndex:1,
        flexDirection:'row',
        justifyContent:'flex-start'
    },

    titleStyle: {
        color: "#fff",
        fontSize: 12,
        fontFamily: 'Freight-Sans-Bold',
        marginBottom:4,

    },

    contentStyle: {
        color: "#fff",
        fontSize: 10,
        fontFamily: 'Freight-Sans-Medium',

    }
  
});