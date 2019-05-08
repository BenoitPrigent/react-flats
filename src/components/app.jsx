import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import flats from '../../data/flats.js';

import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedFlatCenter : {
        lat: 48.884211,
        lng: 2.34689
      }
    }
  }

  selectFlat = (lat, lng) => {
    this.setState({
      lat: lat,
      lng: lng
    })
  }

  static defaultProps = {
    center: {
      lat: 48.884211,
      lng: 2.34689
    },
    zoom: 11
  };

  render() {
    return (
      <div>
        <FlatList flats={flats} selectFlat={this.selectFlat}/>
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCsMgddgj8A7IyB9BxM2fm5QxE584Ctdxc" }}
            defaultCenter={this.props.center}
            defaultZoom={11}
          >
            <Marker
            lat={this.state.lat}
            lng={this.state.lng}
            text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    );

  }
};


export default App
