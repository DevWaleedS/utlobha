import React from 'react';
import { Button } from '@mui/material';

import { ReactComponent as StarIcon } from '../data/Icons/icon-20-star.svg';
import { BsPlayCircle } from 'react-icons/bs';
import { BsPlayBtn } from 'react-icons/bs';
import { RiTimerLine } from 'react-icons/ri';
import { AiOutlineEye } from 'react-icons/ai';

// IMPORT IMAGES
import videoPreview from '../data/Icons/video-privew-image.png';
import { useNavigate } from 'react-router-dom';

const AcademyWidget = () => {

	const navigate = useNavigate();

	return (
		<div className='academy-widget'>
			<div className='row'>
				{/** video-preview */}
				<div className='col-md-2'>
					<div className='video-preview'>
						<img src={videoPreview} alt='' />

						<div className='play-video-icon'>
							<BsPlayCircle />
						</div>
					</div>
				</div>

				{/**course info */}
				<div className='col-md-6 course-bx'>
					<div className='row course-details d-flex justify-content-start align-items-start'>
						<h5 className='mb-4'>كورس دروب شيبنج</h5>
					</div>
					<div className='row course-info'>
						<div className='col-3'>
							<div className='video-count'>
								<BsPlayBtn />
								<span className='text me-2 align-self-center'>80 فيديو </span>
							</div>
						</div>
						<div className='col-3'>
							<div className='video-hours '>
								<RiTimerLine />
								<span className='text me-2 align-self-center'>120 ساعة </span>
							</div>
						</div>
						<div className='col-6 '>
							<span className='course-stars mb-2 d-flex justify-content-end'>
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
								<StarIcon />
							</span>
						</div>
					</div>
				</div>

				<div className='col-md-4 d-flex justify-content-end flex-column'>
					<div className='row watch-course-btn  d-flex justify-content-end align-items-start'>
						<div className='col-12 d-flex justify-content-end'>
							<Button variant='outlined' onClick={()=>{navigate('CourseDetails');}}>
								<AiOutlineEye />
								<span className='me-2'>مشاهدة المحتوي </span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AcademyWidget;
