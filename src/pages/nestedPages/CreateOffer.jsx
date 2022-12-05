import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeVerifyModal } from '../../store/slices/VerifyStoreModal-slice';
import { Link } from 'react-router-dom';
// MUI
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { FormControlLabel } from '@mui/material';
// MUI
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import OutlinedInput from '@mui/material/OutlinedInput';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import Select from '@mui/material/Select';

// ICONS
import howIcon from '../../data/Icons/icon_24_home.svg';
import { ReactComponent as SearchIcon } from '../../data/Icons/icon_24_search.svg';
import { ReactComponent as OffersIcon } from '../../data/Icons/icon-24-offer.svg';
import { ReactComponent as GiftIcon } from '../../data/Icons/icon-offer gift.svg';
import { ReactComponent as ArrowIcon } from '../../data/Icons/icon-30-arrwos back.svg';
import { ReactComponent as ArrowIconDown } from '../../data/Icons/icon-24-chevron_down.svg';
import { ReactComponent as Quantity } from '../../data/Icons/icon-24-Quantity.svg';
import { ReactComponent as DateIcon } from '../../data/Icons/icon-date.svg';
import { ReactComponent as MultiDevices } from '../../data/Icons/laptop icon-24.svg';
import { ReactComponent as MobileIcon } from '../../data/Icons/mobile-icon-24.svg';
import { ReactComponent as LaptopIcon } from '../../data/Icons/laptop-icon-24.svg';

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

