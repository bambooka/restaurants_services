import React from 'react';

export default class Detail extends React.Component {
  render() {
    return (
      <>
        {
          this.props.restaurant ?
          <section id='restaurant-container'>
            <h2 id='restaurant-name'>{this.props.restaurant.name}</h2>
            <img id='restaurant-img' src={`../../img/${this.props.restaurant.photograph}.jpg`} alt='detail image'/>
            <p id='restaurant-cuisine'>{this.props.restaurant.cuisine_type}</p>
            <p id='restaurant-address'>{this.props.restaurant.address}</p>
            <p id='restaurant-hours'>{this.props.restaurant.name}</p>
          </section> : null
        }
        </>
    )
  }
}