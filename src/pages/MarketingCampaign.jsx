import React from 'react';

import { Link } from 'react-router-dom';
import howIcon from '../data/Icons/icon_24_home.svg';

import { IoMdAdd } from 'react-icons/io';
import { CreateOffer } from './nestedPages';
import { openVerifyModal } from '../store/slices/VerifyStoreModal-slice';
import { useDispatch } from 'react-redux';

const MarketingCampaign = () => {
	const dispatch = useDispatch(true);

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
								العروض الخاصة
							</li>
						</ol>
					</nav>
				</div>
			</div>

			<div className='row mb-5'>
				<div className='add-offer-btn-wrapper d-flex justify-content-end '>
					<button
						type='button'
						className='add-offer-btn'
						onClick={() => {
							dispatch(openVerifyModal());
						}}
					>
						<IoMdAdd />
						حملة جديدة
					</button>
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

export default MarketingCampaign;
