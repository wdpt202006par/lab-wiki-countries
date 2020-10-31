import React from 'react';
import { Link } from 'react-router-dom';

export default function CountryDetails(props) {
	if (props.data.length < 1) {
    return <h2>Loading...</h2>
  }
	const test = props.data.filter(el => {
		return el.cca3 === props.match.params.id
	});
	console.log('test-borders:',test[0].borders);

	let bordersArray = [...test[0].borders];

	const borderCountries = bordersArray.map(countryCode => {
		console.log('Countrycode :', countryCode);
		return props.data.find(country => {
			return countryCode === country.cca3
		})
	})
	console.log('Border-Countries: ', borderCountries);
	return (
		<div>
			<div className="col-7">
				<h1>{test[0].name.official}</h1>
				<table className="table">
					<tbody>
						<tr>
							<td style={{width: "30"}}>Capital</td>
							<td>{test[0].capital}</td>
						</tr>
						<tr>
							<td>Area</td>
							<td>
								{test[0].area} km
								<sup>2</sup>
							</td>
						</tr>
						<tr>
							<td>Borders</td>
							<td>
								<ul>
									{borderCountries.map(bordersData => {
										console.log('Borders-Data: ', bordersData)
										return <li>
											<Link to={bordersData.cca3} key={bordersData.name.official}>{bordersData.name.official}</Link>
										</li>
									})}
								</ul>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}
