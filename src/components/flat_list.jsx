import React, { Component } from 'react';

import Flat from './flat.jsx'
import flats from '../../data/flats.js'

class FlatList extends Component {


  renderList = () => {
    console.log(flats);
    return <h1> Coucou </h1>
  }


  render() {
    return (
      <Flat />
    )
  };
};


export default FlatList
