import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
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
import Select from '@mui/material/Select';

// ICONS

import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';

// Modal style
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

const AddSubCategory = () => {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	// To set the value from select input
	const [category, setCategory] = React.useState('');

	const handleChange = (event) => {
		setCategory(event.target.value);
	};

	// Sweet alert function
	const succMessage = () => {
		navigate('/Category');
		let timerInterval;

		Swal.fire({
			title: 'تم إضافه التصنيف بنجاح',
			icon: 'success',
			timer: 4000,
			showCloseButton: true,
			timerProgressBar: true,
			showConfirmButton: false,

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

	return (
		<div className='add-category-form' open={true}>
			<Modal open={true} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<div className='add-form-wrapper'>
						<div className='row '>
							<div className='col-12'>
								<div className='form-title  '>
									<h5 className='mb-3'> اضافة تصنيف فرعي جديد</h5>
									<p>قم باضافه تصنيف فرعي جديد الي التصنبف الأساسي</p>
								</div>
							</div>
						</div>
						<form onSubmit={handleSubmit}>
							<div className='form-body'>
								<div className='row mb-5 mt-5'>
									<div className='col-3'>
										<label htmlFor='category-name'> أسم التصنيف </label>
									</div>
									<div className='col-7'>
										<input type='text' id='category-name' placeholder=' أدخل أسم التصنيف الفرعي الجديد' />
									</div>
								</div>
								<div className='row mb-5'>
									<div className='col-3'>
										<label htmlFor='sub-categories'> التصنيف الأساسي </label>
									</div>
									<div className='col-7'>
										<FormControl sx={{ m: 0, width: '100%' }}>
											<InputLabel id='demo-multiple-checkbox-label'>الكل</InputLabel>
											<Select IconComponent={IoIosArrowDown} labelId='demo-multiple-checkbox-label' id='demo-multiple-checkbox' value={category} onChange={handleChange} input={<OutlinedInput />}>
												<MenuItem value={1}>اكسسوارات</MenuItem>
												<MenuItem value={2}>لابتوب</MenuItem>
												<MenuItem value={3}>اجهزة جوال</MenuItem>
												<MenuItem value={4}>بوربانك</MenuItem>
											</Select>
										</FormControl>
									</div>
								</div>
								<div className='row mb-5'></div>
								<div className='row mb-5'></div>
								<div className='row mb-5'></div>
								<div className='row mb-5'></div>
								<div className='row mb-5'></div>
								<div className='row mb-5'></div>
								<div className='row mb-5'></div>
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
										<button className='close-btn' onClick={() => navigate('/Category/AddCategory')}>
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

export default AddSubCategory;
