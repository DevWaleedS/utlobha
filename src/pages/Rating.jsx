import React from 'react';

import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';

// Import link from react router dom
import { Link } from 'react-router-dom';

// Import icons
import howIcon from '../data/Icons/icon_24_home.svg';
import { GrFormFilter } from 'react-icons/gr';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import RatingWeight from '../components/RatingWeight';
import { ReactComponent as StoreIcon } from '../data/Icons/icon-24-store.svg';
import { ReactComponent as ProductIcon } from '../data/Icons/product-24.svg';

const Rating = () => {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<section className='rating-page p-3'>
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
							<li className='breadcrumb-item active me-2' aria-current='page'>
								الأسئلة والتقييمات
							</li>
						</ol>
					</nav>
				</div>
			</div>
			<div className='row d-flex align-items-center title-page-row mb-5'>
				<div className='col-md-6'>
					<h4 className='page-tile'>الأسئلة والتقييمات</h4>
				</div>
				<div className='col-md-6'>
					<div className='row rating-filter-box d-flex justify-content-end align-items-center'>
						<div className='col-9 d-flex justify-content-end'>
							<div className='check-box'>
								<FormControlLabel control={<Switch defaultChecked />} label='تفعيل التقييمات' />
							</div>
						</div>
						<div className='col-3 d-flex justify-content-end'>
							<div className='drop-down'>
								<div>
									<Button id='fade-button' onClick={handleClick}>
										<GrFormFilter />
										<span>فلتر</span>
									</Button>
									<Menu
										id='fade-menu'
										MenuListProps={{
											'aria-labelledby': 'fade-button',
										}}
										anchorEl={anchorEl}
										open={open}
										onClose={handleClose}
										TransitionComponent={Fade}
									>
										<MenuItem onClick={handleClose}>
											<div className='user-data d-flex justify-content-start align-content-center '>
												<StoreIcon />
												<span className='user-name me-2 align-self-center'> تقييم المتجر</span>
											</div>
										</MenuItem>
										<MenuItem onClick={handleClose}>
											<div className='user-data d-flex justify-content-start align-content-center '>
												<ProductIcon />
												<span className='user-name me-2 align-self-center'> تقييم المنتجات</span>
											</div>
										</MenuItem>
									</Menu>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='rating-wrapper'>
				<div className='rating-bx mb-4'>
					<RatingWeight />
				</div>
				<div className='rating-bx mb-4'>
					<RatingWeight />
				</div>
				<div className='rating-bx mb-4'>
					<RatingWeight />
				</div>
				<div className='rating-bx mb-4'>
					<RatingWeight />
				</div>
				<div className='rating-bx mb-5'>
					<RatingWeight />
				</div>

				<div className='pagination-box'>
					<nav className='navigation d-flex align-self-center' aria-label='Page navigation ' dir='ltr'>
						<ul className='pagination '>
							<li className='page-item'>
								<button className='page-link'>
									<IoIosArrowBack />
								</button>
							</li>
							<li className='page-item'>
								<button className='page-link active'>1</button>
							</li>
							<li className='page-item'>
								<button className='page-link'>2</button>
							</li>
							<li className='page-item'>
								<button className='page-link'>3</button>
							</li>
							<li className='page-item'>
								<button className='page-link'>...</button>
							</li>
							<li className='page-item'>
								<button className='page-link'>
									<IoIosArrowForward />
								</button>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</section>
	);
};

export default Rating;
