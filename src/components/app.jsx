import React, { Component } from 'react';


import FlatList from './flat_list.jsx'
import flats from '../../data/flats.js'


class App extends Component {

  render() {
    return (
      <div>
        <div className="flat-list">
          <FlatList flats={flats} />
        </div>
        <div className="map-container">

        </div>
      </div>
    );

  }
};


export default App
