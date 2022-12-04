import { InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import arrowBack from '../data/Icons/icon-30-arrwos back.svg';
import { BiSearch } from 'react-icons/bi';
import { SupportTable } from '../components';
import { SupportDetails } from './nestedPages';

const Support = () => {
	return (
		<section className='pages-page p-3'>
			<div className='head-category mb-4'>
				<div className='row '>
					<div className='col-6'>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb'>
								<li className='breadcrumb-item'>
									<img src={arrowBack} alt='' />
									<Link to='/' className='me-2'>
										الرئيسية
									</Link>
								</li>
								<li className='breadcrumb-item active ' aria-current='page'>
									الدعم الفني
								</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
			<div className='row mb-5'>
				<div className='col-6 d-flex justify-content-end'>
					<div className='pages-search-bx w-100'>
						<TextField
							id='filled-textarea'
							placeholder='ابحث عن شكوي '
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<BiSearch />
									</InputAdornment>
								),
							}}
						/>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='support-table'>
					<SupportTable />
				</div>
			</div>

			{/** SupportDetails */}
			<SupportDetails />
		</section>
	);
};

export default Support;
