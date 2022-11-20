import React from 'react';
import { DataBox, DatePickerCopm, BigOrdersTable, FilterSelect } from '../components';

import arrowBack from '../data/Icons/icon-30-arrwos back.svg';

import { CategoryTable, FormSearchWeight, TopSection } from '../components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Orders = () => {
	const details = useSelector((state) => state.ordersDetails);
	return (
		<div className='orders-pages p-3'>
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
							<li className='breadcrumb-item active me-2' aria-current='page'>
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

		

			{/**table */}
			<div className='tables'>
				<BigOrdersTable />
			</div>
		</div>
	);
};

export default Orders;
