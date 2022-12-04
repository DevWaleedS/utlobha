import React from 'react';
import { Link } from 'react-router-dom';

// MUI
import { BiSearch } from 'react-icons/bi';
import { InputAdornment, TextField } from '@mui/material';

// ICONS
import arrowBack from '../../data/Icons/icon-30-arrwos back.svg';
import courseImage from '../../data/Icons/courseDeatilsimage.png';
import { ReactComponent as ArrowDown } from '../../data/Icons/icon-24-chevron_down.svg';

const CourseDetails = () => {
  return (
			<section className='course-details-page academy-page p-3'>
				<div className='head-category mb-5 pt-4'>
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
									<li className='breadcrumb-item ' aria-current='page'>
										الأكاديمية
									</li>
									<li className='breadcrumb-item active' aria-current='page'>
										محتوى الكورس
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
					<div className='col-12'>
						<div className='course-image'>
							<img className='img-fluid' src={courseImage} alt='courseImage' />
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='course-actions'>
						<div className='course-name mb-4'>
							<h4>كورس الدروب شيبينج</h4>
						</div>
						<div className='col-12'>
							<div className='course-unites d-flex justify-content-between'>
								<div>
									<span className='unite-name'> الوحدة الأولى</span>
									<span className='course-count'>( 4 دروس )</span>
									<span className='course-time'>( 25 دقيقة )</span>
								</div>
								<div className='arrow-icon'>
									<ArrowDown />
								</div>
							</div>
						</div>
						<div className='col-12'>
							<div className='course-unites d-flex justify-content-between'>
								<div>
									<span className='unite-name'> الوحدة الثانية</span>
									<span className='course-count'>( 4 دروس )</span>
									<span className='course-time'>( 25 دقيقة )</span>
								</div>
								<div className='arrow-icon'>
									<ArrowDown />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
}

export default CourseDetails;