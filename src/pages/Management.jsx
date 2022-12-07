import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import howIcon from '../data/Icons/icon_24_home.svg';
import { MdAdd } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { Button } from '@mui/material';
import { UserAndManagementTable } from '../components';
import { AddNewUser } from './nestedPages';
import { useDispatch } from 'react-redux';
import { openAddUserModal } from '../store/slices/AddNewUser-slice';

const Management = () => {
	const dispatch = useDispatch(true);
	const navigate = useNavigate();
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
								<span>إضافة مستخدم</span>
							</Button>
						</div>
						<div className='add-page-btn me-3'>
							<Button
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
							<div className='filter-user-input-group'>
								<label htmlFor='select-user-filter mb-2'>فرز حسب</label>
								<select className='form-select-user' aria-label='Default select example'>
									<option defaultValue={'all'}>الكل </option>
									<option value='admin'>ادمن</option>
									<option value='editor'>محرر</option>
									<option value='management'>ادارة</option>
									<option value='technical-support'>دعم فني</option>
								</select>
							</div>
						</div>
						<div className='col-lg-6 col-md-6 col-sm-12 '>
							<div className='filter-user-input-group'>
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
