import React from 'react';
import './App.css';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import FetchingData from "./dao/FetchingData";
import Main from "./components/pages/Main";

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
    return (
      <div className="App">
        <Header />
        <Main restaurants={this.state.restaurants} />
        <Footer />
      </div>
    );
  }
}

export default App;
