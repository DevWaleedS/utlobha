import * as React from 'react';
import Box from '@mui/material/Box';

// Icon
import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';

import { MenuItem, Select } from '@mui/material';

const TablePagination = () => {
	const [pageNumbers, setPageNumbers] = React.useState();
	const handleChange = (event) => {
		setPageNumbers(event.target.value);
	};
	return (
		<div className='  d-flex justify-content-between align-items-center'>
			<nav className='navigation d-flex align-self-center' aria-label='Page navigation ' dir='ltr'>
				<ul className='pagination '>
					<li className='page-item'>
						<button className='page-link'>
							<IoIosArrowBack />
						</button>
					</li>
					<li className='page-item'>
						<button className='page-link active'>1</button>
					</li>
					<li className='page-item'>
						<button className='page-link'>2</button>
					</li>
					<li className='page-item'>
						<button className='page-link'>3</button>
					</li>
					<li className='page-item'>
						<button className='page-link'>...</button>
					</li>
					<li className='page-item'>
						<button className='page-link'>
							<IoIosArrowForward />
						</button>
					</li>
				</ul>
			</nav>

			<div className='select-table-row-wrapper d-flex justify-content-between align-items-center'>
				<label htmlFor='select-table-row '>عدد الصفوف</label>
				<Box>
					<Select
						IconComponent={IoIosArrowDown}
						className='table-row-select'
						labelId='demo-simple-select-label'
						id='demo-simple-select select-table-row'
						value={pageNumbers}
						label='pageNumbers'
						onChange={handleChange}
						displayEmpty
						inputProps={{ 'aria-label': 'Without label' }}
					>
						<MenuItem defaultValue=''></MenuItem>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={20}>20</MenuItem>
						<MenuItem value={30}>30</MenuItem>
						<MenuItem value={100}>100</MenuItem>
					</Select>
				</Box>
			</div>
		</div>
	);
};
export default TablePagination;
