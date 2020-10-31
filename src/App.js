import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route, NavLink } from 'react-router-dom';

import countriesjson from './countries.json'

import CountryList from './components/CountryList.js';
import CountryDetails from './components/CountryDetails.js';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>

        <div className="container">
          <div className="row">

            {/* Colone Gauche */}
            <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
              <CountryList />
            </div>

            {/* Colone Droite */}
            <div className="col-7">
              <Switch>
                <Route exact path='/' render={() => <p>👈 Choose a country from the list.</p>}/>
                <Route path='/:cca3' component={CountryDetails} />
              </Switch>
            </div>

          </div>
        </div>
    </div>
  );
}

export default App;
