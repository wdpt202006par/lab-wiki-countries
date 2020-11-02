import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json'


 
class CountriesList extends React.Component {
    
render() {
  return (

    <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div className="list-group">
                {countries.map((country)=> {
                return (
                    <Link to = {`/${country.cca3}`} >
                      <div className="list-cadre">
                         <img className="list-img" src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}/>
                         <p className="list-name">{country.name.common}</p>
                      </div>
                    </Link>
                )
                })}
            </div>
          </div>
        </div>
      </div>


  )
}
}
 
export default CountriesList;