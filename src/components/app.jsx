import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import flats from '../../data/flats.js';
import FlatList from './flat_list.jsx';
import Marker from './marker.jsx';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lat: flats[0].lat,
      lng: flats[0].lng
    }
  }

  selectFlat = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    })
  }

  center() {
    return {
      lat: this.state.lat,
      lng: this.state.lng
    }
  }

  render() {
    return (
      <div>
        <FlatList
          flats={flats}
          selectFlat={this.selectFlat}
          selectedLat={this.state.lat}
        />
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}
          >
            <Marker lat={this.state.lat} lng={this.state.lng}
            />
          </GoogleMapReact>
        </div>
      </div>
    );

  }
};


export default App
