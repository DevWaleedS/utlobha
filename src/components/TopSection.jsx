import * as React from 'react';
import DatePickerCopm from './DatePickerCopm';


// ICON
import { ReactComponent as HomeIcon } from '../data/Icons/icon_24_home.svg';

const TopSection = () => {
	const [value, setValue] = React.useState(null);

	const handleChange = (newValue) => {
		setValue(newValue);
	};
	return (
		<div className='row mt-5 mb-5'>
			<div className='col-md-6 '>
				<div className='page-title d-flex justify-content-start align-items-baseline'>
					<HomeIcon className='home-icon' />
					<h5 className='d-flex align-self-end mb-0 me-2 h5'>الرئيسية</h5>
				</div>
			</div>

			{/** date Picker */}
			<div className='col-md-6'>
				<div className='date-picker '>
				<DatePickerCopm />
				</div>
			</div>
		</div>
	);
};

export default TopSection;
