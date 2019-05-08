import React, { Component } from 'react';

import FlatList from './flat_list.jsx';
import flats from '../../data/flats.js';

import GoogleMapReact from 'google-map-react';
import Marker from './marker.jsx';


class App extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div>
        <FlatList flats={flats} />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCsMgddgj8A7IyB9BxM2fm5QxE584Ctdxc" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
    );

  }
};


export default App
