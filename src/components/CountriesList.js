import React from 'react';
import Json from "../countries.json";
import { Link } from 'react-router-dom';

const CountryList = () => {

    return (
        <>
            <div className="col-5" style={{ maxHeight: "90vh" }, { overflow: "scroll" }}>
                <div className="list-group">
                    {Json.map(el => {
                        return (
                            <Link className="list-group-item list-group-item-action" to={`/${el.cca3}`} key={el.cca3}>{el.flag} {el.name.official}</Link>
                        )
                    })}

                </div>

            </div>

        </>
    )
}

export default CountryList;