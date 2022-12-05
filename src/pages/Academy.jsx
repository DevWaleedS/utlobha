import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import arrowBack from '../data/Icons/icon-30-arrwos back.svg';
import { BiSearch } from 'react-icons/bi';
import { InputAdornment, TextField } from '@mui/material';
import Explain from './Explain';
import CoursesTraining from './CoursesTraining';

const Academy = () => {
	// Use state to the next button
	const [togglePage, setTogglePag] = useState(1);

	// Set function to change between pages
	const togglePagesHandle = (index) => {
		setTogglePag(index);
	};

	return (
		<section className='academy-page p-3'>
			<div className='head-category mb-5'>
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
									الأكاديمية
								</li>
							</ol>
						</nav>
					</div>
					<div className='col-6 d-flex justify-content-end'>
						<div className='pages-search-bx w-100'>
							<TextField
								id='filled-textarea'
								placeholder='ابحث عن مادة معينة'
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
			</div>

			<div className='row mb-5'>
				<div className='btns-group-container d-flex justify-content-start align-items-center'>
					<button onClick={() => togglePagesHandle(1)} className={togglePage === 1 ? 'active' : ''}>
						الدورات التدريبية
					</button>

					<button onClick={() => togglePagesHandle(2)} className={togglePage === 2 ? 'me-5 active' : 'me-5'}>
						شروحات
					</button>
				</div>
			</div>

			<div className='row'>
				<div className='academy-widgets-wrapper'>
					{/** CoursesTraining and Explain Pages */}
					{togglePage === 1 ? <CoursesTraining /> : <Explain />}
				</div>
			</div>

			{/** CourseDetails page */}
			<Outlet />
		</section>
	);
};

export default Academy;
