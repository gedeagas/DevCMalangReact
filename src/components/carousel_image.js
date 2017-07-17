import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	Image,
} from "react-native";


export default class CarouselPicture extends Component {
	render() {
		return (
			<Image
			style={styles.CarouselItemStyle}
			source={this.props.source}
			/>
		);
	}
	
}


const styles = StyleSheet.create({
	
	CarouselItemStyle: {
		width: 222,
		height: 168,
		borderRadius: 5,
		marginTop: 25
	},

});
