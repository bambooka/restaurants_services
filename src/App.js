import React from 'react';
import './App.css';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Maps from './components/common/Map'

function App() {
  return (
    <div className="App">
      <Header />
      <Maps />
      <Footer />
    </div>
  );
}

export default App;
