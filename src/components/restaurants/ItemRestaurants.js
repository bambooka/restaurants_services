import React from 'react';
import {Link} from "react-router-dom";

export default class ItemRestaurants extends React.Component {
  render(){
    return(
      <>
        <img
          className="restaurant-img"
          src={`../../img/${this.props.restaurant.photograph}.jpg`}
          alt="some image"/>
          <h1>{this.props.restaurant.name}</h1>
        <button className='button_marks_favorite'>&#10084;</button>
        <p>{this.props.restaurant.neighborhood}</p>
        <p>{this.props.restaurant.address}</p>
        <Link to={{pathname: `${this.props.restaurant.id}`, state: {restaurant: this.props.restaurant}}}>View Details</Link>
      </>
    )
  }
}