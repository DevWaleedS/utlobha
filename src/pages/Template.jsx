import React from 'react';
import { Link } from 'react-router-dom';
import arrowBack from '../data/Icons/icon-30-arrwos back.svg';
import TemplateUpdate from '../components/TemplateUpdate';


const Template = () => {
  return (
			<section className='template-page p-3'>
				<div className='head-category mb-4'>
					<div className='row'>
						<div className='col-6'>
							<nav aria-label='breadcrumb'>
								<ol className='breadcrumb'>
									<li className='breadcrumb-item'>
										<img src={arrowBack} alt='' />
										<Link to='/' className='me-2'>
											الرئيسية
										</Link>
									</li>
									<li className='breadcrumb-item active ' aria-current='page'>
										تنسيق القالب
									</li>
								</ol>
							</nav>
						</div>
						
					</div>
				</div>

				<div className='row'>
					<div className='template-widgets-wrapper'>
						<div className='widget-bx mb-4'>
							<TemplateUpdate />
						</div>
					</div>
				</div>
			</section>
		);
}

export default Template;





