import React from 'react';
import {Route, Switch} from 'react-router-dom';

import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';



function App() {
  return (
    <div className="App">

    <CountriesList/>
    
    <Switch>
      <Route exact path="/:cca3" component ={CountryDetail} />
    </Switch>
      
    </div>
    
  );
}

export default App;
