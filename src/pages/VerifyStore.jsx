import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import howIcon from '../data/Icons/icon_24_home.svg';
import StoreActivityType from './VerifyStoreForms/StoreActivityType';
import UploadNationalID from './VerifyStoreForms/UploadNationalID';
import ConfirmData from './VerifyStoreForms/ConfirmData';

const VerifyStore = () => {
	// Use state to the next button
	const [page, setPage] = useState(1);

	// Set function to change between pages
	const handleNextPage = (e) => {
		const nextPage = page + 1;

		setPage(nextPage);
	};

	return (
		<section className='verify-store-page p-3'>
			<div className='head-category mb-4'>
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
								توثيق المتجر
							</li>
						</ol>
					</nav>
				</div>
			</div>
			{/** current step */}
			<div className='page-wrapper'>
				<div className='row mb-4'>
					<div className='page-tabs'>
						<div className='row'>
							<div className='col-4'>
								<div className={page === 1 ? 'store-type verify-tab-bx active' : 'store-type verify-tab-bx '}>
									<h5>نشاط المتجر</h5>
								</div>
							</div>
							<div className='col-4'>
								<div className={page === 2 ? 'national-id verify-tab-bx active' : 'national-id verify-tab-bx '}>
									<h5>الهوية او السجل التجاري </h5>
								</div>
							</div>
							<div className='col-4'>
								<div className={page >= 3 ? 'bank-account verify-tab-bx active' : 'bank-account verify-tab-bx '}>
									<h5>الحساب البنكي </h5>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/** Form Wrapper */}
				<div className='row select-store-type  form-row p-5'>
					<form>
						<div className='col-12'>
							<div className='form '>
								{
									page === 1 ? <StoreActivityType /> : page === 2 ? <UploadNationalID /> : <ConfirmData />
								}
							</div>
						</div>
						<div className='col-12 d-flex justify-content-center align-items-center '>
							<Button className='next-btn' onClick={handleNextPage}>
								{page >= 3 ? 'حفظ' : 'التالي'}
							</Button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default VerifyStore;
