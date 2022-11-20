import React, { Fragment } from 'react';

const DataBox = ({ details }) => {
	return (
		<Fragment>
			{details.map((detail) => (
				<div className='col-lg-3 col-md-6 col-sm-6' key={detail.id}>
					<div className='data-box mb-4'>
						<div className='row'>
							<div className='col-5 d-flex justify-content-center align-items-center'>
								<div className='icon' style={{ backgroundColor: `${detail.color}` }}>
									{detail.icon}
								</div>
							</div>

							<div className='col-7 '>
								<div className='data'>
									<h4>{detail.numbers}</h4>
									<p>{detail.title}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</Fragment>
	);
};

export default DataBox;
