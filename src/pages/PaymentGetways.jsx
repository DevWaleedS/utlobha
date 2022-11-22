import React from 'react'
import { Link } from 'react-router-dom';
import howIcon from '../data/Icons/icon_24_home.svg';
import StoreDataWidget from '../components/StoreDataWidget';


// import images
import amazonPay from '../data/Icons/amazon-pay.png';
import stcPay from '../data/Icons/stc-pay.png';
import paypal from '../data/Icons/paypal.png';
import applePay from '../data/Icons/Apple_Pay_logo.svg.png';

const PaymentGetways = () => {
  return (
			<section className='payment-page p-3'>
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
								<li className='breadcrumb-item  ' aria-current='page'>
									بيانات المتجر
								</li>
								<li className='breadcrumb-item active' aria-current='page'>
									بوابات الدفع
								</li>
							</ol>
						</nav>
					</div>
				</div>

				<div className='data-container'>
					<div className='row'>
						<div className='col-lg-3 col-md-6 col-sm-12 '>
							<StoreDataWidget img={<img className=' img-fluid' src={amazonPay} alt='' />} />
						</div>
						<div className='col-lg-3 col-md-6 col-sm-12 '>
							<StoreDataWidget img={<img className=' img-fluid' src={paypal} alt='' />} />
						</div>
						<div className='col-lg-3 col-md-6 col-sm-12 '>
							<StoreDataWidget img={<img className=' img-fluid' src={stcPay} alt='' />} />
						</div>
						<div className='col-lg-3 col-md-6 col-sm-12 '>
							<StoreDataWidget img={<img className=' img-fluid' src={applePay} alt='' />} />
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-3 col-md-6 col-sm-12'>
							<StoreDataWidget img={<img className=' img-fluid' src={applePay} alt='' />} />
						</div>
						<div className='col-lg-3 col-md-6 col-sm-12'>
							<StoreDataWidget img={<img className=' img-fluid' src={stcPay} alt='' />} />
						</div>
						<div className='col-lg-3 col-md-6 col-sm-12'>
							<StoreDataWidget img={<img className=' img-fluid' src={paypal} alt='' />} />
						</div>
						<div className='col-lg-3 col-md-6 col-sm-12'>
							<StoreDataWidget img={<img className=' img-fluid' src={amazonPay} alt='' />} />
						</div>
					</div>
				</div>
			</section>
		);
}

export default PaymentGetways