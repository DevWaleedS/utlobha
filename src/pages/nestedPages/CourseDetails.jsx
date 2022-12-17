import React from 'react';
import { Link } from 'react-router-dom';

// MUI
import { BiSearch } from 'react-icons/bi';
import { InputAdornment, TextField } from '@mui/material';

// ICONS
import arrowBack from '../../data/Icons/icon-30-arrwos back.svg';
import courseImage from '../../data/Icons/courseDeatilsimage.png';
import { ReactComponent as ArrowDown } from '../../data/Icons/icon-24-chevron_down.svg';
import { ReactComponent as PDFIcon } from '../../data/Icons/pfd.svg';
import { BiPlayCircle } from 'react-icons/bi';

const CourseDetails = () => {
	return (
		<section className='course-details-page academy-page p-3'>
			<div className='head-category mb-5 pt-4'>
				<div className='row'>
					<div className='col-6'>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb'>
								<li className='breadcrumb-item'>
									<Link to='/' className='me-2'>
										<img src={arrowBack} alt='' />
										<span className='me-2'> الرئيسية</span>
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
						<div className='accordion-item course-unites d-flex justify-content-between order-action-box accordion-box ' id='accordionExample'>
							<div className='accordion-item w-100'>
								<button className='accordion-button  text-end ' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
									<div className='action-title w-100'>
										<span className='unite-name'> الوحدة الأولى</span>
										<span className='course-count'>( 4 دروس )</span>
										<span className='course-time'>( 25 دقيقة )</span>
									</div>
									<div className='action-icon'>
										<ArrowDown />
									</div>
								</button>

								<div id='collapseOne' className='accordion-collapse collapse ' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
									<div className='accordion-body'>
										<ul className='select-status p-0'>
											<li className='d-flex justify-content-between align-items-center'>
												<div className='unit-name'>
													<BiPlayCircle />
													<span className='me-2'> المقدمة</span>
												</div>
												<div className='unit-time'>
													<span>4:00</span>
												</div>
											</li>
											<li className='d-flex justify-content-between align-items-center'>
												<div className='unit-name'>
													<BiPlayCircle />
													<span className='me-2'> مصطلحات تعريفية</span>
												</div>
												<div className='unit-time'>
													<span>10:05</span>
												</div>
											</li>
											<li className='d-flex justify-content-between align-items-center'>
												<div className='unit-name'>
													<BiPlayCircle />
													<span className='me-2'> مصطلحات تعريفية</span>
												</div>
												<div className='unit-time'>
													<span>7:15</span>
												</div>
											</li>
											<li className='d-flex justify-content-between align-items-center'>
												<div className='unit-name'>
													<BiPlayCircle />
													<span className='me-2'> مصطلحات تعريفية</span>
												</div>
												<div className='unit-time'>
													<span>7:14</span>
												</div>
											</li>
											<li className='d-flex justify-content-between align-items-center'>
												<div className='unit-files'>
													<PDFIcon />
													<span className='me-2'> ملفات الوحدة</span>
												</div>
												<div className='unit-download'>
													<span>تحميل</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className='col-12'>
						<div className='accordion-item course-unites d-flex justify-content-between order-action-box accordion-box ' id='accordionExample'>
							<div className='accordion-item w-100'>
								<button className='accordion-button  text-end ' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTow' aria-expanded='true' aria-controls='collapseTow'>
									<div className='action-title w-100'>
										<span className='unite-name'> الوحدة الثانية</span>
										<span className='course-count'>( 4 دروس )</span>
										<span className='course-time'>( 25 دقيقة )</span>
									</div>
									<div className='action-icon'>
										<ArrowDown />
									</div>
								</button>

								<div id='collapseTow' className='accordion-collapse collapse ' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
									<div className='accordion-body'>
										<ul className='select-status p-0'>
											<li className='d-flex justify-content-between align-items-center'>
												<div className='unit-name'>
													<BiPlayCircle />
													<span className='me-2'> المقدمة</span>
												</div>
												<div className='unit-time'>
													<span>4:00</span>
												</div>
											</li>
											<li className='d-flex justify-content-between align-items-center'>
												<div className='unit-name'>
													<BiPlayCircle />
													<span className='me-2'> مصطلحات تعريفية</span>
												</div>
												<div className='unit-time'>
													<span>10:05</span>
												</div>
											</li>
											<li className='d-flex justify-content-between align-items-center'>
												<div className='unit-name'>
													<BiPlayCircle />
													<span className='me-2'> مصطلحات تعريفية</span>
												</div>
												<div className='unit-time'>
													<span>7:15</span>
												</div>
											</li>
											<li className='d-flex justify-content-between align-items-center'>
												<div className='unit-name'>
													<BiPlayCircle />
													<span className='me-2'> مصطلحات تعريفية</span>
												</div>
												<div className='unit-time'>
													<span>7:14</span>
												</div>
											</li>
											<li className='d-flex justify-content-between align-items-center'>
												<div className='unit-files'>
													<PDFIcon />
													<span className='me-2'> ملفات الوحدة</span>
												</div>
												<div className='unit-download'>
													<span>تحميل</span>
												</div>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CourseDetails;
