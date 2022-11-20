import React, { Fragment } from 'react'
import MultipleSelectCheckmarks from '../../components/MultipleSelectCheckmarks';

const StoreActivityType = () => {
  return (
			<Fragment>
				<div className='row d-flex justify-content-between align-items-start '>
					<div className='col-4 d-flex pt-4'>
						<h5>نوع النشاط</h5>
					</div>
					<div className='col-8 '>
						<div>
							<MultipleSelectCheckmarks />
						</div>
					</div>
				</div>
			</Fragment>
		);
}

export default StoreActivityType