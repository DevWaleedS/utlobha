import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

// import Dropzone Library
import { useDropzone } from 'react-dropzone';

// sweet alert
import Swal from 'sweetalert2';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// icons
import { ReactComponent as Message } from '../../data/Icons/icon-24-email.svg';
import { ReactComponent as User } from '../../data/Icons/icon-24-user.svg';
import { ReactComponent as Password } from '../../data/Icons/icon-24-invisible.svg';
import { ReactComponent as Mobile } from '../../data/Icons/mobile-icon-24.svg';

import { AiOutlineEyeInvisible } from 'react-icons/ai';

const style = {
	position: 'absolute',
	top: '97px',
	left: '-1%',
	transform: 'translate(0%, 0%)',
	width: '81%',
	height: '100%',
	overflow: 'auto',
	bgcolor: '#fff',
};
const EditUserPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	// Get Data From Redux Store
	const usersData = useSelector((state) => state.ManagementTableData);

	const userData = usersData.filter((user) => {
		return user.id === id;
	});

	// Show and hidden password function
	const [passwordType, setPasswordType] = useState('password');
	const [showPasswordIcon, setShowPasswordIcon] = useState(<Password />);

	const showPasswordToggle = () => {
		if (passwordType === 'password') {
			setPasswordType('text');
			setShowPasswordIcon(<AiOutlineEyeInvisible />);
		} else {
			setPasswordType('password');
			setShowPasswordIcon(<Password />);
		}
	};

	// Sweet alert function
	const succMessage = () => {
		navigate('/Management');
		let timerInterval;

		Swal.fire({
			title: 'تم تعديل المستخدم  بنجاح',
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

	//
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	//  use dropzone to get personal image
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	const files = acceptedFiles.map((file) => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	));

	return (
		<div className='add-category-form' open={true}>
			<Modal open={true} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<div className='add-form-wrapper add-user-form'>
						<div className='row '>
							<div className='col-12'>
								<div className='form-title  '>
									<h5 className='mb-3'> تعديل بيانات المستخدم </h5>
									<p> اضافة مستخدم لفريق إدارة المتجر </p>
								</div>
							</div>
						</div>
						{userData.map((user) => (
							<form onSubmit={handleSubmit}>
								<div className='form-body'>
									<div className='row mb-4'>
										<div className='col-2'>
											<label htmlFor='full-name' className=''>
												الإسم الكامل
											</label>
										</div>
										<div className='col-9'>
											<div className='input-icons'>
												<User />
											</div>
											<input type='text' id='full-name' name='full-name' placeholder='' value={user.userName} />
										</div>
									</div>

									<div className='row mb-4'>
										<div className='col-2'>
											<label htmlFor='user-name' className=''>
												اسم المستخدم
											</label>
										</div>
										<div className='col-9'>
											<div className='input-icons'>
												<User />
											</div>
											<input type='text' id='user-name' name='user-name' placeholder='' value={'k22'} />
										</div>
									</div>
									<div className='row mb-4'>
										<div className='col-2'>
											<label htmlFor='job-title' className=''>
												الدور الوظيفي
											</label>
										</div>
										<div className='col-9'>
											<select className='form-select' id='job-title' name='job-title' placeholder=''>
												<option defaultValue='اختر نوع الدور الوظيفي'>اختر نوع الدور الوظيفي</option>
												<option value='آدمن'> آدمن</option>
												<option value='سوبر آدمن'> سوبر آدمن</option>
											</select>
										</div>
									</div>
									<div className='row mb-4'>
										<div className='col-2'>
											<label htmlFor='password' className=''>
												كلمة المرور
											</label>
										</div>
										<div className='col-9'>
											<div className='input-icons password-icon' onClick={showPasswordToggle}>
												{showPasswordIcon}
											</div>
											<input type={passwordType} id='password' name='password' placeholder='' />
										</div>
									</div>
									<div className='row mb-4'>
										<div className='col-2'>
											<label htmlFor='email' className=''>
												البريد الإلكتروني
											</label>
										</div>
										<div className='col-9'>
											<div className='input-icons'>
												<Message />
											</div>
											<input type='email' id='email' name='email' placeholder='' value={user.email} />
										</div>
									</div>
									<div className='row mb-4'>
										<div className='col-2'>
											<label htmlFor='phone-number' className=''>
												رقم الهاتف
											</label>
										</div>
										<div className='col-9'>
											<div className='input-icons'>
												<Mobile />
											</div>
											<input type='text' id='phone-number' name='phone-number' placeholder='' value={'96654845613'} />
										</div>
									</div>
									<div className='row mb-4'>
										<div className='col-2'>
											<label htmlFor='personal-image' className=''>
												الصورة الشخصية
											</label>
										</div>
										<div className='col-9'>
											<div {...getRootProps({ className: 'upload-personal-image d-flex justify-content-between' })}>
												<input {...getInputProps()} id='personal-image' name='personal-image' />
												{files.length <= 0 ? <p className='helper'>اختر صورة PNG أو JPG فقط </p> : <p className='d-none'>اختر صورة PNG أو JPG فقط </p>}

												<span> استعراض</span>
												<ul>{files}</ul>
											</div>
										</div>
									</div>
									<div className='row mb-4'>
										<div className='col-2'>
											<label htmlFor='status' className=''>
												الحالة
											</label>
										</div>

										<div className='col-9'>
											<select className='form-select' id='status' name='status' placeholder=''>
												<option defaultValue='   مفعل'> مفعل</option>
												<option value='   غير مفعل'> غير مفعل</option>
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
											<button className='close-btn' onClick={() => navigate('/Management')}>
												إلغاء
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

export default EditUserPage;
