/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Geocoder from 'react-native-geocoding';

export default class Distance extends Component {
	constructor(props) {
		super(props);

		this.state = {
			latCurrent: null,
			longCurrent: null,
			errorCurrent: null,
			//For Location
			latLocation: null,
			longLocation: null,
			errorLocation: null,

			distanceTwoValue: 0,
		};
	}

	componentWillMount() {
		this.getCurrentData();
		this.getLocationData();
		this.distanceTwoPoint(
			this.state.latCurrent,
			this.state.longCurrent,
			this.state.latLocation,
			this.state.longLocation
		);
	}

	/*
        This getCurrentData function get the current location
    */

	componentWillUnmount() {
		navigator.geolocation.clearWatch(this.watchId);
	}

	getCurrentData() {
		this.watchId = navigator.geolocation.getCurrentPosition(
			position => {
				console.log(position);
				this.setState({
					latCurrent: position.coords.latitude,
					longCurrent: position.coords.longitude,
					errorCurrent: null,
				});
			},
			error => this.setState({ error: error.message }),
			{ enableHighAccuracy: false, timeout: 200000, maximumAge: 0 }
		);
	}

	/*
       This getLocationData function get specific location latitude & longitude
       Geocoder.from("Uttara") =>here "Uttara is location name"
    */

	getLocationData() {
		Geocoder.init('AIzaSyBQ2S5Ml2XIzBr-lt_-wa9PecBxOzdlH3U');
		Geocoder.from('Chittagong')
			.then(json => {
				const location = json.results[0].geometry.location;
				console.log(location);
				this.setState({ latLocation: location.lat, longLocation: location.lng });
			})
			.catch(error => console.warn(error));
	}

	/*
        distanceTwoPoint function measure two location distance
    */

	distanceTwoPoint = () => {
		const radlatCureent = Math.PI * (this.state.latCurrent / 180);
		const radLatLocation = Math.PI * (this.state.latLocation / 180);
		const theta = this.state.longCurrent - this.state.longLocation;
		const radtheta = Math.PI * (theta / 180);
		let distance =
			Math.sin(radlatCureent) * Math.sin(radLatLocation) +
			Math.cos(radlatCureent) * Math.cos(radLatLocation) * Math.cos(radtheta);
		distance = Math.acos(distance);
		distance *= 180 / Math.PI;
		distance *= 60 * 1.1515;
		distance *= 1.609344; //kilometer

		console.log(distance);

		this.setState({
			distanceTwoValue: distance,
		});
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to Location!</Text>
				<Text>Current Location</Text>
				<Text>{this.state.latCurrent}</Text>
				<Text>{this.state.longCurrent}</Text>
				<Text>{this.state.errorCurrent}</Text>

				<Text>Distance Location</Text>
				<Text>{this.state.latLocation}</Text>
				<Text>{this.state.longLocation}</Text>

				<Text>Distance between two location</Text>

				<TouchableOpacity onPress={this.distanceTwoPoint}>
					<Text>Click me</Text>
				</TouchableOpacity>
				<Text>{this.state.distanceTwoValue ? this.state.distanceTwoValue : null}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
});
