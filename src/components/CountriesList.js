import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

function CountriesList() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'scroll' }}
          >
            <div className="list-group">
              {countries.map((country) => {
                return (
                  <Link
                    key={country.cca3}
                    className="list-group-item list-group-item-action"
                    to={`/${country.cca3}`} //string litéral
                  >
                    {country.flag} {country.name.common}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CountriesList;
