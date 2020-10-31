import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountriesList from '../src/components/CountriesList'
import CountryDetail from '../src/components/CountryDetail'
import countries from './countries.json'
import {Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';





function App() {
  return (
    <div className="App">
      <CountriesList countries={countries} />
      <Route path="/:cca2" component={CountryDetail} />
    </div>
  );
}

export default App;
