import React from 'react';
import { Button } from '@mui/material';

import { Link } from 'react-router-dom';

// import icons and images
import howIcon from '../data/Icons/icon_24_home.svg';
import { ReactComponent as PrintIcon } from '../data/Icons/icon-24-print.svg';
import { ReactComponent as WalletIcon } from '../data/Icons/icon-24-wallet.svg';
import { ReactComponent as ClientsIcon } from '../data/Icons/icon-24-user.svg';
import { CustomersReports, SalesReports } from './nestedPages';

// import components
import { DatePickerCopm } from '../components';

const Report = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<section className='reports-page p-3'>
			<div className='head-category mb-4'>
				<div className='row'>
					<div className='col-lg-6 col-md-6 col-sm-12 mb-2'>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb'>
								<li className='breadcrumb-item'>
									<img src={howIcon} alt='' />
									<Link to='/' className='me-2'>
										الرئيسية
									</Link>
								</li>

								<li className='breadcrumb-item active' aria-current='page'>
									التقارير
								</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>

			<div className='page-actions-row '>
				<div className='row mb-4'>
					<div className='col-lg-6 col-md-6 col-sm-12 mb-2'>
						<DatePickerCopm />
					</div>
					<div className='col-lg-6 col-md-6 col-sm-12 d-flex justify-content-end'>
						<div className='add-page-btn '>
							<Button variant='contained'>
								<PrintIcon />
								<span className='me-1'> طباعه التقرير</span>
							</Button>
						</div>
					</div>
				</div>

				<div className='select-report-links mb-5'>
					<div className='row d-flex align-items-center '>
						<ul className='nav nav-pills  reports-tabs-buttons' id='pills-tab' role='tablist'>
							<li className='nav-item mb-2' role='presentation'>
								<button className='sales-btn active' id='sales-tab' data-bs-toggle='pill' data-bs-target='#pills-sales-tab' type='button' role='tab' aria-controls='pills-home' aria-selected='true'>
									<WalletIcon />
									<span className='me-2'>المبيعات</span>
								</button>
							</li>
							<li className='nav-item mb-2 me-md-3 ' role='presentation'>
								<button
									className='customers-btn'
									id='pills-custmores-tab'
									data-bs-toggle='pill'
									data-bs-target='#pills-custmores'
									type='button'
									role='tab'
									aria-controls='pills-custmores'
									aria-selected='false'
								>
									<ClientsIcon />
									<span className='me-2'>العملاء</span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className='reports-wrapper'>
				<div class='tab-content reports-content' id='pills-tabContent'>
					<div class='tab-pane fade show active' id='pills-sales-tab' role='tabpanel' aria-labelledby='sales-tab'>
						<SalesReports />
					</div>
					<div class='tab-pane fade' id='pills-custmores' role='tabpanel' aria-labelledby='pills-custmores-tab'>
						<CustomersReports />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Report;
