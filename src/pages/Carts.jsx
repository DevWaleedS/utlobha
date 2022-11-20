import React from 'react';
import { Link } from 'react-router-dom';
import { CartsTables } from '../components';
import howIcon from '../data/Icons/icon_24_home.svg';

const Carts = () => {
	return (
		<section className='carts-page p-3'>
			<div className='head-category mb-4'>
				<div className='row'>
					<nav aria-label='breadcrumb'>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item'>
								<img src={howIcon} alt='' />
								<Link to='/' className='me-2'>
									الرئيسية
								</Link>
							</li>
							<li className='breadcrumb-item  me-2' aria-current='page'>
								التسويق
							</li>
							<li className='breadcrumb-item active me-2' aria-current='page'>
								السلات المتروكة
							</li>
						</ol>
					</nav>
				</div>
			</div>

			<div className='row'>
				<div className='carts-table'>
					<CartsTables />
				</div>
			</div>
		</section>
	);
};

export default Carts;
