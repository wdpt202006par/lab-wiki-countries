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

    return (
      <div className="CountryDetails">
        <h1>{this.props.name.common}</h1>
        
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
              <td>{this.props.capital[0]}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>{this.props.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.props.borders.map(bordercountrycca3 => {
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