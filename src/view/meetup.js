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
let lebarSlider = width;
let lebarItem = 222;
import Carousel from '../components/carousel_comp';
import CarouselPicture from '../components/carousel_image';

export default class MeetupView extends Component {
  
    static navigationOptions = {
        title: 'Monthly Meetup Schedule',
        headerTitleStyle: {
            color: '#fff',
            fontFamily: 'Freight-Sans-Bold',
            fontWeight: '200',
        },
        headerStyle: {
            backgroundColor: '#4267B2',

        },
        headerTintColor: '#fff',

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
                <Carousel
						style={styles.carouselContainer}
						ref={carousel => {
							this._carousel = carousel;
						}}
						sliderWidth={lebarSlider}
						itemWidth={lebarItem}
						firstItem={1}
					>
						<CarouselPicture source={require("../images/1.jpg")}/>
						<CarouselPicture source={require("../images/2.jpeg")}/>
						<CarouselPicture source={require("../images/3.png")}/>
				

						
				</Carousel>
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