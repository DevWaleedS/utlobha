import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import DateRangePicker from 'rsuite/DateRangePicker';
import 'rsuite/dist/rsuite.min.css';

// MUI
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControlLabel, Switch } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

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

const EditCoupon = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	// 
	const couponData = useSelector((state) => state.CouponTableData);

	const coupon = couponData.filter((coupon) => {
		return coupon.id === id;
	});

	

	//
	const handleSubmit = (event) => {
		event.preventDefault();
	};

  // 
  const confirmAlert = () => {
    Swal.fire({
      title: 'هل ترغب حقاً في إعادة تفعيل الكوبون !',
      
				});
  }

	//
	const [price, setPrice] = React.useState('price');
	const [shipping, setShipping] = React.useState('accept');
	const [lowPrice, setLowPrice] = React.useState('no');
	const [isEnable, setIsEnable] = React.useState('true');

	return (
		<div className='' open={true}>
			<Modal open={true} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<div className='add-form-wrapper add-coupon-form coupon-details'>
						<div className='row '>
							<div className='col-12'>
								<div className='form-title  '>
									<h5 className='mb-3'> تفاصيل الكوبون</h5>
									<p> تعديل واستعراض بيانات الكوبون</p>
								</div>
							</div>
						</div>

						<div className='row coupon-status-wrapper pt-5  d-flex  justify-content-start'>
							<div className='col-5'>
								{coupon.map((currentCoupon) =>
									currentCoupon.status === 'فعال' ? (
										<div className='coupon-status active'>{currentCoupon.status}</div>
									) : currentCoupon.status === 'منتهي' ? (
										<Fragment>
											<div className='coupon-status pending'>{currentCoupon.status}</div>
											<button className='enable-coupon-btn' onClick={() => confirmAlert()}>
												إعادة تفعيل الكوبون
											</button>
										</Fragment>
									) : currentCoupon.status === 'معطل' ? (
										<Fragment>
											<div className='coupon-status disabled'>{currentCoupon.status}</div>
											<button className='enable-coupon-btn' onClick={() => confirmAlert()}>
												إعادة تفعيل الكوبون
											</button>
										</Fragment>
									) : (
										''
									)
								)}
							</div>
						</div>

						{coupon.map((currentCoupon) => (
							<form onSubmit={handleSubmit} className={currentCoupon.status === 'منتهي' || currentCoupon.status === 'معطل' ? 'disabled' : ''}>
								<div className='form-body'>
									<div className='row mb-5 d-flex  justify-content-evenly'>
										<div className='col-5'>
											<label htmlFor='coupon-name' className='d-block mb-1'>
												اسم الكوبون
											</label>
											{currentCoupon.status === 'منتهي' || currentCoupon.status === 'معطل' ? (
												<input type='text' name='coupon-name' id='coupon-name' placeholder='ادخل اسم الكوبون' value={'DEF12'} disabled />
											) : (
												<input type='text' name='coupon-name' id='coupon-name' placeholder='ادخل اسم الكوبون' value={'DEF12'} />
											)}
										</div>
										<div className='col-5'>
											<label htmlFor='uses-count' className='d-block mb-1'>
												عدد مرات الاستخدام للجميع
											</label>
											{currentCoupon.status === 'منتهي' || currentCoupon.status === 'معطل' ? (
												<input type='text' name='uses-count' id='uses-count' placeholder='  عدد مرات استخدام الكوبون لجميع العملاء' value={'500'} disabled />
											) : (
												<input type='text' name='uses-count' id='uses-count' placeholder='  عدد مرات استخدام الكوبون لجميع العملاء' value={'500'} />
											)}
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
													{currentCoupon.status === 'منتهي' || currentCoupon.status === 'معطل' ? (
														<FormControlLabel value='price' id='percent-price' control={<Radio />} disabled />
													) : (
														<FormControlLabel value='price' id='percent-price' control={<Radio />} />
													)}
													<label className={price === 'price' ? 'me-3' : 'disabled me-3'} htmlFor='percent-price'>
														نسبة مئوية %
													</label>
												</div>
												<div className='radio-box '>
													{currentCoupon.status === 'منتهي' || currentCoupon.status === 'معطل' ? (
														<FormControlLabel value='fixed' id='fixed-price' control={<Radio />} disabled />
													) : (
														<FormControlLabel value='fixed' id='fixed-price' control={<Radio />} />
													)}
													<label className={price === 'fixed' ? 'me-3' : 'disabled me-3'} htmlFor='fixed-price'>
														مبلغ ثابت SAR
													</label>
												</div>
											</RadioGroup>

											{currentCoupon.status === 'منتهي' || currentCoupon.status === 'معطل' ? (
												<input type='text' name='add-price' id='add-ptice' placeholder=' ادخل النسبة او المبلغ' value={'15'} disabled />
											) : (
												<input type='text' name='add-price' id='add-ptice' placeholder=' ادخل النسبة او المبلغ' value={'15'} />
											)}
										</div>

										<div className='col-5'>
											<label htmlFor='user-count' className='d-block mb-1'>
												عدد مرات الاستخدام للزبون الواحد
											</label>
											{currentCoupon.status === 'منتهي' || currentCoupon.status === 'معطل' ? (
												<input type='text' name='user-count' id='user-count' placeholder='  عدد مرات استخدام الكوبون للعميل الواحد' value={'1'} disabled />
											) : (
												<input type='text' name='user-count' id='user-count' placeholder='  عدد مرات استخدام الكوبون للعميل الواحد' value={'1'} />
											)}
										</div>
									</div>
									<div className='row mb-5 d-flex justify-content-evenly'>
										<div className='col-5'>
											<label htmlFor='coupon-name ' className='d-block mb-1'>
												تاريخ الانتهاء
											</label>

                      {currentCoupon.status === 'منتهي' || currentCoupon.status === 'معطل' ? (
                        
												<DateRangePicker dir='rtl' placeholder='اختر الفترة من - إلي' name='expire-date' id='expire-date' disabled />
											) : (
												<DateRangePicker dir='rtl' placeholder='اختر الفترة من - إلي' name='expire-date' id='expire-date'  />
											)}
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
													{currentCoupon.status === 'منتهي' || currentCoupon.status === 'معطل' ? (
														<FormControlLabel value='accept' id='accept-free-shipping' control={<Radio />} disabled />
													) : (
														<FormControlLabel value='accept' id='accept-free-shipping' control={<Radio />} />
													)}
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

											{currentCoupon.status === 'منتهي' || currentCoupon.status === 'معطل' ? (
												<input type='text' name='add-price' id='add-ptice' placeholder=' ادخل مبلغ الحد الأدني من المشتريات  ' value={'1200'} disabled />
											) : (
												<input type='text' name='add-price' id='add-ptice' placeholder=' ادخل مبلغ الحد الأدني من المشتريات  ' value={'1200'} />
											)}
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
													{currentCoupon.status === 'منتهي' || currentCoupon.status === 'معطل' ? (
														<FormControlLabel value='yes' id='accept-lower-product' control={<Radio />} disabled />
													) : (
														<FormControlLabel value='yes' id='accept-lower-product' control={<Radio />} />
													)}
													<label className={lowPrice === 'yes' ? 'me-3' : 'disabled me-3'} htmlFor='accept-lower-product'>
														نعم
													</label>
												</div>
												<div className='radio-box '>
													{currentCoupon.status === 'منتهي' || currentCoupon.status === 'معطل' ? (
														<FormControlLabel value='no' id='no-lower-product' control={<Radio />} disabled />
													) : (
														<FormControlLabel value='no' id='no-lower-product' control={<Radio />} />
													)}
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

											{currentCoupon.status === 'منتهي' || currentCoupon.status === 'معطل' ? (
												<Switch defaultChecked value={isEnable} onChange={() => setIsEnable(!isEnable)} disabled />
											) : (
												<Switch defaultChecked value={isEnable} onChange={() => setIsEnable(!isEnable)} />
											)}
											<span className={isEnable ? '' : 'disabled'}>تفعيل / </span>
											<span className={isEnable ? 'disabled' : ''}> تعطيل</span>
										</div>
									</div>
								</div>

								<div className='form-footer'>
									<div className='row d-flex justify-content-center align-items-center'>
										<div className={currentCoupon.status === 'منتهي' || currentCoupon.status === 'معطل' ? 'd-none ' : 'col-4'}>
											<button className='save-btn'>حفظ</button>
										</div>
										<div className='col-4'>
											<button className='close-btn' onClick={() => navigate('/Coupon')}>
												إغلاق
											</button>
										</div>
									</div>
								</div>
							</form>
						))}
					</div>
				</Box>
			</Modal>
		</div>
	);
};

export default EditCoupon;
