import Maps from "../common/Maps";
import Filters from "../Filters";
import ListRestaurants from "../restaurants/ListRestaurants";
import React from "react";

export default class Main extends React.Component{
  render() {
    return(
      <>
        <div style={{width: '100%', height: '400px'}}>
          <Maps />
        </div>
        <Filters />
        <ListRestaurants restaurants={this.props.restaurants}/>
      </>
    )
  }
}