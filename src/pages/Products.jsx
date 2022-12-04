import React from 'react';
import { BigProductsTable, CategoryTable, DropCSVFiles, FormSearchWeight } from '../components';
import AddProduct from './nestedPages/AddProduct';
const Products = () => {
	return (
		<div className='products p-3'>
			<div className='row mb-3'>
				<FormSearchWeight type='product' />
			</div>

			<div className='row mb-3'>
				<div className='mange-file d-flex justify-content-start bg-white p-3'>
					<div className='export-files'>
						<button className='export-btn' type='button'>
							تصدير
						</button>
					</div>
					<div className='upload-files'>
						<label htmlFor='fileUpload'>
							<input type='file' id='fileUpload' className='upload-files-input' />
							رفع
						</label>
					</div>
					<div className='drop-files'>
						<DropCSVFiles />
					</div>
				</div>
			</div>

			<div className='row'>
				<div className='category-table'>
					<BigProductsTable />
				</div>
			</div>

			{/** Add Product Form */}
			<AddProduct />
		</div>
	);
};

export default Products;
