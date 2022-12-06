import React from 'react';

import { Link } from 'react-router-dom';
import howIcon from '../data/Icons/icon_24_home.svg';


import { CreateOffer } from './nestedPages';


const BranchesAndWarehouses = () => {
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

							<li className='breadcrumb-item active' aria-current='page'>
								الفروع والمستودعات
							</li>
						</ol>
					</nav>
				</div>
			</div>

			<div className='row'>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '100vh',
						fontSize: '250px',
					}}
				>
					مؤجلة
				</div>
			</div>
			{/** Create offers form */}
			<CreateOffer />
		</section>
	);
};

export default BranchesAndWarehouses;
