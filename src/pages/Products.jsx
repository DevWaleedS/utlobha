import React from 'react';
import { useDispatch } from 'react-redux';
import { openVerifyModal } from '../store/slices/VerifyStoreModal-slice';
import { BigProductsTable, DropCSVFiles, FormSearchWeight } from '../components';
import { MdAdd } from 'react-icons/md';
import AddProduct from './nestedPages/AddProduct';

const Products = () => {
	const dispatch = useDispatch(true);
	return (
		<div className='products p-3'>
			<div className='row mb-3'>
				<FormSearchWeight type='product' />
			</div>

			<div className='row mb-3'>
				<div className='mange-file d-flex justify-content-start bg-white '>
					<div className='export-files'>
						<button className='export-btn' type='button'>
							تصدير
						</button>
					</div>
					<div className='upload-files'>
						<label htmlFor='fileUpload'>
							<input type='file' id='fileUpload' className='upload-files-input' />
							رفع ملف
						</label>
					</div>
					<div className='drop-files'>
						<DropCSVFiles />
					</div>
					<div className=' add-new-product'>
						<button
							className=' add-new-product-btn w-100'
							type='button'
							onClick={() => {
								dispatch(openVerifyModal());
							}}
						>
							<MdAdd />
							<span className='me-2'>إضافة منتج جديد</span>
						</button>
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
