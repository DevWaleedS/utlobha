import React from 'react';

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { BsArrowDown, BsArrowUp } from 'react-icons/bs';

const PieCharts = () => {
	return (
		<div className='pie-charts'>
			<div className='row mb-4'>
				<div className='col-12'>
					<div className='comp-title'>
						<h4>معدل الشراء</h4>
					</div>
				</div>
			</div>

			<div className='row'>
				<div className='pie-chart'>
					<div className='circle  m-auto' style={{ width: 200, height: 270 }}>
						<CircularProgressbar
							value={70}
							text={`${70}%`}
							background={'#f5fbff'}
							// some style
							styles={buildStyles({
								textColor: '#000',
								trailColor: '#f5fbff',
								backgroundColor: '#f5fbff',
							})}
						/>
					</div>
					
					<div className='analyse-box'>
						<div className='row'>
							<div className='col-4'>
								<div className='month'>
									<h5> آخر شهر</h5>
									<div className='d-flex  align-items-center'>
										<p>
											<span className='currency'>SAR </span>2k
										</p>
										<BsArrowDown className='red' />
									</div>
								</div>
							</div>
							<div className='col-4'>
								<div className='month'>
									<h5> آخر أسبوع</h5>
									<div className='d-flex  align-items-center'>
										<p>
											<span className='currency'>SAR </span>2.8k
										</p>
										<BsArrowUp />
									</div>
								</div>
							</div>
							<div className='col-4'>
								<div className='month'>
									<h5> المتوسط</h5>
									<div className='d-flex  align-items-center'>
										<p>
											<span className='currency'>SAR </span>2.2k
										</p>
										<BsArrowUp />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PieCharts;
