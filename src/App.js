import React from 'react';
import './App.css';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Filters from './components/Filters'
import ListRestaurants from "./components/restaurants/ListRestaurants";
import Maps from "./components/common/Maps";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div style={{width: '100%', height: '400px'}}>
          <Maps />
        </div>
        {/*<img*/}
        {/*  width="100%"*/}
        {/*  height="400px"*/}
        {/*  src="https://lh3.googleusercontent.com/proxy/tc9qnjGs9-2AIWULwhpi_y6uzwT7Xi38W4DwbDXE2RkV9qDkog76UssXhNPmKrgfsSMa-BBzbuOF5IwF1dKSW6qttgnAB_x5Xa07wBrdoQHfXmmuanuRD9fcxf5W2e_uqUTPaVNx" />*/}

          <Filters />
        <ListRestaurants />
        <Footer />
      </div>
    );
  }
}

export default App;
