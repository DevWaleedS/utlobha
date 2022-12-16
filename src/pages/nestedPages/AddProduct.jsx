import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeVerifyModal } from '../../store/slices/VerifyStoreModal-slice';
// import Dropzone Library
import { useDropzone } from 'react-dropzone';

// sweet alert
import Swal from 'sweetalert2';

// MUI
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';

// ICONS
import { ReactComponent as UploadIcon } from '../../data/Icons/icon-24-uplad.svg';
import { IoIosArrowDown } from 'react-icons/io';

const style = {
	position: 'absolute',
	top: '97px',
	left: '-1%',
	transform: 'translate(0%, 0%)',
	width: '70%',
	height: '100%',
	overflow: 'auto',
	bgcolor: '#fff',
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const subCategories = ['سماعات هيدفون ', 'اكسسورات '];

const AddProduct = () => {
	const { isOpen } = useSelector((state) => state.VerifyModal);
	const dispatch = useDispatch(false);

	// To set the value from select input
	const [subCategory, setSubCategory] = React.useState([]);
	const [category, setCategory] = React.useState('');

	const handleCategoryChange = (event) => {
		setCategory(event.target.value);
	};

	const handleChange = (event) => {
		const {
			target: { value },
		} = event;
		setSubCategory(
			// On autofill we get a stringified value.
			typeof value === 'string' ? value.split(',') : value
		);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	// Sweet alert function
	const succMessage = () => {
		dispatch(closeVerifyModal());
		let timerInterval;

		Swal.fire({
			title: 'تم إضافه المنتج بنجاح',
			icon: 'success',
			timer: 4000,
			showCloseButton: true,
			timerProgressBar: true,
			showConfirmButton: false,
			didOpen: () => {
				const b = Swal.getHtmlContainer().querySelector('b');
				timerInterval = setInterval(() => {
					b.textContent = Swal.getTimerLeft();
				}, 100);
			},
			willClose: () => {
				clearInterval(timerInterval);
			},
		}).then((result) => {
			/* Read more about handling dismissals below */
			if (result.dismiss === Swal.DismissReason.timer) {
				console.log('I was closed by the timer');
			}
		});
	};

	// Use state with useDropzone library to set banners
	const [icon, setIcon] = React.useState([]);

	// Get some methods form useDropZone
	const { getRootProps, getInputProps } = useDropzone({
		accept: {
			'image/*': ['jpg', 'png'],
		},

		onDrop: (acceptedFiles) => {
			setIcon(
				acceptedFiles.map((banners) =>
					Object.assign(banners, {
						preview: URL.createObjectURL(banners),
					})
				)
			);
		},
	});

	// get banners
	const bannersImage = icon.map((banner) => (
		<div key={banner.name}>
			<div className='banner-preview' key={banner.path}>
				<img
					src={banner.preview}
					alt='upload banner'
					// Revoke data uri after image is loaded
					onLoad={() => {
						URL.revokeObjectURL(banner.preview);
					}}
				/>
			</div>
		</div>
	));

	/* UseEffects TO Handle memory leaks */
	useEffect(() => {
		// Make sure to revoke the data uris to avoid memory leaks, will run on unmount
		return () => icon.forEach((banner) => URL.revokeObjectURL(banner.preview));
	}, []);

	return (
		<div className='add-category-form' open={isOpen}>
			<Modal open={isOpen} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<div className='add-form-wrapper'>
						<div className='row '>
							<div className='col-12'>
								<div className='form-title  '>
									<h5 className='mb-3'> اضافة منتج</h5>
									<p> قم بإضافة منتجك والمعلومات الضرورية من هنا</p>
								</div>
							</div>
						</div>
						<form onSubmit={handleSubmit}>
							<div className='form-body'>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='product-image'> صورة المنتج</label>
									</div>
									<div className='col-7'>
										<div {...getRootProps()}>
											<div className='add-image-btn-box '>
												<UploadIcon />
												<div className='add-image-btn'>
													<label htmlFor='add-image'> اسحب الصورة هنا</label>
													<input {...getInputProps()} id='add-image' />
												</div>
												<span>( سيتم قبول الصور jpeg & png )</span>
											</div>
										</div>

										{/** preview banner here */}
										<div className=' banners-preview-container'>{bannersImage}</div>
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='product-number'> رقم المنتج SKU </label>
									</div>
									<div className='col-7'>
										<input type='text' id='product-number' placeholder=' رقم المنتج SKU ادخل ' />
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='product-name'> أسم المنتح </label>
									</div>
									<div className='col-7'>
										<input type='text' id='product-name' placeholder=' أسم المنتج' />
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='product-desc'> وصف المنتح </label>
									</div>
									<div className='col-7'>
										<textarea id='product-desc' placeholder='  قم بكتابه واضح للمنتج'></textarea>
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='product-category'> التصنيف </label>
									</div>
									<div className='col-7'>
										<FormControl sx={{ m: 0, width: '100%' }}>
											<InputLabel id='demo-multiple-checkbox-label sub-category'>الكل</InputLabel>
											<Select IconComponent={IoIosArrowDown} labelId='demo-multiple-checkbox-label' id='demo-multiple-checkbox' value={category} onChange={handleCategoryChange}>
												<MenuItem value={'اكسسوارات'}>اكسسوارات</MenuItem>
												<MenuItem value={'اجهزة جوال'}>اجهزة جوال</MenuItem>
												<MenuItem value={'لابتوب'}>لابتوب</MenuItem>
												<MenuItem value={' باوربنك'}> باوربنك</MenuItem>
											</Select>
										</FormControl>
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='sub-category'> التصنيفات الفرعية </label>
									</div>

									<div className='col-7'>
										<FormControl sx={{ m: 0, width: '100%' }}>
											<InputLabel id='demo-multiple-checkbox-label sub-category'>الكل</InputLabel>
											<Select
												IconComponent={IoIosArrowDown}
												labelId='demo-multiple-checkbox-label'
												id='demo-multiple-checkbox'
												multiple
												value={subCategory}
												onChange={handleChange}
												input={<OutlinedInput />}
												renderValue={(selected) => selected.join(', ')}
												MenuProps={MenuProps}
											>
												{subCategories.map((name) => (
													<MenuItem key={name} value={name}>
														<Checkbox checked={subCategory.indexOf(name) > -1} />
														<ListItemText primary={name} />
													</MenuItem>
												))}
												<MenuItem className='select-btn d-flex justify-content-center'>
													<Button className='button'> أختر</Button>
												</MenuItem>
											</Select>
										</FormControl>
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='price'> السعر SAR </label>
									</div>
									<div className='col-7'>
										<input type='text' id='price' />
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='low-price'> سعر التخفيض SAR </label>
									</div>
									<div className='col-7'>
										<input type='text' id='low-price' />
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='discount'> نسبة التخفيض % </label>
									</div>
									<div className='col-7'>
										<input type='text' id='discount' />
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='count'> أقصي كمية لكل عميل</label>
									</div>
									<div className='col-7'>
										<input type='text' id='count' />
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='seo'> وصف محركات البحث SEO </label>
									</div>
									<div className='col-7'>
										<textarea id='seo'></textarea>
									</div>
								</div>
							</div>

							<div className='form-footer'>
								<div className='row d-flex justify-content-center align-items-center'>
									<div className='col-4'>
										<button
											className='save-btn'
											onClick={() => {
												succMessage();
											}}
										>
											حفظ
										</button>
									</div>
									<div className='col-4'>
										<button className='close-btn' onClick={() => dispatch(closeVerifyModal())}>
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

export default AddProduct;
