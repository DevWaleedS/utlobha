import React from 'react';
import { useSelector } from 'react-redux';
import DataBox from './DataBox';

const Details = () => {
	const details = useSelector((state) => state.details);
	return (
		<div className='row'>
			<DataBox details={details} />
		</div>
	);
};

export default Details;
