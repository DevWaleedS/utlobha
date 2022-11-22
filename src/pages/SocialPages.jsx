import React from 'react';
import { Link } from 'react-router-dom';
import howIcon from '../data/Icons/icon_24_home.svg';


// import social icons
import { ReactComponent as SnaChat } from '../data/Icons/icon-24-snapchat.svg';
import { ReactComponent as Twitter } from '../data/Icons/icon-24-twitter.svg';
import { ReactComponent as Instagram } from '../data/Icons/icon-24-instagram.svg';
import { ReactComponent as Youtube } from '../data/Icons/icon-24-youtube.svg';
import { ReactComponent as Facebock } from '../data/Icons/icon-24-facebbock.svg';
import { Button } from '@mui/material';

const SocialPages = () => {
	return (
		<section className='social-page p-3'>
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
								بيانات المتجر
							</li>
							<li className='breadcrumb-item active' aria-current='page'>
								التواصل الاجتماعي
							</li>
						</ol>
					</nav>
				</div>
			</div>
			<div className='row'>
				<div className='social-links-form '>
					<div className='row'>
						<div className='col-12'>
							<label htmlFor='snap-chat d-block'>
								<SnaChat />
								<span className='me-2'>سناب شات</span>
							</label>
						</div>
						<div className='col-12'>
							<input type='text' name='snap=chat' id='snap-chat' />
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<label htmlFor='snap-chat d-block'>
								<Twitter />
								<span className='me-2'> تويتر</span>
							</label>
						</div>
						<div className='col-12'>
							<input type='text' name='snap=chat' id='snap-chat' />
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<label htmlFor='snap-chat d-block'>
								<Instagram />
								<span className='me-2'> انستجرام</span>
							</label>
						</div>
						<div className='col-12'>
							<input type='text' name='snap=chat' id='snap-chat' />
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<label htmlFor='snap-chat d-block'>
								<Youtube />
								<span className='me-2'> يوتيوب</span>
							</label>
						</div>
						<div className='col-12'>
							<input type='text' name='snap=chat' id='snap-chat' />
						</div>
					</div>
					<div className='row mb-5'>
						<div className='col-12'>
							<label htmlFor='snap-chat d-block'>
								<Facebock />
								<span className='me-2'> فيسبوك</span>
							</label>
						</div>
						<div className='col-12'>
							<input type='text' name='snap=chat' id='snap-chat' />
						</div>
					</div>
					<div className='row'>
						<div className='col-12 d-flex justify-content-center align-items-center '>
							<Button className='social-save-btn'> حفظ </Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SocialPages;
