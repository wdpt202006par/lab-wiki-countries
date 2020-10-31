import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route } from 'react-router-dom';

import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <div className="App">
      <CountriesList />
      <Route path="/:cca3" component={CountryDetail} />
    </div>
  );
}

export default App;
