import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdAdd } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';

// iCONS
import howIcon from '../data/Icons/icon_24_home.svg';

//
import { CategoryTable, SelectIndicator } from '../components';

const Category = () => {
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div className='category p-3'>
			<div className='head-category'>
				<div className='row'>
					<nav aria-label='breadcrumb'>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item'>
								<img src={howIcon} alt='' />
								<Link to='/' className='me-2'>
									الرئيسية
								</Link>
							</li>
							<li className='breadcrumb-item active ' aria-current='page'>
								التصنيفات
							</li>
						</ol>
					</nav>
				</div>
			</div>

			<div className='row mb-3'>
				<div className='add-category'>
					<form onSubmit={handleSubmit}>
						<div className='input-group'>
							<div className='search-input input-box'>
								<input type='text' name='search' id='search' placeholder='ابحث في التصنيفات' />
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
										navigate('AddCategory');
									}}
								>
									<MdAdd />
									<span clssName='me-2'> اضافه تصنيف</span>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>

			<div className='row'>
				<div className='category-table'>
					<CategoryTable />
				</div>
			</div>
		</div>
	);
};

export default Category;
