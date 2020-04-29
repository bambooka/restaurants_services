import React from 'react';
import './App.css';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import FetchingData from "./dao/FetchingData";
import Main from "./components/pages/Main";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Details from "./components/pages/Details";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: this.fetchResto(),
      reviews: this.fetchReviews()
    };
  }

  fetchReviews = () => {
    setTimeout(() => {
      FetchingData.fetchReviewsFromNetwork((error, reviews) => {
        console.log(reviews, 'reviews from fetchreviews');
        this.setState({reviews: reviews})
      })
    }, 500)
  }

  fetchResto = () => {
    setTimeout(() => {
      FetchingData.fetchRestaurants((error, restaurants) => {
        console.log(restaurants, 'restaurants from fetchResto');
        this.setState({restaurants:restaurants})
    })
    }, 500)

  };

  render() {
    console.log(this.state.restaurants);
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact={true} path='/' render={() => <Main restaurants={this.state.restaurants}/>} />
            <Route path='/:id' render={() => <Details reviews={this.state.reviews} restaurants={this.state.restaurants} />} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
