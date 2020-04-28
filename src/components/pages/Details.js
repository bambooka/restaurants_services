import React from "react";
import InfoRestaurant from "../restaurants/InfoRestaurant";
import {useParams} from 'react-router-dom'

export default function Details(props) {
  let {id} = useParams();
  let currentRestaurant = props.restaurants[id];

    return(
      <>
        <InfoRestaurant restaurant={currentRestaurant}/>
      </>
    )

}