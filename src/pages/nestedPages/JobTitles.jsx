import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// MUI
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// ICONS
import { ReactComponent as EditIcon } from '../../data/Icons/editt 2.svg';
import { ReactComponent as DeleteIcon } from '../../data/Icons/icon-24-delete.svg';

// Modal Style
const style = {
	position: 'absolute',
	top: '97px',
	left: '-1%',
	transform: 'translate(0%, 0%)',
	width: '85%',
	height: '100%',
	overflow: 'auto',
	bgcolor: '#f8f9fa',

	paddingBottom: '200px',
};

const JobTitles = () => {
	const dispatch = useDispatch(false);
	const navigate = useNavigate();

	return (
		<div className='' open={true}>
			<Modal open={true} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style} className='nested-pages-modal'>
					<section className='job-title-page'>
						<div className='form-title mb-5'>
							<div className='row header-row'>
								<div className='col-6'>
									<h5 className='mb-4'> الأدوار الوظيفية</h5>
									<div className='head-category '>
										<div className='row'>
											<nav aria-label='breadcrumb'>
												<ol className='breadcrumb'>
													<li className='breadcrumb-item'>
														<Link to='/Management' className='me-2'>
															جدول المستخدمين
														</Link>
													</li>

													<li className='breadcrumb-item active' aria-current='page'>
														الأدوار الوظيفية
													</li>
												</ol>
											</nav>
										</div>
									</div>
								</div>
								<div className='col-6 d-flex justify-content-end'>
									<div className='create-job-title-btn'>
										<button onClick={() => navigate('CreateRole')}>إنشاء دور</button>
									</div>
								</div>
							</div>
						</div>

						<div className='job-titles-wrapper mb-5'>
							<div className='row mb-2'>
								<div className='col-12'>
									<div className='job-box d-flex justify-content-between align-items-center'>
										<span className='job-name'>آدمن</span>
										<div className='job-btn-group'>
											<button className='edit-btn'>
												<EditIcon />
												<span className='me-2'>تحرير</span>
											</button>
											<button className='delete-btn me-3'>
												<DeleteIcon />
												<span className='me-2'>حذف</span>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className='row mb-2'>
								<div className='col-12'>
									<div className='job-box d-flex justify-content-between align-items-center'>
										<span className='job-name'>سوبر آدمن</span>
										<div className='job-btn-group'>
											<button className='edit-btn'>
												<EditIcon />
												<span className='me-2'>تحرير</span>
											</button>
											<button className='delete-btn me-3'>
												<DeleteIcon />
												<span className='me-2'>حذف</span>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className='row mb-2'>
								<div className='col-12'>
									<div className='job-box d-flex justify-content-between align-items-center'>
										<span className='job-name'>دعم فني</span>
										<div className='job-btn-group'>
											<button className='edit-btn'>
												<EditIcon />
												<span className='me-2'>تحرير</span>
											</button>
											<button className='delete-btn me-3'>
												<DeleteIcon />
												<span className='me-2'>حذف</span>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className='row mb-2'>
								<div className='col-12'>
									<div className='job-box d-flex justify-content-between align-items-center'>
										<span className='job-name'>خدمات العملاء</span>
										<div className='job-btn-group'>
											<button className='edit-btn'>
												<EditIcon />
												<span className='me-2'>تحرير</span>
											</button>
											<button className='delete-btn me-3'>
												<DeleteIcon />
												<span className='me-2'>حذف</span>
											</button>
										</div>
									</div>
								</div>
							</div>
							<div className='row mb-2'>
								<div className='col-12'>
									<div className='job-box d-flex justify-content-between align-items-center'>
										<span className='job-name'>تسويق</span>
										<div className='job-btn-group'>
											<button className='edit-btn '>
												<EditIcon />
												<span className='me-2'>تحرير</span>
											</button>
											<button className='delete-btn me-3'>
												<DeleteIcon />
												<span className='me-2'>حذف</span>
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='row'>
							<div className='col-12'>
								<div className='close-btn d-flex justify-content-center '>
									<button onClick={() => navigate('/Management')}>إغلاق</button>
								</div>
							</div>
						</div>
					</section>
				</Box>
			</Modal>
		</div>
	);
};

export default JobTitles;