const CreateOffer = () => {
	const { isOpen } = useSelector((state) => state.VerifyModal);
	const dispatch = useDispatch(false);

	const [offerPlatform, setOfferPlatform] = React.useState('');

	const handleChange = (event) => {
		setOfferPlatform(event.target.value);
	};

	//
	const [startDate, setStartDate] = React.useState('');
	const [endDate, setEndDate] = React.useState('');

	//
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	//
	const [price, setPrice] = React.useState('price');
	const [radioValue, setRadioValue] = React.useState('');

	// Handler for radio button
	const handleRadioSelect = (event) => {
		setRadioValue(event.target.value);
	};

	return (
		<div className='' open={isOpen}>
			<Modal open={isOpen} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style} className='nested-pages-modal'>
					<section className='create-offers-page p-3'>
						<div className='head-category mb-5'>
							<div className='row'>
								<nav aria-label='breadcrumb'>
									<ol className='breadcrumb'>
										<li className='breadcrumb-item'>
											<img src={howIcon} alt='' />
											<Link to='/' className='me-2'>
												الرئيسية
											</Link>
										</li>
										<li className='breadcrumb-item ' aria-current='page'>
											التسويق
										</li>
										<li className='breadcrumb-item ' aria-current='page'>
											العروض الخاصة
										</li>
										<li className='breadcrumb-item active' aria-current='page'>
											انشاء عرض جديد
										</li>
									</ol>
								</nav>
							</div>
						</div>

						<form onSubmit={handleSubmit}>
							{/** Offers Details */}
							<div className='create-offer-form-wrapper add-form-wrapper '>
								<div className='row '>
									<div className='col-12'>
										<div className='form-title  '>
											<h5 className=''> بيانات العرض</h5>
										</div>
									</div>
								</div>

								<div className='form-body'>
									<div className='row mb-5 d-flex  justify-content-evenly'>
										<div className='col-12 mb-4'>
											<div className='row-title'>
												<h4 className='mb-2'>نوع العرض</h4>
												<p>اختر نوع الخصم الذي سيتم تطبيقه على المشتريات</p>
											</div>
										</div>
										<div className='col-12'>
											<RadioGroup
												className='radio-btn-group'
												aria-labelledby='demo-controlled-radio-buttons-group'
												name='controlled-radio-buttons-group'
												value={price}
												onChange={(event) => setPrice(event.target.value)}
											>
												<div className='radio-box mb-1 '>
													<FormControlLabel value='price' id='percent-price' control={<Radio />} />
													<label className={price === 'price' ? 'active me-3' : ' me-3'} htmlFor='percent-price'>
														اذا اشترى العميل X يحصل على Y
													</label>
												</div>
												<div className='radio-box mb-1'>
													<FormControlLabel value='fixed' id='fixed-price' control={<Radio />} />
													<label className={price === 'fixed' ? 'active me-3' : ' me-3'} htmlFor='fixed-price'>
														مبلغ ثابت من قيمة مشتريات العميل
													</label>
												</div>
												<div className='radio-box '>
													<FormControlLabel value='percent' id='fixed-price' control={<Radio />} />
													<label className={price === 'percent' ? 'active me-3' : ' me-3'} htmlFor='fixed-price'>
														نسبة من قيمة مشتريات العميل
													</label>
												</div>
											</RadioGroup>
										</div>
									</div>
									<div className='row mb-5 d-flex  justify-content-evenly'>
										<div className='col-6'>
											<label htmlFor='offer-title ' className='d-block mb-1'>
												عنوان العرض
											</label>
											<div className='input-icon'>
												<OffersIcon />
											</div>
											<input type='text' id='offer-title' />
										</div>
										<div className='col-6'>
											<label htmlFor='offer-platform ' className='d-block mb-1'>
												منصة العرض
												<span className='sub-label'> ( اختر أين ترغب ان يظهر العرض للعملاء )</span>
											</label>

											<FormControl>
												<Select className='select-offer-platform ' labelId='demo-simple-select-label' id='demo-simple-select' value={offerPlatform} onChange={handleChange} IconComponent={ArrowIconDown}>
													<MenuItem value={'website'}>
														<LaptopIcon />
														<span className='me-3'>موقع المتجر</span>
													</MenuItem>
													<MenuItem value={'app'}>
														<MobileIcon />
														<span className='me-3'>تطبيق المتجر</span>
													</MenuItem>

													<MenuItem value={'app-and-website'}>
														<MultiDevices />
														<span className='me-3'>موقع و تطبيق المتجر</span>
													</MenuItem>
												</Select>
											</FormControl>
										</div>
									</div>
									<div className='row  d-flex  justify-content-evenly'>
										<div className='col-6'>
											<label htmlFor='start-offer-date ' className='d-block mb-2'>
												تاريخ بداية العرض
											</label>
											<LocalizationProvider dateAdapter={AdapterDayjs} dir='rtl'>
												<DatePicker
													label='تاريخ بداية العرض '
													value={startDate}
													onChange={(newValue) => {
														setStartDate(newValue);
													}}
													components={{
														OpenPickerIcon: DateIcon,
													}}
													renderInput={(params) => <TextField {...params} />}
												/>
											</LocalizationProvider>
										</div>
										<div className='col-6'>
											<label htmlFor='end-offer-date ' className='d-block mb-2'>
												تاريخ انتهاء العرض
											</label>
											<LocalizationProvider dateAdapter={AdapterDayjs} dir='rtl'>
												<DatePicker
													label='تاريخ نهاية العرض
'
													value={endDate}
													onChange={(newValue) => {
														setEndDate(newValue);
													}}
													components={{
														OpenPickerIcon: DateIcon,
													}}
													renderInput={(params) => <TextField {...params} />}
												/>
											</LocalizationProvider>
										</div>
									</div>
								</div>
							</div>

							{/** Offers options */}
							<div className='create-offer-form-wrapper offers-options'>
								<div className='row '>
									<div className='col-12'>
										<div className='form-title  '>
											<h5 className=''> خيارات العرض</h5>
										</div>
									</div>
								</div>

								<div className='form-body'>
									<div className='row mb-5 d-flex  justify-content-evenly'>
										<div className='col-12'>
											<div className='row-title'>
												<h4 className='mb-2'>مشتريات العميل </h4>
												<p> حدد المنتجات والكميات المطلوب تواجدها في سلة المشتريات لتطبيق الخصم</p>
											</div>
										</div>
									</div>
									{/** --- */}
									<div className='row mb-5 d-flex  justify-content-start'>
										<div className='col-6'>
											<label htmlFor='count ' className='d-block mb-1'>
												الكمية
											</label>
											<div className='input-icon'>
												<Quantity className='quantity' />
											</div>
											<input type='text' id='count' placeholder='0' />
										</div>
									</div>
									{/** --- */}
									<div className='row mb-1 d-flex  justify-content-evenly'>
										<RadioGroup className=' d-flex flex-row' aria-labelledby='demo-controlled-radio-buttons-group' name='controlled-radio-buttons-group' value={radioValue} onChange={handleRadioSelect}>
											<div className='col-6'>
												<div className='radio-box mb-1 '>
													<FormControlLabel value='select-products' id='select-products' control={<Radio />} />

													<label className={radioValue === 'select-products' ? 'active me-3' : ' me-3'} htmlFor='select-products'>
														اختيار منتجات
													</label>
												</div>
											</div>
											<div className='col-6'>
												<div className='radio-box mb-1'>
													<FormControlLabel id='select-category' control={<Radio />} value='select-category' onChange={handleRadioSelect} />
													<label className={radioValue === 'select-category' ? 'active me-3' : ' me-3'} htmlFor='select-category'>
														اختيار تصنيفات
													</label>
												</div>
											</div>
										</RadioGroup>
									</div>
									{/** --- */}
									<div className='row mb-5 d-flex  justify-content-evenly '>
										<div className='col-6'>
											<div className='input-icon'>
												<SearchIcon className='search-icon' />
											</div>
											<input type='text' id='select-products ' placeholder='البحث في المنتجات.' />
										</div>
										<div className='col-6'>
											<select className='form-select' id='offer-platform'>
												<option defaultValue={'موقع المتجر'}>
													<span className='me-2'> الكل</span>
												</option>
												<option value='1'>1</option>
												<option value='2'>3</option>
												<option value='3'>1</option>
												<option value='3'>2</option>
											</select>
										</div>
									</div>
									{/** --- */}
									<div className='row mb-5 d-flex  justify-content-evenly'>
										<div className='col-12'>
											<div className='row-title'>
												<h4 className='mb-2'> يحصل العميل على </h4>
												<p> حدد ما سوف يحصل علىه العميل عند استفياء الشروط السابقة</p>
											</div>
										</div>
									</div>
									{/** --- */}
									<div className='row mb-5 d-flex  justify-content-start'>
										<div className='col-6'>
											<label htmlFor='count ' className='d-block mb-1'>
												الكمية
											</label>
											<div className='input-icon'>
												<Quantity className='quantity' />
											</div>
											<input type='text' id='count' placeholder='0' />
										</div>
									</div>
									{/** --- */}
									<div className='row mb-1 d-flex  justify-content-evenly'>
										<RadioGroup className=' d-flex flex-row' aria-labelledby='demo-controlled-radio-buttons-group' name='controlled-radio-buttons-group' value={radioValue} onChange={handleRadioSelect}>
											<div className='col-6'>
												<div className='radio-box mb-1 '>
													<FormControlLabel value='select-products' id='select-products' control={<Radio />} />

													<label className={radioValue === 'select-products' ? 'active me-3' : ' me-3'} htmlFor='select-products'>
														اختيار منتجات
													</label>
												</div>
											</div>
											<div className='col-6'>
												<div className='radio-box mb-1'>
													<FormControlLabel id='select-category' control={<Radio />} value='select-category' onChange={handleRadioSelect} />
													<label className={radioValue === 'select-category' ? 'active me-3' : ' me-3'} htmlFor='select-category'>
														اختيار تصنيفات
													</label>
												</div>
											</div>
										</RadioGroup>
									</div>
									{/** --- */}
									<div className='row mb-5 d-flex  justify-content-evenly '>
										<div className='col-6'>
											<div className='input-icon'>
												<SearchIcon className='search-icon' />
											</div>
											<input type='text' id='select-products ' placeholder='البحث في المنتجات.' />
										</div>
										<div className='col-6'>
											<select className='form-select' id='offer-platform'>
												<option defaultValue={'موقع المتجر'}>
													<span className='me-2'> الكل</span>
												</option>
												<option value='1'>1</option>
												<option value='2'>3</option>
												<option value='3'>1</option>
												<option value='3'>2</option>
											</select>
										</div>
									</div>
									{/** --- */}
									<div className='row d-flex  justify-content-evenly'>
										<div className='col-12 mb-2'>
											<h4>نوع الخصم</h4>
										</div>
										<RadioGroup className=' d-flex flex-row' aria-labelledby='demo-controlled-radio-buttons-group' name='controlled-radio-buttons-group' value={radioValue} onChange={handleRadioSelect}>
											<div className='col-6'>
												<div className='radio-box mb-1 '>
													<FormControlLabel id='discount' control={<Radio />} value='discount' />

													<label className={radioValue === 'discount' ? 'active me-3' : ' me-3'} htmlFor='discount'>
														نسبة خصم
													</label>
												</div>
											</div>
											<div className='col-6'>
												<div className='radio-box mb-1'>
													<FormControlLabel id='free-product' control={<Radio />} value='free-product' />
													<label className={radioValue === 'free-product' ? 'active me-3' : ' me-3'} htmlFor='free-product'>
														منتج مجاني
													</label>
												</div>
											</div>
										</RadioGroup>
									</div>
								</div>
							</div>

							{/** Offers data */}
							<div className='create-offer-form-wrapper offers-data'>
								<div className='row '>
									<div className='col-12'>
										<div className='form-title  d-flex align-content-center'>
											<GiftIcon />
											<h5 className=' me-3'>ملخص العرض</h5>
										</div>
									</div>
								</div>

								<div className='form-body'>
									<div className='row  d-flex  justify-content-evenly'>
										<div className='arrow-icon'>
											<ArrowIcon />
										</div>

										<div className='col-6'>
											<div className='offer-terms offer-box'></div>
										</div>
										<div className='col-6'>
											<div className='offer offer-box'></div>
										</div>
									</div>
								</div>
							</div>

							{/** form buttons */}
							<div className='form-footer-btn'>
								<div className='row'>
									<div className='col-6'>
										<button className='create-offer-btn active-offer-btn'>تفعيل العرض</button>
									</div>
									<div className='col-6'>
										<button
											className='create-offer-btn cancel-offer-btn'
											onClick={() => {
												dispatch(closeVerifyModal());
											}}
										>
											الغاء العرض
										</button>
									</div>
								</div>
							</div>
						</form>
					</section>
				</Box>
			</Modal>
		</div>
	);
};

export default CreateOffer;
