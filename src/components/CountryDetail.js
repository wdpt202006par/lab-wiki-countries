// Receive country code from URL

import React from 'react';
import countries from '../countries.json';

const CountryDetail = (props) => {

console.log(props);
const countryId = props.match.params.id; // "ALA"
const theCountry = countries.find(el => {
    return el.cca3 === countryId
  });

        return (
            <div className="col-7">
            <h1>{theCountry.name.common}</h1>
            <table className="table">
                <thead></thead>
                <tbody>
                <tr>
                    <td style={{width: "30%"}}>Capital</td>
                    <td>{theCountry.capital}</td>
                </tr>
                <tr>
                    <td>Area</td>
                    <td>{theCountry.area}km
                    <sup>2</sup>
                    </td>
                </tr>
                <tr>
                    <td>Borders</td>
                    <td>
                    <ul>
                    {theCountry.borders.map(item=> {
                        const theBorder = countries.find(el => {
                            return el.cca3 === item
                        });
                        return (
                           <li key={item.id}><a href={item}>{theBorder.name.common}</a></li> 
                        )
                    }
                        
                    )}
            
                    </ul>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        )
    
}

export default CountryDetail;