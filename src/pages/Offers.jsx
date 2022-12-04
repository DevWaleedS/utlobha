import React from 'react';
import Switch from '@mui/material/Switch';
import { Link } from 'react-router-dom';
import howIcon from '../data/Icons/icon_24_home.svg';

import { IoMdAdd } from 'react-icons/io';
import { BsGift } from 'react-icons/bs';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { CreateOffer } from './nestedPages';
import { openVerifyModal } from '../store/slices/VerifyStoreModal-slice';
import { useDispatch } from 'react-redux';

const Offers = () => {
	const dispatch = useDispatch(true);
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
	return (
		<section className='offers-page p-3'>
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
							<li className='breadcrumb-item ' aria-current='page'>
								التسويق 
							</li>
							<li className='breadcrumb-item active' aria-current='page'>
								العروض الخاصة
							</li>
						</ol>
					</nav>
				</div>
			</div>

			<div className='row mb-5'>
				<div className='add-offer-btn-wrapper d-flex justify-content-end '>
					<button type='button' className='add-offer-btn' onClick={()=>{dispatch(openVerifyModal())}}>
						<IoMdAdd />
						انشاء عرض
					</button>
				</div>
			</div>

			<div className='row'>
				<div className='offers-table'>
					<table class='table'>
						<thead>
							<tr>
								<th scope='col'>
									<div className='tb-offer-title d-flex  justify-content-start align-items-center'>
										<BsGift />
										<h4 className='mx-3 mb-0'>العروض الخاصة</h4>
										<p> ( 3 عروض)</p>
									</div>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope='row'>
									<div className='offer-content d-flex  justify-content-between align-items-center'>
										<div>
											<h5 className='offer-heading'>عروض الويكند المميزة</h5>
											<p className='offer-info'>اذا اشترى العميل X يحصل على Y</p>
											<div className='offer-calender'>
												<FaRegCalendarAlt />
												<span>ينتهي العرض بتاريخ 2022-Sep-3</span>
											</div>
										</div>
										<div className='toggle-offer-switch'>
											<Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
										</div>
									</div>
								</th>
							</tr>
							<div className='padding'></div>
							<tr>
								<th scope='row'>
									<div className='offer-content d-flex  justify-content-between align-items-center'>
										<div>
											<h5 className='offer-heading'>عروض الويكند المميزة</h5>
											<p className='offer-info'> مبلغ ثابت من قيمة مشتريات العميل</p>
											<div className='offer-calender'>
												<FaRegCalendarAlt />
												<span>ينتهي العرض بتاريخ 2022-Sep-3</span>
											</div>
										</div>
										<div className='toggle-offer-switch'>
											<Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
										</div>
									</div>
								</th>
							</tr>
							<div className='padding'></div>
							<tr>
								<th scope='row'>
									<div className='offer-content d-flex  justify-content-between align-items-center'>
										<div>
											<h5 className='offer-heading'>عروض الويكند المميزة</h5>
											<p className='offer-info'> نسبة من قيمة مشتريات العميل </p>
											<div className='offer-calender'>
												<FaRegCalendarAlt />
												<span>ينتهي العرض بتاريخ 2022-Sep-3</span>
											</div>
										</div>
										<div className='toggle-offer-switch'>
											<Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
										</div>
									</div>
								</th>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			{/** Create offers form */}
			<CreateOffer/>
		</section>
	);
};

export default Offers;
