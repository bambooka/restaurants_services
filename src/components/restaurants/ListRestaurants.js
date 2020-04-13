import React from 'react';
import ItemRestaurants from "./ItemRestaurants";

export default class ListRestaurants extends React.Component {
  render(){
    return(
      <ul id="restaurants-list">
        <li>
          <ItemRestaurants/>
        </li>
      </ul>
    )
  }
}