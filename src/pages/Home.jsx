import React, { Fragment } from 'react';
import Details from '../components/Details';
import TopSection from '../components/TopSection';
import LineCharts from '../components/LineCharts';
import { OrdersTableData, PieCharts, ProductsTableData } from '../components';
import { useSelector } from 'react-redux';
import VerifyStoreModal from '../components/VerifyStoreModal';

const Home = () => {
	

	return (
		<Fragment>
			{/** TOP SECTION */}
			<section className='top-section mb-5'>
				<TopSection />
			</section>

			{/** DETAILS SECTION */}
			<section className='details-section mb-3'>
				<Details />
			</section>

			{/**  CHARTS SECTION */}
			<section className='charts mb-5'>
				<div className='row'>
					<div className='col-lg-8 col-md-6 mb-4'>
						<LineCharts />
					</div>
					<div className='col-lg-4 col-md-6 '>
						<PieCharts />
					</div>
				</div>
			</section>

			{/**  TABLES SECTION */}
			<section className='tables mb-5'>
				<div className='row'>
					<div className='col-md-6 mb-4'>
						<OrdersTableData />
					</div>
					<div className='col-md-6 mb-4'>
						<ProductsTableData />
					</div>
				</div>
			</section>

			{/** Verify Modal  */}
			<VerifyStoreModal />
		</Fragment>
	);
};

export default Home;
