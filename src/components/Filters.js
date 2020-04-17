import React from 'react';
import FetchingData from "../dao/FetchingData";
import Select from 'react-select';

export default class Filters extends React.Component {
  updateRestaurants = () => {
    console.log('update restaurants')
  }
  render() {
    let options_neighborhood = [];
    let options_cuisines = [];
    FetchingData.fetchNeighborhoods(((error, neighborhoods) => {
      if (error) { // Got an error
        console.error(error);
      } else {
        window.self.neighborhoods = neighborhoods;
        // fillNeighborhoodsHTML();
        neighborhoods.map((item) => {
          return options_neighborhood.push({value: item, label: item})
        });
        return options_neighborhood;
      }
    }));

    FetchingData.fetchCuisines(((error, cuisines) => {
      if (error) { // Got an error
        console.error(error);
      } else {
        window.self.neighborhoods = cuisines;
        // fillNeighborhoodsHTML();
        cuisines.map((item) => {
          return options_cuisines.push({value: item, label: item})
        })
        return options_cuisines;
      }
    }));

    return (
      <div className="filter-options">
        <h2>Filter Results</h2>
        <br/>
        <Select
          placeholder="Select Neighborhood"
          aria-label="neighborhoods select" id="neighborhoods-select" name="neighborhoods"
          options={options_neighborhood}
        />

        <Select
          placeholder="Select Cuisine"
          aaria-label="cuisines select" id="cuisines-select" name="cuisines"
          options={options_cuisines}
        />

      </div>
    )
  }
}