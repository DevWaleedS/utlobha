import React from 'react';
import { Avatar, Button } from '@mui/material';

// IMPORT ICONS
import { MdOutlineTimer } from 'react-icons/md';
import { FcCheckmark } from 'react-icons/fc';

import { ReactComponent as StoreIcon } from '../data/Icons/icon-24-store.svg';
import { ReactComponent as StarIcon } from '../data/Icons/icon-20-star.svg';

import { ReactComponent as DeleteIcon } from '../data/Icons/icon-24-delete.svg';
import { ReactComponent as ReplayIcon } from '../data/Icons/icon-24-repley.svg';

// IMPORT IMAGES
import personImage from '../data/Icons/person.jpg';
const RatingWeight = () => {
	return (
		<div className='rating-widget'>
			<div className='row'>
				{/** user info */}
				<div className='col-md-4'>
					<div className='user-info'>
						<div className='row mb-5 '>
							<div className='user-data d-flex justify-content-start align-content-center '>
								<Avatar alt='avatar' src={personImage} sx={{ width: 56, height: 56 }} />
								<span className='user-name me-2 align-self-center'>سامح محمد أحمد</span>
							</div>
						</div>
						<div className='row mb-2  date-of-rating'>
							<div className='user-data  d-flex justify-content-center align-content-center '>
								<MdOutlineTimer />
								<span className='text me-2 align-self-center'> منذ أسبوع</span>
							</div>
						</div>
						<div className='row date-of-rating'>
							<div className='user-data  d-flex justify-content-center align-content-center '>
								<StoreIcon className='store' />
								<span className='text me-2 align-self-center'> تقييم المتجر</span>
							</div>
						</div>
					</div>
				</div>

				{/**Rating action */}
				<div className='col-md-5 ratin-bx'>
					<div className='row rates-starts d-flex justify-content-start align-items-start'>
						<span className='start mb-2'>
							<StarIcon />
							<StarIcon />
							<StarIcon />
							<StarIcon />
							<StarIcon />
						</span>

						<h6>المتجر مرة رهيب ومنتجاتة ممتازة</h6>
					</div>
					<div className='row rate-act-btn'>
						<div className='col-4'>
							<Button variant='outlined' className='publish-btn'>
								<FcCheckmark />
								<span className='user-name me-2 align-self-center'>منشور </span>
							</Button>
						</div>
						<div className='col-3'>
							<Button variant='outlined' className='delete-btn '>
								<DeleteIcon />
								<span className='user-name me-2 align-self-center'>حذف </span>
							</Button>
						</div>
						<div className='col-3'>
							<Button variant='outlined' className='replay-btn'>
								<ReplayIcon />
								<span className='user-name me-2 align-self-center'>رد </span>
							</Button>
						</div>
					</div>
				</div>
				<div className='col-md-3'>
					<div className='row order-rate-number  d-flex justify-content-end align-items-start'>
						<div className='col-12 d-flex justify-content-end'>
							<span>طلب رقم</span>
							<span className='me-2'>43567</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RatingWeight;
