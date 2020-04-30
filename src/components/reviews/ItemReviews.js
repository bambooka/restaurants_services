import React from "react";

export default function ItemReviews(props) {

  return(
    <li>
      <p>{props.reviews.name}</p>
      <p>{new Date(props.reviews.createdAt).toLocaleDateString()}</p>
      <p>{props.reviews.rating}</p>
      <p>{props.reviews.comments}</p>
    </li>
  )

}