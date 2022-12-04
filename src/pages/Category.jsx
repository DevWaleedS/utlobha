import React from 'react';
import { Link } from 'react-router-dom';
import howIcon from '../data/Icons/icon_24_home.svg';

import { CategoryTable, FormSearchWeight } from '../components';

const Category = () => {
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
				<FormSearchWeight type='category' />
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
