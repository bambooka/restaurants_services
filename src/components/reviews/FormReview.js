import React from "react";

export default class FormReview extends React.Component{
  render(){
    return(
      <form aria-label="From for addition reviews" id="review-form">
        <h3>Add new review</h3>
        <input type="text" aria-label="Type your name" id="reviewer-name" name="Name" placeholder="Your name"/><br/>
        <label htmlFor="rating_score">Rating</label><br/>
        <select id="rating_score" aria-label="rate the restaurant" name="Rating">
          <option aria-label="one" value="1">1</option>
          <option aria-label="two" value="2">2</option>
          <option aria-label="three" value="3">3</option>
          <option aria-label="four" value="4">4</option>
          <option aria-label="five" value="5">5</option>
        </select><br/>
        <textarea aria-label="Type your reviews to here" id="text-review" name="Text review"
                  placeholder="Type review to here"></textarea><br/>
        <input aria-label="Submit the review" type="submit" id="submit-review" onClick="addReview()"
               value="Submit review"/>
      </form>
    )
  }
}