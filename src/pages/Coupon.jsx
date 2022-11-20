import React from 'react'
import { Link } from 'react-router-dom';
import {  CouponTable, FormSearchWeight } from '../components';
import howIcon from '../data/Icons/icon_24_home.svg';

const Coupon = () => {
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
								<li className='breadcrumb-item  me-2' aria-current='page'>
									التسويق
								</li>
								<li className='breadcrumb-item active me-2' aria-current='page'>
									كوبونات التخفيض
								</li>
							</ol>
						</nav>
					</div>
				</div>
				<div className='row mb-3'>
					<FormSearchWeight type='coupon' />
				</div>

				<div className='row'>
					<div className='coupon-table'>
						<CouponTable />
					</div>
				</div>
			</section>
		);
}

export default Coupon;