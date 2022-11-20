import React from 'react';

const SalesReports = () => {
	return (
		<section className='sales-reports-data'>
			<div className='report-head mb-2'>
				<h4>المبيعات</h4>
			</div>
			<div className='report-body'>
				<div className='total-wrapper mb-2'>
					<div className='row'>
						<div className='col-6'>
							<h6>اجمالي المبيعات</h6>
						</div>
						<div className='col-6'>
							<h5>
								<span className='number ms-3'>11.34</span>
								<span className='currency'> ر.س</span>
							</h5>
						</div>
					</div>
				</div>
				<div className='total-wrapper  mb-2'>
					<div className='row'>
						<div className='col-6'>
							<h6>تكاليف المنتجات</h6>
						</div>
						<div className='col-6'>
							<h5>
								<span className='number ms-3'>8.234</span>
								<span className='currency'> ر.س</span>
							</h5>
						</div>
					</div>
				</div>
				<div className='total-wrapper  mb-2'>
					<div className='row'>
						<div className='col-6'>
							<h6>كوبونات التخفيض</h6>
						</div>
						<div className='col-6'>
							<h5>
								<span className='number ms-3  '>8.234</span>
								<span className='currency'> ر.س</span>
							</h5>
						</div>
					</div>
				</div>
				<div className='total-wrapper  mb-2'>
					<div className='row'>
						<div className='col-6'>
							<h6>الشحن</h6>
						</div>
						<div className='col-6'>
							<h5>
								<span className='number ms-3'>8.234</span>
								<span className=' currency'> ر.س</span>
							</h5>
						</div>
					</div>
				</div>
				<div className='total-wrapper  mb-2'>
					<div className='row'>
						<div className='col-6'>
							<h6>الضرائب</h6>
						</div>
						<div className='col-6'>
							<h5>
								<span className='number ms-3'>8.234</span>
								<span className=' currency'> ر.س</span>
							</h5>
						</div>
					</div>
				</div>
				<div className='total-wrapper  mb-2'>
					<div className='row'>
						<div className='col-6'>
							<h6>رسوم الدفع الالكتروني</h6>
						</div>
						<div className='col-6'>
							<h5>
								<span className='number ms-3'>8.234</span>
								<span className=' currency'> ر.س</span>
							</h5>
						</div>
					</div>
				</div>
			</div>
			<div className='report-footer'>
				<div className='row'>
					<div className='col-6'>
						<h5>صافي المبيعات</h5>
					</div>
					<div className='col-6'>
						<h5>
							<span className='number'>8.234</span>
							ر.س
						</h5>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SalesReports;
