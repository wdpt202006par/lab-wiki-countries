import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {
  console.log(props);
  //aller chercher le pays dont cca3 est égale au cca3 de l'URL puis on imprime du country dansle render
  const countryCca3 = props.match.params.cca3;
  const theCountry = countries.find((el) => el.cca3 === countryCca3);

  return (
    <div className="col-7">
      <h1>{theCountry.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{theCountry.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {theCountry.area}
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {theCountry.borders.map(
                  //pour chaque cca3 frontalier
                  (cca3) => {
                    //je cherche le pays correspondant
                    const borderCountry = countries.find(
                      (el) => el.cca3 === cca3
                    );
                    return (
                      <li>
                        {/* j'affiche un link vers le pays grace à l'URL'/cca3' et j'affiche le nom */}
                        <Link to={`/${borderCountry.cca3}`}>
                          {borderCountry.name.common}
                        </Link>
                      </li>
                    );
                  }
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryDetail;
