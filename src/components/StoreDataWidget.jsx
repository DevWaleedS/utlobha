import React from 'react';
import { Switch } from '@mui/material';

const StoreDataWidget = ({data, img}) => {
	return (
		<div className='data-widget'>
			<div className='data'>
				<h5> {data}</h5>
				<div className='image-box'>{img}</div>
			</div>
			<div className='switch-box'>
				<Switch defaultChecked />
			</div>
		</div>
	);
};

export default StoreDataWidget;
