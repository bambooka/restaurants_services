import React from 'react';
import ItemRestaurants from "./ItemRestaurants";
import FetchingData from "../../dao/FetchingData";

export default class ListRestaurants extends React.Component {
  render(){
    return(
      <ul id="restaurants-list">
        <li>
          {this.props.restaurants ? this.props.restaurants.map((item, index) => {
            return (
              <ItemRestaurants restaurant={item} key={index} />
              )
          }) : null}
        </li>
      </ul>
    )
  }
}