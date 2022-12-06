import React from 'react';
import { Link } from 'react-router-dom';
import CommentsTable from '../../components/CommentsTable';

// ICONS
import arrowBack from '../../data/Icons/icon-30-arrwos back.svg';
const Comments = () => {
	return (
		<section className='orders-pages p-3'>
			<div className='head-category mb-5'>
				<div className='row'>
					<nav aria-label='breadcrumb'>
						<ol className='breadcrumb'>
							<li className='breadcrumb-item'>
								<img src={arrowBack} alt='' />
								<Link to='/' className='me-2'>
									الرئيسية
								</Link>
							</li>
							<li className='breadcrumb-item  ' aria-current='page'>
								تنسيق القالب
							</li>
							<li className='breadcrumb-item active ' aria-current='page'>
								التعليقات
							</li>
						</ol>
					</nav>
				</div>
			</div>

			{/** Comments table  */}
			<div className='row'>
				<CommentsTable />
			</div>
		</section>
	);
};

export default Comments;
