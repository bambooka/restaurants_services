import React from 'react';

export default class ItemRestaurants extends React.Component {
  render(){
    return(
      <>
        <img
          className="restaurant-img"
          src={`./img/${this.props.restaurant.photograph}.jpg`}
          alt="some image"/>
          <h1>{this.props.restaurant.name}</h1>
        <button className='button_marks_favorite'>&#10084;</button>
        <p>{this.props.restaurant.neighborhood}</p>
        <p>{this.props.restaurant.address}</p>
        <a href="#">View details</a>
      </>
    )
  }
}