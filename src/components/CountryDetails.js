import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import countriesjson from '../countries.json';

class CountryDetails extends Component  {

  render() {
    //
    // Fonction helper pour retourner le nom d'un pays par son cca3
    //
    function getCountryName(cca3) {
      const country = countriesjson.find(c => c.cca3 === cca3);
      return country.name.common;
    }

    const cca3 = this.props.match.params.cca3;
    const country = countriesjson.find(c => c.cca3 === cca3);

    return (
      <div className="CountryDetails">
        <h1>{country.name.common}</h1>
        
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{country.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map(bordercountrycca3 => {
                    return (
                      <li key={bordercountrycca3}>
                        <Link to={`/${bordercountrycca3}`}>
                          {getCountryName(bordercountrycca3)}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    );
  }

}

export default CountryDetails;