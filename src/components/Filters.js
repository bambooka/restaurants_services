import React from 'react';

export default class Filters extends React.Component {
  render() {
    return (
      <div className="filter-options">
        <h2>Filter Results</h2>

        <select aria-label="neighborhoods select" id="neighborhoods-select" name="neighborhoods"
                onChange="updateRestaurants()">
          <option value="all">All Neighborhoods</option>
        </select>
        <label htmlFor="neighborhoods-select"></label>

        <select aria-label="cuisines select" id="cuisines-select" name="cuisines" onChange="updateRestaurants()">
          <option value="all">All Cuisines</option>
        </select>
        <label htmlFor="cuisines-select"></label>

      </div>
    )
  }
}