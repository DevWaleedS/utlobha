import React from 'react';
import { IoIosArrowForward, IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';

const TablePagination = () => {
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

			<div className='select-wrapper'>
				<select className='form-select  table-columns-select' aria-label='Default select '>
					<option defaultValue>عدد الصفوف</option>
					<option className='10'>10</option>
					<option className='20'>20</option>
					<option className='30'>30</option>
					<option className='100'>100</option>
				</select>
				<IoIosArrowDown />
			</div>
		</div>
	);
};
export default TablePagination;
