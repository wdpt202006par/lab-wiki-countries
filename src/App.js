import React from 'react';
import './App.css';
import CountriesList from '../src/components/CountriesList'
import CountryDetail from '../src/components/CountryDetail'
import countries from './countries.json'
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';





function App() {
  return (
    <div className="App">
      <h1 className="title">WikiCountries</h1>
      <CountriesList countries={countries} />
      <Route path="/:cca3" component={CountryDetail} />
    </div>
  );
}

export default App;
