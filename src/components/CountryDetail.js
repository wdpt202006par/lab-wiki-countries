import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';
import CountriesList from './CountriesList';


const CountryDetail = (props) => {
    


const searchCountry = (code) => {
const theCountry = oneProject => {
    return oneProject.cca2 === code;
    }
    return countries.find(theCountry)
    };
          
const { params } = props.match;
const foundCountry = searchCountry(params.cca2, 10);

  return (




    <div className="col-7">
        <h1>{foundCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: '30%'}}>Capital</td>
                  <td>{foundCountry.capital}</td>
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
                      <li>{foundCountry.borders.map((el) => <li>{el}</li>)}</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>



  )
}
 
export default CountryDetail;