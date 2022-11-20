import React, { Fragment } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
	{
		name: 'Jan',
		uv: 200,
	},
	{
		name: 'Feb',
		uv: 1800,
	},
	{
		name: ' Mar',
		uv: 1400,
	},
	{
		name: ' Apr',
		uv: 580,
	},
	{
		name: 'May',
		uv: 2000,
	},
	{
		name: 'Jun',
		uv: 700,
	},
	{
		name: 'Jul',
		uv: 1200,
	},
	{
		name: 'Aug ',
		uv: 1800,
	},
	{
		name: 'Sep ',
		uv: 2000,
	},
	{
		name: 'Oct ',
		uv: 1700,
	},
	{
		name: 'Nov ',
		uv: 1400,
	},
	{
		name: 'Dec ',
		uv: 3490,
	},
];

const LineCharts = () => {
	return (
		<div className='line-charts'>
			<div className='row mb-3'>
				<div className='col-4'>
					<div className='comp-title'>
						<h4>تحليلات المبيعات</h4>
					</div>
				</div>
				<div className='col-8'>
					<ul className='nav nav-pills line-charts-tabs mb-3' id='pills-tab' role='tablist'>
						<li className='nav-item  ' role='presentation'>
							<button className='nav-link right-radius' id='pills-home-tab' data-bs-toggle='pill' data-bs-target='#pills-home' type='button' role='tab' aria-controls='pills-home' aria-selected='true'>
								يومي
							</button>
						</li>
						<li className='nav-item' role='presentation'>
							<button className='nav-link' id='pills-profile-tab' data-bs-toggle='pill' data-bs-target='#pills-profile' type='button' role='tab' aria-controls='pills-profile' aria-selected='false'>
								أسبوعي
							</button>
						</li>
						<li className='nav-item' role='presentation'>
							<button
								className='nav-link radius-left  active'
								id='pills-contact-tab'
								data-bs-toggle='pill'
								data-bs-target='#pills-contact'
								type='button'
								role='tab'
								aria-controls='pills-contact'
								aria-selected='false'
							>
								شهري
							</button>
						</li>
					</ul>
				</div>
			</div>

			<div className='row'>
				<div className='col-12'>
					<div className='line-chart'>
						{/** */}
						<div className='tab-content line-chart-tab-content' id='pills-tabContent'>
							<div className='tab-pane line-chart-tab-pane fade show active' id='pills-home' role='tabpanel' aria-labelledby='pills-home-tab' tabIndex='0'>
								{/** */}
								<ResponsiveContainer width='100%' height='100%'>
									<LineChart
										data={data}
										margin={{
											top: 5,
											right: 10,
											left: 30,
											bottom: 5,
										}}
									>
										<XAxis dataKey='name' fontSize={14} fontWeight={600} axisLine={false} tickLine={false} />
										<Tooltip />
										<Line type='monotone' dataKey='uv' stroke='#0bf1d1' strokeWidth='5' dot={{ stroke: '#b4edee', strokeWidth: 10 }} />
									</LineChart>
								</ResponsiveContainer>
							</div>
							<div className='tab-pane line-chart-tab-pane fade ' id='pills-profile' role='tabpanel' aria-labelledby='pills-profile-tab' tabIndex='0'>
								<ResponsiveContainer width='100%' height='100%'>
									<LineChart
										data={data}
										margin={{
											top: 5,
											right: 10,
											left: 30,
											bottom: 5,
										}}
									>
										<XAxis dataKey='name' fontSize={14} fontWeight={600} axisLine={false} tickLine={false} />
										<Tooltip />
										<Line type='monotone' dataKey='uv' stroke='#0bf1d1' strokeWidth='5' dot={{ stroke: '#b4edee', strokeWidth: 10 }} />
									</LineChart>
								</ResponsiveContainer>
							</div>
							<div className='tab-pane line-chart-tab-pane fade ' id='pills-contact' role='tabpanel' aria-labelledby='pills-contact-tab' tabIndex='0'>
								<ResponsiveContainer width='100%' height='100%'>
									<LineChart
										data={data}
										margin={{
											top: 5,
											right: 10,
											left: 30,
											bottom: 5,
										}}
									>
										<XAxis dataKey='name' fontSize={14} fontWeight={600} axisLine={false} tickLine={false} />
										<Tooltip />
										<Line type='monotone' dataKey='uv' stroke='#0bf1d1' strokeWidth='5' dot={{ stroke: '#b4edee', strokeWidth: 10 }} />
									</LineChart>
								</ResponsiveContainer>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LineCharts;
