import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


import { AiOutlineCloseCircle } from 'react-icons/ai';
import { closeModal } from '../store/slices/VideoModal-slice';

const style = {
	position: 'absolute',
	top: '55%',
	left: '45%',
	transform: 'translate(-50%, -50%)',
	width: 1100,
	borderRadius: 5,
};

const CourseVideoModal = () => {
	const { isOpen } = useSelector((state) => state.VideoModal);
	const dispatch = useDispatch(true);

	return (
		<div className='' open={isOpen}>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				open={isOpen}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Box sx={style} className='explain-courses-modal'>
					<div className='close-icon-video-modal'>
						<AiOutlineCloseCircle
							style={{ cursor: 'pointer' }}
							onClick={() => {
								dispatch(closeModal());
							}}
						/>
					</div>
					<video className='video-modal' controls>
						<source src='https://www.w3schools.com/html/mov_bbb.mp4' type='video/mp4' />
					</video>
				</Box>
			</Modal>
		</div>
	);
};
export default CourseVideoModal;
