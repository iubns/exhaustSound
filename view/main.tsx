import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Geolocation from '@react-native-community/geolocation';

interface IState {
  latitude: string;
  longitude: string;
}

export default class MainPage extends Component {
  state: IState = {
    latitude: 'asd',
    longitude: 'asd',
  };

  private geoLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);

        this.state.latitude = latitude;
        this.state.longitude = longitude;
        console.log(latitude, longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  render() {
    return (
      <View>
        <Text>latitude: {this.state.latitude}</Text>
        <Text>latitude: {this.state.latitude}</Text>
        <TouchableOpacity onPress={this.geoLocation.bind(this)}>
          <Text> Get GeoLocation </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
