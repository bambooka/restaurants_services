import DBHelper from "../dbhelper";

export default class FetchingData {
  /**
   * Database URL.
   */
  static get DATABASE_URL() {
    const port = 1337;
    const domain = 'localhost';
    return `http://${domain}:${port}`;
  }

  static fetchRestaurantsFromNetwork(callback) {
    let fetchURL = `${this.DATABASE_URL}/restaurants`;
    fetch(fetchURL, {method: 'GET'}).then(response => {
      response.json().then(restaurants => {
        console.log(restaurants);
        restaurants.forEach(r => {
          r.is_favorite = r.is_favorite === 'true';
        });
        callback(null, restaurants);
      });
    }).catch(error => {
      callback(`network request failed. returned ${error}`, null);
    });
  }

  static fetchRestaurants(callback, id) {
    // TODO: would it be better to make the DB calls synchronously instead?
    // First try to fetch restaurants from the database

    console.log('db is empty');
    this.fetchRestaurantsFromNetwork((error, restaurants) => {
      console.log('call function')
      callback(error, restaurants);
    });
  }

  static fetchNeighborhoods(callback) {
    // Fetch all restaurants
    this.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all neighborhoods from all restaurants
        const neighborhoods = restaurants.map((v, i) => restaurants[i].neighborhood);
        // Remove duplicates from neighborhoods
        const uniqueNeighborhoods = neighborhoods.filter((v, i) => neighborhoods.indexOf(v) == i)
        callback(null, uniqueNeighborhoods);
      }
    });
  }

  static fetchCuisines(callback) {
    // Fetch all restaurants
    this.fetchRestaurants((error, restaurants) => {
      if (error) {
        callback(error, null);
      } else {
        // Get all cuisines from all restaurants
        const cuisines = restaurants.map((v, i) => restaurants[i].cuisine_type)
        // Remove duplicates from cuisines
        const uniqueCuisines = cuisines.filter((v, i) => cuisines.indexOf(v) == i)
        callback(null, uniqueCuisines);
      }
    });
  }
}