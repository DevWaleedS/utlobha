import React from 'react';
import { Link } from 'react-router-dom';
import SeoWeight from '../components/SeoWeight';

// import arrowBack from '../data/Icons/icon-30-arrwos back.svg';
import howIcon from '../data/Icons/icon_24_home.svg';

const Seo = () => {
	return (
		<section className='seo-page p-3'>
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
							<li className='breadcrumb-item ' aria-current='page'>
								التسويق
							</li>
							<li className='breadcrumb-item active ' aria-current='page'>
								الكلمات المفتاحية
							</li>
						</ol>
					</nav>
				</div>
			</div>

      <div className="row">
      <SeoWeight />
      </div>
		</section>
	);
};

export default Seo;
