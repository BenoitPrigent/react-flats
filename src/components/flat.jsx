import React, { Component } from 'react';

class Flat extends Component {

  render() {

    const cardStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.image})`
    }

    return (
      <div className="card" style={cardStyle}>
        <div className="card-category">{this.props.price} {this.props.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.description}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )

  };

};

export default Flat

{{ cursor: "pointer" }}
