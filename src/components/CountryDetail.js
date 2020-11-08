import React from 'react';

import json from '../countries.json';
import {Link} from 'react-router-dom'

const CountryDetail = (props) => {
console.log('props=', props)

  const countryCca3= props.match.params.cca3;
  console.log('countrycca:', countryCca3)

  const theCountry = [...json].find(el => {
    return el.cca3 === countryCca3
  });

  return (
    <div className ="col-5">
    
    <h1 > {theCountry.name.common}</h1>

    <table className="table">
      <tbody>
        <tr>
          <td style= {{width : "30%"}}>
            Capital 
          </td>
          <td>{theCountry.capital}</td>
        </tr>
        <tr>
          <td>
            Area
          </td>
          <td>{theCountry.area} km<sup>2</sup></td>
        </tr>
        <tr>
          <td>
            Borders
          </td>
          <td>
            <ul>
              {theCountry.borders.map( cca3 => {
                const theBorderCountry = [...json].find(theCountry => theCountry.cca3 === cca3);
                return (
                  <li>
                  <Link to = {`${theBorderCountry.cca3}`}>
                  {theBorderCountry.name.common}
                  </Link>
                  </li>
                )
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