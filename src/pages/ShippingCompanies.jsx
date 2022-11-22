import React from 'react';
import { Link } from 'react-router-dom';
import StoreDataWidget from '../components/StoreDataWidget';
import howIcon from '../data/Icons/icon_24_home.svg';

const ShippingCompanies = () => {
  return (
			<section className='shipping-page p-3'>
				<div className='head-category mb-5'>
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
									بيانات المتجر
								</li>
								<li className='breadcrumb-item active ' aria-current='page'>
									شركات الشحن
								</li>
							</ol>
						</nav>
					</div>
				</div>

				<div className='data-container'>
					<div className='row'>
						<div className='col-lg-3 col-md-6 col-sm-12 '>
							<StoreDataWidget data={'الشركة الأولي'} />
						</div>
						<div className='col-lg-3 col-md-6 col-sm-12 '>
							<StoreDataWidget data={'الشركة الثانية'} />
						</div>
						<div className='col-lg-3 col-md-6 col-sm-12 '>
							<StoreDataWidget data={'الشركة الثالثة'} />
						</div>
						<div className='col-lg-3 col-md-6 col-sm-12 '>
							<StoreDataWidget data={'الشركة الرابعة'} />
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-3 col-md-6 col-sm-12'>
							<StoreDataWidget data={'الشركة الخامسة'} />
						</div>
						<div className='col-lg-3 col-md-6 col-sm-12'>
							<StoreDataWidget data={'الشركة السادسة'} />
						</div>
						<div className='col-lg-3 col-md-6 col-sm-12'>
							<StoreDataWidget data={'الشركة السابعة'} />
						</div>
						<div className='col-lg-3 col-md-6 col-sm-12'>
							<StoreDataWidget data={'الشركة الثامنة'} />
						</div>
					</div>
				</div>
			</section>
		);
}

export default ShippingCompanies