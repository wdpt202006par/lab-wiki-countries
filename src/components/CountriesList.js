import React from 'react';
import { Link } from 'react-router-dom';

export default function CountriesList(props) {
	console.log('props-data :', props.data);
	return (
		<div className="col-5" style={{ maxHeight: '100vh', overflow: 'scroll' }}>
			<div className="list-group">
				{props.data.map(el => {
						console.log('el: ', el)
					return (
						<Link className="list-group-item list-group-item-action" to={el.cca3} key={el.name.official}>{el.flag}{el.name.official}</Link>
				)})}
			</div>
		</div>
	)
}
