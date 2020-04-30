import React from "react";

import ItemReviews from "./ItemReviews";
import FormReview from "./FormReview";

export default function ListReviews(props) {
  return (
    <>
      <FormReview />
      <section id="reviews-container">
        <ul aria-label="restaurants reviews" id="reviews-list">
          {props.reviews.map((item) => {
            return <ItemReviews reviews={item}/>
          })}
        </ul>
      </section>
    </>
  )

}