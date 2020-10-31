import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';


const CountryDetail = (props) => {
  
const foundedCountry = countries.find((country) => country.cca2 === props.match.params.cca2);


  return (

    <div className="col-7">
        <h1>{foundedCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{foundedCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>{countries.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                    <td>Borders</td>
                      <td>
                      <ul>
                    {
                      foundedCountry.borders.map((borderCountry) => {
                      return <li><Link to={`/${borderCountry.cca2}`}>{borderCountry}</Link></li>
                      }
                    )
                    }
                </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>



  )
}
 
export default CountryDetail;