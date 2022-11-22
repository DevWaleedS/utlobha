import React from 'react'
import { Link } from 'react-router-dom';
import {  CustomersDataTable, FormSearchWeight } from '../components';
import howIcon from '../data/Icons/icon_24_home.svg';



const Customer = () => {
  return (
			<section className='customer-page p-3'>
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

								<li className='breadcrumb-item active ' aria-current='page'>
									العملاء
								</li>
							</ol>
						</nav>
					</div>
				</div>
				<div className='row mb-3'>
					<FormSearchWeight type='customer' />
				</div>

				<div className='row'>
					<div className='customer-table'>
						<CustomersDataTable />
					</div>
				</div>
			</section>
		);
}

export default Customer