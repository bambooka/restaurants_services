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
      restaurants: this.fetchResto()
    };
  }

  fetchResto = () => {
    setTimeout(() => {
      FetchingData.fetchRestaurants((error, restaurants) => {
        console.log(restaurants, 'restaurants from fetchResto');
        this.setState({restaurants:restaurants})
    })
    }, 1000)

  };

  render() {
    console.log(this.state.restaurants)
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact={true} path='/' render={() => <Main restaurants={this.state.restaurants}/>} />
            <Route path='/:id' render={() => <Details restaurants={this.state.restaurants} />} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
