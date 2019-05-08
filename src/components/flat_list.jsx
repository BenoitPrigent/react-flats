import React, { Component } from 'react';

import Flat from './flat.jsx'

class FlatList extends Component {

  renderList = () => {
    return (
      this.props.flats.map((flat) => {
        return (
          <Flat
            key={flat.lat}
            description={flat.name}
            price={flat.price}
            lat={flat.lat}
            lng={flat.lng}
            priceCurrency={flat.priceCurrency}
            image={flat.imageUrl}
            selected={flat.lat === this.props.selectedLat}
            selectFlat={this.props.selectFlat}
          />
        )
      })
    )
  }

  render() {
    return (
      <div className='flat-list'>
        {this.renderList()}
      </div>
    )
  };
};


export default FlatList
