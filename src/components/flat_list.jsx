import React, { Component } from 'react';

import Flat from './flat.jsx'

class FlatList extends Component {

  renderList = (props) => {
    return (
      props.flats.map((flat) => {
        <Flat
          key={flat.name}
          description={flat.name}
          price={flat.price}
          lat={flat.lat}
          priceCurrency={flat.priceCurrency}
        />
      })
    )
  }

  render() {
    return (
      this.renderList
    )
  };
};


export default FlatList
