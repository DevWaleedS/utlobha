import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// MUI
import { DataBox, BigOrdersTable } from '../components';

// Icons
import arrowBack from '../data/Icons/icon-30-arrwos back.svg';


const Orders = () => {
	const details = useSelector((state) => state.ordersDetails);
	return (
		<section className='orders-pages p-3'>
			<div className='head-category'>
				<div className='row'>
					<nav aria-label='breadcrumb'>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item'>
								<img src={arrowBack} alt='' />
								<Link to='/' className='me-2'>
									الرئيسية
								</Link>
							</li>
							<li className='breadcrumb-item active ' aria-current='page'>
								الطلبات
							</li>
						</ol>
					</nav>
				</div>
			</div>

			<div className='data-boxes'>
				<div className='row'>
					<DataBox details={details} />
				</div>
			</div>

		

			{/** Orders table */}
			<div className='tables'>
				<BigOrdersTable />
			</div>

		
		</section>
	);
};

export default Orders;
