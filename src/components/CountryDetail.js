import React from 'react';
import Json from '../countries.json';
import { Link } from 'react-router-dom';



class CountryDetail extends React.Component {
  state = {
    borders : []
  }
  
  


  render() {
    const getCountry = (id) => {
      const countryCode = (oneCountry) => {
        return oneCountry.cca3 === id;

      }
      
      return Json.find(countryCode)
    };
    
    const foundCountry = getCountry(this.props.match.params.id);
    
    console.log(foundCountry);

    return (
      <>
        <div className="col-7">
          <h1>{foundCountry.name.official}</h1>
          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{foundCountry.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {foundCountry.area} km
                  <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul>
                    {foundCountry.borders.map((border) => {
                      return (
                        <li key = {border}>
                          <Link to={`/${getCountry(border).cca3}`}>{getCountry(border).name.official}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );

  }
  

}



export default CountryDetail;