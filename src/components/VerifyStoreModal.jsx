import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeVerifyModal } from '../store/slices/VerifyStoreModal-slice';
import { Link } from 'react-router-dom';
import { IoMdCloseCircleOutline } from 'react-icons/io';
const style = {
	position: 'absolute',

	top: '18%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '100%',
	bgcolor: '#ffdd00',
	boxShadow: 24,
	p: 4,
};

const VerifyStoreModal = () => {
	const { isOpen } = useSelector((state) => state.VerifyModal);
	const dispatch = useDispatch(false);

	return (
		<div>
			<Modal open={isOpen} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style}>
					<Typography id='modal-modal-description' sx={{ mt: 2 }}>
						<div className='d-flex justify-content-center align-items-center'>
							<div className='d-flex justify-content-between verify-message-box '>
								<p className='verify-message'>مرحبا عمر، المتجر الخاص بك غير مكتمل الرجاء البدء بتوثيق المتجر</p>
								<div className='btns-box'>
									<Link to='/VerifyStore'> التوثيق الأن </Link>
									<IoMdCloseCircleOutline
										onClick={() => {
											dispatch(closeVerifyModal());
										}}
									/>
								</div>
							</div>
						</div>
					</Typography>
				</Box>
			</Modal>
		</div>
	);
};

export default VerifyStoreModal;
