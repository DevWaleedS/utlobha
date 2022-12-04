import React from 'react';
import { Link } from 'react-router-dom';
import howIcon from '../data/Icons/icon_24_home.svg';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../store/slices/VideoModal-slice';

import { AiOutlineCloseCircle } from 'react-icons/ai';
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 700,
	height: 500,
	borderRadius: 5,

	boxShadow: 24,
	p: 0,
};

const Marketing = () => {
	// create video modal funcation
	const { isOpen } = useSelector((state) => state.VideoModal);
	const dispatch = useDispatch(true);

	return (
		<section className='marketing-page p-3'>
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
							<li className='breadcrumb-item  ' aria-current='page'>
								التسويق
							</li>
							<li className='breadcrumb-item active ' aria-current='page'>
								التسويق عبر المشاهير
							</li>
						</ol>
					</nav>
				</div>
			</div>

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
								<Button className='modal-video-btn' variant='contained' size='medium' >
									توجه الي منصه المشاهير
								</Button>
							</Box>
						</Fade>
					</Modal>
				</div>
			</div>
		</section>
	);
};

export default Marketing;
