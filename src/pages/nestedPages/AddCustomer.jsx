import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeVerifyModal } from '../../store/slices/VerifyStoreModal-slice';
// import Dropzone Library
import { useDropzone } from 'react-dropzone';
// sweet alert
import Swal from 'sweetalert2';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { ReactComponent as ImageIcon } from '../../data/Icons/icon-24-image.svg';
import { ReactComponent as AddImageIcon } from '../../data/Icons/icon-24-action-add.svg';
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
const AddCustomer = () => {
	const { isOpen } = useSelector((state) => state.VerifyModal);
	const dispatch = useDispatch(false);

	const handleSubmit = (event) => {
		event.preventDefault();
	};


	// Sweet alert function
	const succMessage = () => {
		dispatch(closeVerifyModal());
		let timerInterval;

		Swal.fire({
			title: 'تم إضافه عميل جديد بنجاح',
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
	const [userImage, setUserImage] = React.useState([]);

	// Get some methods form useDropZone
	const { getRootProps, getInputProps } = useDropzone({
		accept: {
			'image/*': [],
		},

		onDrop: (acceptedFiles) => {
			setUserImage(
				acceptedFiles.map((banners) =>
					Object.assign(banners, {
						preview: URL.createObjectURL(banners),
					})
				)
			);
		},
	});

	// get banners
	const bannersImage = userImage.map((image) => (
		<div key={image.name}>
			<div className='banner-preview' key={image.path}>
				<img
					src={image.preview}
					alt='upload banner'
					// Revoke data uri after image is loaded
					onLoad={() => {
						URL.revokeObjectURL(image.preview);
					}}
				/>
			</div>
		</div>
	));

	/* UseEffects TO Handle memory leaks */
	useEffect(() => {
		// Make sure to revoke the data uris to avoid memory leaks, will run on unmount
		return () => userImage.forEach((image) => URL.revokeObjectURL(image.preview));
	}, []);

	return (
		<div className='add-category-form' open={isOpen}>
			<Modal open={isOpen} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<div className='add-form-wrapper add-customer-form'>
						<div className='row '>
							<div className='col-12'>
								<div className='form-title  '>
									<h5 className='mb-3'> اضافة عميل</h5>
									<p> قم بإدخال بيانات العميل لتسجيل حسابه في المتجر </p>
								</div>
							</div>
						</div>

						<form onSubmit={handleSubmit}>
							<div className='form-body'>
								<div className='row  '>
									<div className='col-6'>
										<div className='row mb-4'>
											<div className='col-8'>
												<label htmlFor='id-number' className='d-block mb-2'>
													الرقم ID
												</label>
												<input type='text' id='id-number' name='id-number' placeholder='DA88' />
											</div>
										</div>
										<div className='row mb-4'>
											<div className='col-8'>
												<label htmlFor='first-name' className='d-block mb-2'>
													الاسم الأول
												</label>
												<input type='text' id='first-name' name='first-name' placeholder='الاسم الأول' />
											</div>
										</div>
										<div className='row mb-4'>
											<div className='col-8'>
												<label htmlFor='last-name' className='d-block mb-2'>
													الاسم الثاني
												</label>
												<input type='text' id='last-name' name='last-name' placeholder='الاسم الثاني' />
											</div>
										</div>
									</div>
									<div className='col-6 d-flex justify-content-end'>
										<div className='row'>
											<div className='col-8'>
												{/** preview banner here */}
												<div className=' banners-preview-container'>{bannersImage.length === 0 ? <ImageIcon className='image-icon' /> : bannersImage}</div>

												<div {...getRootProps()}>
													<div className='add-image-btn-bx d-flex justify-content-between align-items-center'>
														<label htmlFor='add-image'> اضف صورة</label>
														<div className='add-image-btn'>
															<input {...getInputProps()} id='add-image' />
															<AddImageIcon />
														</div>
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
										<input type='email' id='email' name='email' placeholder='sample@gmail.com' />
									</div>
									<div className='col-4'>
										<label htmlFor='city' className='d-block mb-2'>
											المدينة
										</label>
										<select className='form-select' type='text' id='city' name='city'>
											<option defaultValue='المدينه'>المدينة</option>
											<option defaultValue='الرياض'>الرياض</option>
											<option defaultValue='جده'>جده</option>
											<option defaultValue='المدينه المنورة'>المدينه المنورة</option>
										</select>
									</div>
								</div>
								<div className='row mb-4 justify-content-between'>
									<div className='col-4'>
										<label htmlFor='phone-number' className='d-block mb-2'>
											رقم الجوال
										</label>
										<input type='text' id='phone-number' name='phone-number' placeholder='رقم الجوال' />
									</div>

									<div className='col-4'>
										<label htmlFor='gender' className='d-block mb-2'>
											الجنس
										</label>
										<select className='form-select' type='text' id='gender' name='gender'>
											<option defaultValue='الجنس'>الجنس</option>
											<option defaultValue='ذكر'>ذكر</option>
											<option defaultValue='أنثي'>أنثي</option>
										</select>
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

export default AddCustomer;
