import React, { Component } from 'react';

import Flat from './flat.jsx'

class FlatList extends Component {

  renderList = () => {
    return (
      this.props.flats.map((flat) => {
        return (<Flat
          key={flat.name}
          description={flat.name}
          price={flat.price}
          lat={flat.lat}
          priceCurrency={flat.priceCurrency}
          image={flat.imageUrl}
        />)
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
