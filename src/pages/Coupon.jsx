import React from 'react';
import { Link } from 'react-router-dom';

import { CouponTable } from '../components';
import AddCoupon from './nestedPages/AddCoupon';
import { useDispatch } from 'react-redux';
import { openVerifyModal } from '../store/slices/VerifyStoreModal-slice';

// iCONS
import howIcon from '../data/Icons/icon_24_home.svg';

import { MdAdd } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';

const Coupon = () => {
	const dispatch = useDispatch(true);
	const handleSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<section className='coupon-page p-3'>
			<div className='head-category'>
				<div className='row'>
					<nav aria-label='breadcrumb'>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item'>
								<img src={howIcon} alt='' />
								<Link to='/' className='me-2'>
									الرئيسية
								</Link>
							</li>
							<li className='breadcrumb-item' aria-current='page'>
								التسويق
							</li>
							<li className='breadcrumb-item active' aria-current='page'>
								كوبونات التخفيض
							</li>
						</ol>
					</nav>
				</div>
			</div>
			<div className='row mb-3 coupon-form'>
				<div className='add-category'>
					<form onSubmit={handleSubmit}>
						<div className='input-group'>
							<div className='search-input input-box'>
								<input type='text' name='search' id='search' placeholder=' ابحث عن طريق اسم الكوبون ' />
								<BsSearch />
							</div>

							<div className='select-input input-box '>
								<select className='form-select' aria-label='Default select example'>
									<option defaultChecked>الكل</option>
									<option value='1'>نوع الكوبون</option>
									<option value='2'>الحالة</option>
									<option value='3'>الأكثر مبيعاً </option>
									<option value='4'>تاريخ الانتهاء</option>
								</select>
							</div>

							<div className='add-category-bt-box'>
								<button
									className='add-cat-btn'
									onClick={() => {
										dispatch(openVerifyModal());
									}}
								>
									<MdAdd />
									<span clssName='me-2'> اضافه كوبون</span>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>

			<div className='row'>
				<div className='coupon-table'>
					<CouponTable />
				</div>
			</div>
			{/** AddCoupon form */}
			<AddCoupon />
		</section>
	);
};

export default Coupon;
