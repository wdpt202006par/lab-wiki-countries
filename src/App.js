import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <CountryDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
