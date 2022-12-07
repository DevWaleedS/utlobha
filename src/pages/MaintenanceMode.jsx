import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../store/slices/VideoModal-slice';
import { Link, useNavigate } from 'react-router-dom';
import howIcon from '../data/Icons/icon_24_home.svg';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Button, Switch } from '@mui/material';

// sweet alert
import Swal from 'sweetalert2';

// Import ICONS
import { ReactComponent as TextIcon } from '../data/Icons/icon-24-format text right.svg';
import { RiText } from 'react-icons/ri';

const style = {
	position: 'absolute',
	top: '56%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 1024,
	borderRadius: 2,
	backgroundColor: '#fff',
	boxShadow: 24,
	p: 0,
};

const MaintenanceMode = () => {
	// create video modal function
	const { isOpen } = useSelector((state) => state.VideoModal);
	const dispatch = useDispatch(false);

	const navigate = useNavigate();

	// Handle Form Submit
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	// Sweet alert function
	const succMessage = () => {
		navigate('/');
		let timerInterval;

		Swal.fire({
			title: 'تم اجراء وضع الصيانة علي المتجر     بنجاح',
			icon: 'success',
			timer: 4000,
			showCloseButton: true,
			timerProgressBar: true,
			showConfirmButton: false,
			didOpen: () => {
				const b = Swal.getHtmlContainer().querySelector('b');
				timerInterval = setInterval(() => {
					b.textContent = Swal.getTimerLeft();
				}, 100);
			},
			willClose: () => {
				clearInterval(timerInterval);
			},
		}).then((result) => {
			/* Read more about handling dismissals below */
			if (result.dismiss === Swal.DismissReason.timer) {
				console.log('I was closed by the timer');
			}
		});
	};

	return (
		<section className='maintenance-page p-3'>
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
								الإعدادات
							</li>
							<li className='breadcrumb-item active ' aria-current='page'>
								وضع الصيانة
							</li>
						</ol>
					</nav>
				</div>
			</div>

			{/** Modal  */}
			<div className='row'>
				<div className='modal maintenance-modal'>
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
						<Fade in={isOpen}>
							<Box sx={style}>
								<form onSubmit={handleSubmit}>
									<div className='maintenance-modal-header d-flex justify-content-between align-items-center'>
										<span> وضع الصيانة</span>
										<AiOutlineCloseCircle
											onClick={() => {
												dispatch(closeModal());
											}}
										/>
									</div>
									<div className='maintenance-modal-body'>
										<div className='row mb-4'>
											<div className='modal-body-header d-flex justify-content-between align-items-center'>
												<div>
													<h5 className='mb-2'>وضع الصيانة</h5>
													<p className='modal-desc'>
														عد تفعيل وضع الصيانة ستتمكن لوحدك من الدخول للمتجر والعمل على تجهيزه، ستظهر للعملاء صفحة الصيانة للاطلاع عليها قم بالدخول على متجرك من متصفح آخر أو بتسجيل الخروج من لوحة التحكم
													</p>
												</div>
												<Switch defaultChecked className='d-flex align-self-start mb-2' />
											</div>
										</div>
										<div className='row maintenance-modal-form'>
											<div className='col-12 mb-3'>
												<div className='modal-input-group'>
													<label htmlFor=' maintenance-title-input'>عنوان وضع الصيانة</label>
													<div className='modal-input-icon'>
														<span>
															<RiText />
														</span>
													</div>
													<input type='text' id='maintenance-title-input' placeholder='المتجر مغلق مؤقتاََ للصيانة' />
												</div>
											</div>
											<div className='col-12 mb-4'>
												<div className='modal-input-group'>
													<label htmlFor='maintenance-message'>الرسالة النصية للعملاء</label>
													<div className='modal-input-icon'>
														<span>
															<TextIcon />
														</span>
													</div>

													<textarea onResize={false} id='maintenance-message' placeholder='   نص الرسالة التي ستظهر للعملاء'></textarea>
												</div>
											</div>
										</div>
									</div>
									<div className='maintenance-modal-footer'>
										<div className='col-12'>
											<div className='modal-input-button d-flex justify-content-center'>
												<Button
													className='next-btn'
													onClick={() => {
														succMessage();
													}}
												>
													حفظ
												</Button>
											</div>
										</div>
									</div>
								</form>
							</Box>
						</Fade>
					</Modal>
				</div>
			</div>
		</section>
	);
};

export default MaintenanceMode;
