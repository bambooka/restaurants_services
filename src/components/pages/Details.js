import React from "react";
import InfoRestaurant from "../restaurants/InfoRestaurant";
import {useParams} from 'react-router-dom'

export default function Details(props) {
  let {id} = useParams();
  let currentRestaurant = props.restaurants[id];
  let currentReview = props.reviews.filter((item) => {
    if(item.restaurant_id == id){
      return item;
    }
  })

    return(
      <>
        <InfoRestaurant reviews={currentReview} restaurant={currentRestaurant}/>
      </>
    )

}