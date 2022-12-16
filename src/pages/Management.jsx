import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Icons and Image
import howIcon from '../data/Icons/icon_24_home.svg';
import { MdAdd } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { IoIosArrowDown } from 'react-icons/io';

// MUI

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button } from '@mui/material';

import { UserAndManagementTable } from '../components';
import { AddNewUser } from './nestedPages';

import { useDispatch } from 'react-redux';
import { openAddUserModal } from '../store/slices/AddNewUser-slice';

const Management = () => {
	const dispatch = useDispatch(true);
	const navigate = useNavigate();

	const [selectRole, setSelectRole] = React.useState('');

	const handleChange = (event) => {
		setSelectRole(event.target.value);
	};

	return (
		<section className='management-page p-3'>
			<div className='head-category mb-4'>
				<div className='row'>
					<div className='col-lg-6 col-md-6 col-sm-12 mb-2'>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb'>
								<li className='breadcrumb-item'>
									<img src={howIcon} alt='' />
									<Link to='/' className='me-2'>
										الرئيسية
									</Link>
								</li>
								<li className='breadcrumb-item  ' aria-current='page'>
									الإعدادات
								</li>
								<li className='breadcrumb-item active' aria-current='page'>
									الإدارة و المستخدمين
								</li>
							</ol>
						</nav>
					</div>

					<div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end'>
						<div className='add-page-btn '>
							<Button variant='contained' className='outline' onClick={() => dispatch(openAddUserModal())}>
								<MdAdd />
								<span className='me-2'>إضافة مستخدم</span>
							</Button>
						</div>
						<div className='add-page-btn d-flex-justify-content-center me-3'>
							<Button
								className='roles-btn'
								variant='contained'
								onClick={() => {
									navigate('JobTitles');
								}}
							>
								الأدوار
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className='table-filter'>
				<div className='row'>
					<div className='col-12'>
						<div className='table-title'>
							<h5> جدول المستخدمين</h5>
						</div>
					</div>
				</div>
				<div className='filter-row'>
					<div className='row d-flex align-items-center '>
						<div className='col-lg-6 col-md-6 col-sm-12 mb-2'>
							<div className='filter-user-selector'>
								<label htmlFor='select-user-filter ' className='d-block mb-3'>
									فرز حسب
								</label>

								<FormControl sx={{ m: 0, width: '100%' }}>
									<Select IconComponent={IoIosArrowDown} value={selectRole} onChange={handleChange} displayEmpty labelId='demo-multiple-checkbox-label' inputProps={{ 'aria-label': 'Without label' }}>
										<MenuItem value=''>الكل</MenuItem>
										<MenuItem value='admin'>ادمن</MenuItem>
										<MenuItem value='editor'>محرر</MenuItem>
										<MenuItem value='management'>ادارة</MenuItem>
										<MenuItem value='technical-support'>دعم فني</MenuItem>
									</Select>
								</FormControl>
							</div>
						</div>
						<div className='col-lg-6 col-md-6 col-sm-12 '>
							<div className='filter-user-input-group'>
								<div className='d-block mb-2'></div>
								<div className='search-icon'>
									<span>
										<BsSearch />
									</span>
								</div>
								<input type='text' name='search-user' id='search-user' placeholder='ابحث عن مستخدم' />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='management-table'>
				<UserAndManagementTable />
			</div>

			{/**AddNewUser page */}
			<AddNewUser />
		</section>
	);
};

export default Management;
