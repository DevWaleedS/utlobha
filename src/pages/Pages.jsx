import { Button, InputAdornment, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { GrFormFilter } from 'react-icons/gr';

import arrowBack from '../data/Icons/icon-30-arrwos back.svg';
import PagesTable from '../components/PagesTable';

const Pages = () => {
	return (
		<section className='pages-page p-3'>
			<div className='head-category mb-4'>
				<div className='row'>
					<div className='col-6'>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb'>
								<li className='breadcrumb-item'>
									<img src={arrowBack} alt='' />
									<Link to='/' className='me-2'>
										الرئيسية
									</Link>
								</li>
								<li className='breadcrumb-item active' aria-current='page'>
									الصفحات
								</li>
							</ol>
						</nav>
					</div>
					<div className='col-6 d-flex justify-content-end'>
						<div className='add-page-btn'></div>
						<Button variant='contained'>
							<MdAdd />
							<span>انشاء صفحة</span>
						</Button>
					</div>
				</div>
			</div>

			<div className='row mb-4'>
				<div className='col-8'>
					<div className='pages-search-bx'>
						<TextField
							id='filled-textarea'
							placeholder='ابحث عن صفحة'
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

				<div className='col-4'>
					<div className='pages-filters-bx'>
						<label htmlFor=''>
							<GrFormFilter />
						</label>
						<select className='form-select' aria-label='Default select example'>
							<option value='defaultValue'>فرز حسب</option>
							<option value='create-date'>تاريخ الانشاء</option>
							<option value='status'>الحالة</option>
						</select>
					</div>
				</div>
			</div>
			<div className='row'>
				<div className='pages-table'>
					<PagesTable />
				</div>
			</div>
		</section>
	);
};

export default Pages;
