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

import QuickStartComp from '../components/quickstart_comp';
import NewsComp from '../components/news_comp';



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
                style={styles.container}
            >    
                <StatusBar
                  backgroundColor="#3A5999"
                  barStyle="light-content"
                />
                <Text style={styles.subTitle}>Quick Start</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.quickStartContainer}>
                    <QuickStartComp title={"Monthly Meetup Schedule"}/>
                    <QuickStartComp title={"Special Event Schedule"}/>
                    <QuickStartComp title={"Developer Circle Finder"}/>

                </ScrollView>

                <View
                style={{marginRight:25,paddingTop:15}}
                >
                <Text style={styles.subTitle}>News Feed</Text>
                    <NewsComp title={"Developers"} />
                    

                </View>
            </ScrollView>
        )
     }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3A5999',
        paddingLeft:25,
        paddingTop:10,
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