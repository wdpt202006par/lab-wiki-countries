import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountriesList extends React.Component {
  render() { 
    return(
      <div className="col-5">
        <div className="list-group">
        { countries.map((country, index) => {
            return(
              <div key={index}>
                <Link to ={`/country/${country.cca3}`} className="list-group-item list-group-item-action">
                  <p >{country.flag}{country.name.common}</p>
                </Link>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default CountriesList;