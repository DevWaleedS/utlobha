import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeCustomerDataModal } from '../../store/slices/CustomerDataModal-slice';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import CustomerImage from '../../data/Icons/person.jpg';

const style = {
	position: 'absolute',
	top: '97px',
	left: '-1%',
	transform: 'translate(0%, 0%)',
	width: '70%',
	height: '100%',
	overflow: 'auto',
	bgcolor: '#fff',
	boxShadow: 24,
	// p: 4,
};
const CustomerData = () => {
	const { isOpen } = useSelector((state) => state.customerDataModal);
	const dispatch = useDispatch(false);

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className='add-category-form' open={isOpen}>
			<Modal open={isOpen} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<div className='add-form-wrapper add-customer-form customer-data '>
						<div className='row '>
							<div className='col-12'>
								<div className='form-title  '>
									<h5 className='mb-3'> بيانات العميل</h5>
									<p> استعرض بيانات العميل التي قام بالتسجيل من خلالها </p>
								</div>
							</div>
						</div>

						<form onSubmit={handleSubmit}>
							<div className='form-body'>
								<div className='row mb-5 '>
									<div className='col-6'>
										<div className='row mb-4'>
											<div className='col-8'>
												<label htmlFor='id-number' className='d-block mb-1'>
													الرقم ID
												</label>
												<input type='text' id='id-number' name='id-number' placeholder='DA88' value='DA88' />
											</div>
										</div>
										<div className='row mb-4'>
											<div className='col-8'>
												<label htmlFor='first-name' className='d-block mb-1'>
													الاسم الأول
												</label>
												<input type='text' id='first-name' name='first-name' placeholder='الاسم الأول' value='محمد' />
											</div>
										</div>
										<div className='row mb-4'>
											<div className='col-8'>
												<label htmlFor='last-name' className='d-block mb-2'>
													الاسم الثاني
												</label>
												<input type='text' id='last-name' name='last-name' placeholder='الاسم الثاني' value='عبدالرحمن' />
											</div>
										</div>
									</div>
									<div className='col-6 d-flex justify-content-end'>
										<div className='row'>
											<div className='col-8'>
												{/** preview banner here */}
												<div className=' banners-preview-container'>
													<div className='banner-preview'>
														<img src={CustomerImage} alt='upload banner' />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className='row mb-4 d-flex justify-content-between'>
									<div className='col-4'>
										<label htmlFor='email' className='d-block mb-2'>
											البريد الالكتروني
										</label>
										<input type='email' id='email' name='email' placeholder='sample@gmail.com' value='sample@gmail.com' />
									</div>

									<div className='col-4'>
										<label htmlFor='city' className='d-block mb-1'>
											المدينة
										</label>
										<select className='form-select' type='text' id='city' name='city' value='الرياض'>
											<option defaultValue='المدينه'>المدينة</option>
											<option defaultValue='الرياض'>الرياض</option>
											<option defaultValue='جده'>جده</option>
											<option defaultValue='المدينه المنورة'>المدينه المنورة</option>
										</select>
									</div>
								</div>

								<div className='row mb-5 justify-content-between'>
									<div className='col-4'>
										<label htmlFor='phone-number' className='d-block mb-1'>
											رقم الجوال
										</label>
										<input type='text' id='phone-number' name='phone-number' placeholder='رقم الجوال' value='966516840132' />
									</div>

									<div className='col-4'>
										<label htmlFor='gender' className='d-block mb-1'>
											الجنس
										</label>
										<select className='form-select' type='text' id='gender' name='gender' value='ذكر'>
											<option defaultValue='الجنس'>الجنس</option>
											<option defaultValue='ذكر'>ذكر</option>
											<option defaultValue='أنثي'>أنثي</option>
										</select>
									</div>
								</div>
							</div>

							<div className='form-footer'>
								<div className='row d-flex justify-content-center align-items-center'>
									<div className='col-5'>
										<button className='close-btn' onClick={() => dispatch(closeCustomerDataModal())}>
											إلغاء
										</button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</Box>
			</Modal>
		</div>
	);
};

export default CustomerData;
