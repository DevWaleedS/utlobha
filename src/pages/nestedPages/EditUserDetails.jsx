import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// import Dropzone Library
import { useDropzone } from 'react-dropzone';

// icons
import { ReactComponent as Message } from '../../data/Icons/icon-24-email.svg';
import { ReactComponent as Phone } from '../../data/Icons/icon-24- call.svg';
import { ReactComponent as Mobile } from '../../data/Icons/mobile-icon-24.svg';
import { ReactComponent as UploadIcon } from '../../data/Icons/icon-24-upload_outlined.svg';

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

const EditUserDetails = () => {
	const navigate = useNavigate();

	//
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	// Use state with useDropzone library to set banners
	const [userImage, setUserImage] = React.useState([]);

	const files = userImage.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	// Get some methods form useDropZone
	const { getRootProps, getInputProps } = useDropzone({
		accept: {
			'image/*': [],
		},

		onDrop: (acceptedFiles) => {
			setUserImage(
				acceptedFiles.map((image) =>
					Object.assign(image, {
						preview: URL.createObjectURL(image),
					})
				)
			);
		},
	});

	// get banners
	const bannersImage = userImage.map((image) => (
		<div key={image.name}>
			<img
				key={image.path}
				src={image.preview}
				alt='upload banner'
				// Revoke data uri after image is loaded
				onLoad={() => {
					URL.revokeObjectURL(image.preview);
				}}
			/>
		</div>
	));

	/* UseEffects TO Handle memory leaks */
	useEffect(() => {
		// Make sure to revoke the data uris to avoid memory leaks, will run on unmount
		return () => userImage.forEach((image) => URL.revokeObjectURL(image.preview));
	}, []);

	return (
		<div className='add-category-form' open={true}>
			<Modal open={true} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<div className='user-details'>
						<div className='row '>
							<div className='col-12'>
								<div className='user-details-title'>
									<h5 className='mb-3'> تعديل بيانات حسابي</h5>
									<div className='row'>
										<nav aria-label='breadcrumb'>
											<ol className='breadcrumb'>
												<li className='breadcrumb-item text-bold'>حساب الادمن </li>

												<li className='breadcrumb-item active' aria-current='page'>
													تعديل بيانات الحساب
												</li>
											</ol>
										</nav>
									</div>
								</div>
							</div>
						</div>

						<form onSubmit={handleSubmit}>
							<div className='user-details-body edit-user-body'>
								<div className='row mb-5'>
									<div className='col-2'>
										{/** preview banner here */}
										<div className=' banners-preview'>{bannersImage.length === 0 ? <img className='img-fluid' src={User} alt='user' /> : bannersImage}</div>
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

								<div className='row mb-4'>
									<div className='col-4'>
										<label className='d-block mb-2' htmlFor='user-name'>
											اسم المستخدم
										</label>
										<input type='text' name='user-name' id='user-name' placeholder='Omar' />
									</div>
									<div className='col-2'></div>

									<div className='col-4'>
										<label className='d-block mb-2' htmlFor='password'>
											كلمة المرور
										</label>
										<input type='password' name='password' id='password' placeholder='00000000' className='d-block' />
										<span className='password-hint'>أدخل أرقام وحروف ورموز</span>
									</div>
								</div>

								<div className='row mb-4'>
									<div className='col-4'>
										<label className='d-block mb-2' htmlFor='email'>
											البريد الالكتروني
										</label>
										<input type='email' name='email' id='email' placeholder='Omar.sample@sa.com' />
									</div>
									<div className='col-2'></div>

									<div className='col-4'>
										<label className='d-block mb-2' htmlFor='re-password'>
											تأكيد كلمة المرور
										</label>
										<input type='password' name='re-password' id='re-password' placeholder='00000000' className='d-block' />
										<span className='password-hint'>أدخل أرقام وحروف ورموز</span>
									</div>
								</div>
								<div className='row mb-4'>
									<div className='col-4'>
										<label className='d-block mb-2' htmlFor='upload-user-image'>
											الصورة الشخصية
										</label>
										<div {...getRootProps({ className: 'upload-user-image d-flex justify-content-between' })}>
											<input {...getInputProps()} id='upload-user-image' name='upload-user-image' />
											<ul>{files}</ul>
											<span className='upload-icon'>
												<UploadIcon />
											</span>
										</div>
									</div>
									<div className='col-2'></div>

									<div className='col-4'></div>
								</div>
								<div className='row mb-4'>
									<div className='col-4'>
										<label className='d-block mb-2' htmlFor='phone-number'>
											رقم الهاتف
										</label>

										<input type='text' name='phone-number' id='phone-number' placeholder='96654845613' className='phone-input' />
										<span className='input-icon'>
											<Mobile />
										</span>
									</div>
									<div className='col-2'></div>

									<div className='col-4'></div>
								</div>
							</div>

							<div className='user-details-footer'>
								<div className='row d-flex justify-content-center align-items-center'>
									<div className='col-3'>
										<button onClick={() => navigate('/UserDetails')} className='close-btn w-100'>
											حفظ وإغلاق
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

export default EditUserDetails;
