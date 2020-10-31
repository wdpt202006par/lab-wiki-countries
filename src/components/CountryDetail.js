import React from 'react';

import json from '../countries.json';
// import {Link} from 'react-router-dom'

const CountryDetail = (props) => {
console.log('props=', props)

  const countryCca3= props.match.params.cca3;
  console.log('countrycca:', countryCca3)

  const theCountry = [...json].find(el => {
    return el.cca3 === countryCca3
  });

  // const bordersCca3 = theCountry.borders.find(el => {
  //   return el.borders === theCountry.name.common
  // })
  // // console.log(theCountry.name.common)

  return (
    <div className ="col-7" >
    
    <h1 > {theCountry.name.common}</h1>

    <table>
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
              <li>{theCountry.borders} </li>
            </ul>
          </td>
        </tr>

      </tbody>
    </table>

   

    {/* <p>Borders {theCountry.borders} </p> */}
    </div>

  )
}

export default CountryDetail;