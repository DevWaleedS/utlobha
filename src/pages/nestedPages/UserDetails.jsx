import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// icons
import { ReactComponent as Message } from '../../data/Icons/icon-24-email.svg';
import { ReactComponent as Phone } from '../../data/Icons/icon-24- call.svg';
import User from '../../data/Icons/user.png';
const style = {
	position: 'absolute',
	top: '97px',
	left: '-1%',
	transform: 'translate(0%, 0%)',
	width: '74%',
	height: '100%',
	overflow: 'auto',
	bgcolor: '#fff',
	paddingBottom: '80px',
};

const UserDetails = () => {
	const navigate = useNavigate();

	return (
		<div className='add-category-form' open={true}>
			<Modal open={true} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<div className='user-details'>
						<div className='row '>
							<div className='col-12'>
								<div className='user-details-title'>
									<h5 className='mb-3'> حسابي التاجر</h5>
									<div className='row'>
										<nav aria-label='breadcrumb'>
											<ol className='breadcrumb'>
												<li className='breadcrumb-item text-bold'>جدول المستخدمين</li>

												<li className='breadcrumb-item active' aria-current='page'>
													تفاصيل مستخدم موظف في النظام
												</li>
											</ol>
										</nav>
									</div>
								</div>
							</div>
						</div>

						<div className='user-details-body'>
							<div className='row '>
								<div className='col-2'>
									<img className='img-fluid' src={User} alt='user' />
								</div>

								<div className='col-4'>
									<div className='user-info me-3'>
										<span className='user-name mb-3'>عمر الاحمد</span>
										<div className='contact-info mb-2'>
											<Message />
											<span className='me-3'>Omar@hotmail.com</span>
										</div>
										<div className='contact-info'>
											<Phone />
											<span className='me-3'>9968461081</span>
										</div>
									</div>
								</div>

								<div className='col-4'>
									<div className='job-title'>آدمن</div>
								</div>
							</div>
						</div>

						<div className='user-details-footer'>
							<div className='row d-flex justify-content-center align-items-center'>
								<div className='col-2'>
									<button onClick={() => navigate('EditUserDetails')} className='edit-btn'>
										تعديل
									</button>
								</div>
								<div className='col-2'>
									<button className='close-btn' onClick={() => navigate('/')}>
										اغلاق
									</button>
								</div>
							</div>
						</div>
					</div>
				</Box>
			</Modal>
		</div>
	);
};

export default UserDetails;
