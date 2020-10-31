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
                    <Link to = {`/${country.cca2}`} >
                    <img src={`https://www.countryflags.io/${country.cca2}/flat/64.png`}/>
                    <p>{country.name.common}</p>
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