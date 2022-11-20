import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import arrowBack from '../data/Icons/icon-30-arrwos back.svg';
import { BiSearch } from 'react-icons/bi';
import { InputAdornment, TextField } from '@mui/material';
import AcademyWidget from '../components/AcademyWidget';


const Academy = () => {
  return (
			<section className='academy-page p-3'>
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
									<li className='breadcrumb-item active me-2' aria-current='page'>
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
						<NavLink className='' to=''>
							الدورات التدريبية
						</NavLink>
						<NavLink className='me-5' to=''>
							شروحات
						</NavLink>
					</div>
				</div>
				<div className='row'>
					<div className='academy-widgets-wrapper'>
						<div className='widget-bx mb-4'>
							<AcademyWidget />
						</div>
						<div className='widget-bx mb-4'>
							<AcademyWidget />
						</div>
						<div className='widget-bx mb-4'>
							<AcademyWidget />
						</div>
						<div className='widget-bx '>
							<AcademyWidget />
						</div>
					</div>
				</div>
			</section>
		);
}

export default Academy