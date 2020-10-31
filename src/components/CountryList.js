import React from 'react'
import { NavLink } from 'react-router-dom';

import countriesjson from '../countries.json'

export default (props) => {
  return (
    <div className="list-group">
      {countriesjson.map((country, index) => {
        return (
          <NavLink key={country.cca3} className="list-group-item list-group-item-action" to={`/${country.cca3}`}>
            {country.flag} {country.name.common}
          </NavLink>
        );
      })}
    </div>
  )
}