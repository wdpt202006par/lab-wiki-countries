import React from 'react';
import json from '../countries.json';
import { Link } from 'react-router-dom';

const countries = [... json] // ['Aruba','Congo', ...]


function CountriesList() {
    return(
        <div>
            <div className='col-5' style={{maxHeight: "90vh", overflow: "scroll"}}>
                <div className='list-group'>
                
                    {countries.map(uneVille => { 
                        return(
                            <Link 
                            to={`${uneVille.cca3}`}
                            className= 'list-group-item list-group-item-action'>
                                <div>{uneVille.flag} {uneVille.name.common}</div>
                            </Link>
                        )}
                    )}
                
                </div>
            </div>
        </div>

    )

}

export default CountriesList;

