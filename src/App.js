import React from 'react';
import {Route, Switch} from 'react-router-dom';

import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';
import './App.css'


function App() {
  return (
    <div className="App">
    <div className="container">
      <div className = "left">
        <CountriesList/>
      </div>
      <div className = "right">
        <Switch>
          <Route exact path="/:cca3" component ={CountryDetail} />
        </Switch>
      </div>
      </div>
    </div>
    
  );
}

export default App;
