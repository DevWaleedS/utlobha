import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeVerifyModal } from '../../store/slices/VerifyStoreModal-slice';

// MUI
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControlLabel, Switch } from '@mui/material';

// icons

import { ReactComponent as DateIcon } from '../../data/Icons/icon-date.svg';

// Modal Style
const style = {
	position: 'absolute',
	top: '97px',
	left: '-1%',
	transform: 'translate(0%, 0%)',
	width: '80%',
	height: '100%',
	overflow: 'auto',
	bgcolor: '#fff',
	boxShadow: 24,
};

const AddCoupon = () => {
	const { isOpen } = useSelector((state) => state.VerifyModal);
	const dispatch = useDispatch(false);

	//
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	//
	const [price, setPrice] = React.useState('price');
	const [shipping, setShipping] = React.useState('accept');
	const [lowPrice, setLowPrice] = React.useState('no');
	const [isEnable, setIsEnable] = React.useState('true');

	//
	const [date, setDate] = React.useState('');

	return (
		<div className='' open={isOpen}>
			<Modal open={isOpen} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<div className='add-form-wrapper add-coupon-form'>
						<div className='row '>
							<div className='col-12'>
								<div className='form-title  '>
									<h5 className='mb-3'> تفاصيل الكوبون</h5>
									<p> تعديل واستعراض بيانات الكوبون</p>
								</div>
							</div>
						</div>

						<form onSubmit={handleSubmit}>
							<div className='form-body'>
								<div className='row mb-5 d-flex  justify-content-evenly'>
									<div className='col-5'>
										<label htmlFor='coupon-name' className='d-block mb-1'>
											اسم الكوبون
										</label>
										<input type='text' name='coupon-name' id='coupon-name' placeholder='ادخل اسم الكوبون' />
									</div>
									<div className='col-5'>
										<label htmlFor='uses-count' className='d-block mb-1'>
											عدد مرات الاستخدام للجميع
										</label>
										<input type='text' name='uses-count' id='uses-count' placeholder='  عدد مرات استخدام الكوبون لجميع العملاء' />
									</div>
								</div>
								<div className='row mb-5 d-flex justify-content-evenly align-items-end'>
									<div className='col-5'>
										<label htmlFor='coupon-name ' className='d-block mb-1'>
											نوع الخصم
										</label>

										<RadioGroup
											className='d-flex flex-row mb-1'
											aria-labelledby='demo-controlled-radio-buttons-group'
											name='controlled-radio-buttons-group'
											value={price}
											onChange={(event) => setPrice(event.target.value)}
										>
											<div className='radio-box '>
												<FormControlLabel value='price' id='percent-price' control={<Radio />} />
												<label className={price === 'price' ? 'me-3' : 'disabled me-3'} htmlFor='percent-price'>
													نسبة مئوية %
												</label>
											</div>
											<div className='radio-box '>
												<FormControlLabel value='fixed' id='fixed-price' control={<Radio />} />
												<label className={price === 'fixed' ? 'me-3' : 'disabled me-3'} htmlFor='fixed-price'>
													مبلغ ثابت SAR
												</label>
											</div>
										</RadioGroup>

										<input type='text' name='add-price' id='add-ptice' placeholder=' ادخل النسبة او المبلغ' />
									</div>

									<div className='col-5'>
										<label htmlFor='user-count' className='d-block mb-1'>
											عدد مرات الاستخدام للزبون الواحد
										</label>
										<input type='text' name='user-count' id='user-count' placeholder='  عدد مرات استخدام الكوبون للعميل الواحد' />
									</div>
								</div>
								<div className='row mb-5 d-flex justify-content-evenly'>
									<div className='col-5'>
										<label htmlFor='coupon-name ' className='d-block mb-1'>
											تاريخ الانتهاء
										</label>

										<LocalizationProvider dateAdapter={AdapterDayjs} dir='rtl'>
											<DatePicker
												placeholder='30/Sep/2022'
												value={date}
												onChange={(newValue) => {
													setDate(newValue);
												}}
												components={{
													OpenPickerIcon: DateIcon,
												}}
												renderInput={(params) => <TextField {...params} />}
											/>
										</LocalizationProvider>
									</div>

									<div className='col-5'>
										<label htmlFor='user-count' className='d-block mb-1'>
											شحن مجاني
										</label>
										<RadioGroup
											className='d-flex flex-row'
											aria-labelledby='demo-controlled-radio-buttons-group'
											name='controlled-radio-buttons-group'
											value={shipping}
											onChange={(event) => setShipping(event.target.value)}
										>
											<div className='radio-box '>
												<FormControlLabel value='accept' id='accept-free-shipping' control={<Radio />} />
												<label className={shipping === 'accept' ? 'me-3' : 'disabled me-3'} htmlFor='accept-free-shipping'>
													نعم
												</label>
											</div>
											<div className='radio-box '>
												<FormControlLabel value='notAccept' id='no-free-shipping' control={<Radio />} />
												<label className={shipping === 'notAccept' ? 'me-3' : 'disabled me-3'} htmlFor='no-free-shipping'>
													لا
												</label>
											</div>
										</RadioGroup>
									</div>
								</div>
								<div className='row mb-5 d-flex justify-content-evenly'>
									<div className='col-5'>
										<label htmlFor='coupon-name ' className='d-block mb-1'>
											الحد الأدنى من المشتريات SAR
										</label>

										<input type='text' name='add-price' id='add-ptice' placeholder=' ادخل مبلغ الحد الأدني من المشتريات  ' />
									</div>

									<div className='col-5'>
										<label htmlFor='user-count' className='d-block mb-1'>
											استثناء المنتجات المخفضة
										</label>
										<RadioGroup
											className='d-flex flex-row'
											aria-labelledby='demo-controlled-radio-buttons-group'
											name='controlled-radio-buttons-group'
											value={lowPrice}
											onChange={(event) => setLowPrice(event.target.value)}
										>
											<div className='radio-box '>
												<FormControlLabel value='yes' id='accept-lower-product' control={<Radio />} />
												<label className={lowPrice === 'yes' ? 'me-3' : 'disabled me-3'} htmlFor='accept-lower-product'>
													نعم
												</label>
											</div>
											<div className='radio-box '>
												<FormControlLabel value='no' id='no-lower-product' control={<Radio />} />
												<label className={lowPrice === 'no' ? 'me-3' : 'disabled me-3'} htmlFor='no-lower-product'>
													لا
												</label>
											</div>
										</RadioGroup>
									</div>
								</div>
								<div className='row mb-5 d-flex justify-content-evenly'>
									<div className='col-5'></div>

									<div className='col-5 enable-switches'>
										<label htmlFor='user-count' className='d-block mb-1'>
											الحالة
										</label>
										<Switch defaultChecked value={isEnable} onChange={() => setIsEnable(!isEnable)} />

										<span className={isEnable ? '' : 'disabled'}>تفعيل / </span>
										<span className={isEnable ? 'disabled' : ''}> تعطيل</span>
									</div>
								</div>
							</div>

							<div className='form-footer'>
								<div className='row d-flex justify-content-center align-items-center'>
									<div className='col-4'>
										<button className='save-btn'>حفظ</button>
									</div>
									<div className='col-4'>
										<button className='close-btn' onClick={() => dispatch(closeVerifyModal())}>
											إغلاق
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

export default AddCoupon;
