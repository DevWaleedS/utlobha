import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAddUserModal } from '../../store/slices/AddNewUser-slice';

// import Dropzone Library
import { useDropzone } from 'react-dropzone';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

// icons
import { ReactComponent as Message } from '../../data/Icons/icon-24-email.svg';
import { ReactComponent as User } from '../../data/Icons/icon-24-user.svg';
import { ReactComponent as Password } from '../../data/Icons/icon-24-invisible.svg';
import { ReactComponent as Mobile } from '../../data/Icons/mobile-icon-24.svg';

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
const AddNewUser = () => {
	const { isOpen } = useSelector((state) => state.AddNewUserModal);
	const dispatch = useDispatch(false);

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
		<div className='add-category-form' open={isOpen}>
			<Modal open={isOpen} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<div className='add-form-wrapper add-user-form'>
						<div className='row '>
							<div className='col-12'>
								<div className='form-title  '>
									<h5 className='mb-3'> اضافة مستخدم جديد</h5>
									<p> اضافة مستخدم لفريق إدارة المتجر </p>
								</div>
							</div>
						</div>

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
										<input type='text' id='full-name' name='full-name' placeholder='' />
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
										<input type='text' id='user-name' name='user-name' placeholder='' />
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
											<option value='   آدمن'> آدمن</option>
											<option value='   سوبر آدمن'> سوبر آدمن</option>
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
										<div className='input-icons password-icon'>
											<Password />
										</div>
										<input type='password' id='password' name='password' placeholder='' />
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
										<input type='email' id='email' name='email' placeholder='' />
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
										<input type='text' id='phone-number' name='phone-number' placeholder='' />
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
										<button className='save-btn'>حفظ</button>
									</div>
									<div className='col-4'>
										<button className='close-btn' onClick={() => dispatch(closeAddUserModal())}>
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

export default AddNewUser;
