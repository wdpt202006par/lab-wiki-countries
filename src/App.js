import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountriesList from '../src/components/CountriesList'
import CountryDetail from '../src/components/CountryDetail'
import countries from './countries.json'



function App() {
  return (
    <div className="App">
      <CountriesList countries={countries} />
      <CountryDetail countries={countries}/>
    </div>
  );
}

export default App;
