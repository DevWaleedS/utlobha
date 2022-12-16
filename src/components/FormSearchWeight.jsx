import React from 'react';
import { MdAdd } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import SelectIndicator from './SelectIndicator';

import { useDispatch } from 'react-redux';
import { openVerifyModal } from '../store/slices/VerifyStoreModal-slice';

const FormSearchWeight = ({ type }) => {
	const dispatch = useDispatch(true);

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	let data;
	switch (type) {
		case 'product':
			data = {
				placeHolder: 'ابحث عن منتج',
				buttonValue: '  اضافه منتج من السوق',
			};
			break;
		case 'coupon':
			data = {
				placeHolder: 'ابحث عن طريق اسم الكوبون',
				buttonValue: '  اضافه كوبون',
			};
			break;
		case 'customer':
			data = {
				placeHolder: 'ابحث بواسطة الرقم ID / الاسم/ رقم الجوال',
				buttonValue: '  اضافه عميل',
			};
			break;
		default:
			break;
	}

	return (
		<div className='add-category'>
			<form onSubmit={handleSubmit}>
				<div className='input-group'>
					<div className='search-input input-box'>
						<input type='text' name='search' id='search' placeholder={data.placeHolder} />
						<BsSearch />
					</div>

					<div className='select-input input-box '>
						<label htmlFor='form-select'> التصنيف</label>
						<SelectIndicator />
					</div>

					<div className='add-category-bt-box'>
						<button
							className='add-cat-btn'
							onClick={() => {
								dispatch(openVerifyModal());
							}}
						>
							<MdAdd />
							{data.buttonValue}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default FormSearchWeight;
