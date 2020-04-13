import React from 'react';

export default class ItemRestaurants extends React.Component {
  render(){
    return(
      <>
        <img
          className="restaurant-img"
          src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg"
          alt="some image"/>
          <h1>Restaurant Name</h1>
        <button className='button_marks_favorite'>&#10084;</button>
        <p>test neighborhood</p>
        <p>test address</p>
        <a href="#">View details</a>
      </>
    )
  }
}