import React, { Fragment } from 'react'
import MultipleSelectCheckmarks from '../../components/MultipleSelectCheckmarks';

const UploadNationalID = () => {
  return (
			<Fragment>
				<div className='row d-flex justify-content-between align-items-start mb-2 '>
					<div className='col-4 d-flex pt-4'>
						<h5>نوع النشاط</h5>
					</div>
					<div className='col-8 '>
						<div>
							<MultipleSelectCheckmarks />
						</div>
					</div>
				</div>
				<div className='row d-flex justify-content-between align-items-start '>
					<div className='col-4 d-flex pt-4'>
						<h5>رفع الهوية/السجل التجاري </h5>
					</div>

					<div className='col-8 '>
						<div className='upload-docs-input-wrapper'>
							<input type='file' name='upload-national-id' id='upload-docs' className='upload-docs' />
						</div>
					</div>
				</div>
			</Fragment>
		);
}

export default UploadNationalID;