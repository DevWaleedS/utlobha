import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';


import { AiOutlineCloseCircle } from 'react-icons/ai';
import { closeModal } from '../store/slices/VideoModal-slice';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 1200,
	height: 900,
	borderRadius: 5,

	boxShadow: 24,
	p: 0,
};

const CourseVideoModal = () => {
	const { isOpen } = useSelector((state) => state.VideoModal);
	const dispatch = useDispatch(true);

	return (
		<div className='row'>
			<div className='modal'>
				<Modal
					aria-labelledby='transition-modal-title'
					aria-describedby='transition-modal-description'
					open={isOpen}
					onClick={() => {
						dispatch(closeModal());
					}}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500,
					}}
				>
					<Fade in={isOpen}>
						<Box sx={style} className='video-modal-container'>
							<div className='close-icon-video-modal'>
								<AiOutlineCloseCircle />
							</div>
							<video className='video-modal' controls autoPlay>
								<source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4' />
							</video>
							<Button className='modal-video-btn' variant='contained' size='medium'>
								توجه الي منصه المشاهير
							</Button>
						</Box>
					</Fade>
				</Modal>
			</div>
		</div>
	);
};
export default CourseVideoModal;
