import React from 'react';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

// MUI
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { Switch } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';

// ICONS
import howIcon from '../../data/Icons/icon_24_home.svg';
import carImage from '../../data/Icons/image car.png';

import { ReactComponent as BoldIcon } from '../../data/Icons/icon-24-Bold.svg';
import { ReactComponent as FormatTextCenter } from '../../data/Icons/icon-24-format text center.svg';
import { ReactComponent as FormatTextLeft } from '../../data/Icons/icon-24-format text lift.svg';
import { ReactComponent as FormatTextRight } from '../../data/Icons/icon-24-format text right.svg';
import { ReactComponent as FormatTextPoint } from '../../data/Icons/icon-24-format text point.svg';
import { ReactComponent as FormatTextPointSqure } from '../../data/Icons/icon-24-format text-point.svg';
import { ReactComponent as Attchment } from '../../data/Icons/icon-5.svg';
import { ReactComponent as Message } from '../../data/Icons/icon-24-email.svg';
import { ReactComponent as Phone } from '../../data/Icons/icon-24- call.svg';
import { ReactComponent as Location } from '../../data/Icons/icon-24-pic map.svg';
import { ReactComponent as Timer } from '../../data/Icons/icon-24-timer.svg';
import { ReactComponent as Communication } from '../../data/Icons/ico - 24 - communication - send_outlined.svg';

// Modal Style
const style = {
	position: 'absolute',
	top: '97px',
	left: '-1%',
	transform: 'translate(0%, 0%)',
	width: '85%',
	height: '100%',
	overflow: 'auto',
	bgcolor: '#fff',
	boxShadow: 24,
	paddingBottom: '100px',
};

const ClientData = () => {
	const { id } = useParams();
	const usersCartsData = useSelector((state) => state.CartsTablesData);

	const userData = usersCartsData.filter((coupon) => {
		return coupon.id === id;
	});

	//
	const navigate = useNavigate();

	//
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	//
	const confirmAlert = () => {
		Swal.fire({
			title: 'هل ترغب حقاً في إعادة تفعيل الكوبون !',
		});
	};

	return (
		<div className='' open={true}>
			<Modal open={true} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style} className='nested-pages-modal'>
					{userData.map((currentUser) => (
						<div className='user-cart-data'>
							<div className='row '>
								<div className='col-12'>
									<div className='head-category mb-5 pt-4'>
										<div className='row'>
											<div className='col-6'>
												<nav aria-label='breadcrumb'>
													<ol className='breadcrumb'>
														<li className='breadcrumb-item'>
															<img src={howIcon} alt='' />
															<Link to='/' className='me-2'>
																الرئيسية
															</Link>
														</li>
														<li className='breadcrumb-item ' aria-current='page'>
															السلات المتروكة
														</li>
														<li className='breadcrumb-item active' aria-current='page'>
															# {currentUser.name}
														</li>
													</ol>
												</nav>
											</div>
										</div>
									</div>
								</div>
							</div>

							<form onSubmit={handleSubmit}>
								<div className='user-cart-data-wrapper'>
									<div className='row mb-5'>
										<div className='userData-container'>
											<div className='container-title'>بيانات العميل</div>
											<div className='container-body'>
												<div className='row'>
													<div className='col-2'>
														<div className='client-date'>
															<img className='img-fluid' src={currentUser.icon} alt={currentUser.name} />
															<div className='text'>
																<div className='register-type mb-1'>التسجيل في المتجر</div>
																<div className='register-date'>18/08/2022</div>
															</div>
														</div>
													</div>
													<div className='col-10  align-self-center'>
														<div className='row mb-4'>
															<div className='col-12'>
																<div className='user-name'>{currentUser.name}</div>
															</div>
														</div>
														<div className='user-info'>
															<div className='row'>
																<div className='col-2'>
																	<Location />
																	<span className='location me-2'>الرياض</span>
																</div>
																<div className='col-3'>
																	<Phone />
																	<span className='location me-2'> 55 331 4895 966+ </span>
																</div>
																<div className='col-3 me-4'>
																	<Message />
																	<span className='location me-2'>aseel.ar@gmail.com </span>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className='row mb-5'>
										<div className='userData-container'>
											<div className='container-title d-flex justify-content-between align-items-center'>
												<div className='tit-box'>
													<span className=''>المنتجات</span>
													<span className='product-count me-2'>( 2 منتج )</span>
												</div>
												<div className='active-discount-btn'>
													<button>
														<Timer />
														<span className='me-2'>تفعيل خصم مؤقت</span>
													</button>
												</div>
											</div>
											<div className='header'>
												<div className='row'>
													<div className='col-5'>
														<div className='product'>المنتج</div>
													</div>
													<div className='col-2'>
														<div className='count'>الكمية</div>
													</div>
													<div className='col-2'>
														<div className='price'>السعر</div>
													</div>
													<div className='col-2 d-flex justify-content-end'>
														<div className='total'>المجموع</div>
													</div>
												</div>
											</div>
											<div className='container-body products-details'>
												<div className='row mb-4'>
													<div className='col-5'>
														<div className='product'>
															<img className='img-fluid' src={carImage} alt='carImage' />
															<span className='me-2'> سماعة هدفون</span>
														</div>
													</div>
													<div className='col-2'>
														<div className='count'>1</div>
													</div>
													<div className='col-2'>
														<div className='price'>265</div>
													</div>
													<div className='col-2  d-flex justify-content-end'>
														<div className='total'>265 ر.س</div>
													</div>
												</div>
												<div className='row mb-5'>
													<div className='col-5'>
														<div className='product'>
															<img className='img-fluid' src={carImage} alt='carImage' />
															<span className='me-2'> سماعة هدفون</span>
														</div>
													</div>
													<div className='col-2'>
														<div className='count'>1</div>
													</div>
													<div className='col-2'>
														<div className='price'>265</div>
													</div>
													<div className='col-2  d-flex justify-content-end'>
														<div className='total'>265 ر.س</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className='row mb-5'>
										<div className='userData-container'>
											<div className='container-title'> تفاصيل الخصم</div>
											<div className='container-body'>
												<div className='row'>
													<div className='col-12 mb-4'>
														<Switch defaultChecked />

														<span className='me-4'>شحن مجاني </span>
													</div>
													<div className='col-12 '>
														<Switch />

														<span className='me-4'> خصم على السلة </span>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className='row mb-5'>
										<div className='userData-container'>
											<div className='container-title'> نص الرسالة</div>

											<div className='row '>
												<div className='col-12'>
													<div className='text-editor-icons'>
														<BoldIcon />
														<FormatTextRight className='me-3' />
														<FormatTextLeft className='me-3' />
														<FormatTextCenter className='me-3' />
														<Attchment className='me-3' />
														<FormatTextPointSqure className='me-3' />
														<FormatTextPoint className='me-3' />
													</div>
												</div>
												<div className='col-12'>
													<textarea name='page-content-input' id='page-content-input'>
														هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث .يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى
														يولدها التطبيق ،هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة
													</textarea>
												</div>
											</div>
										</div>
									</div>

									<div className='row mb-5'>
										<div className='create-offer-row'>
											<div className='box user-name-box'>
												<label htmlFor='user-name'>اسم العميل</label>
												<input type='text' name='user-name' id='user-name' />
											</div>
											<div className='box total-discount-box'>
												<label htmlFor='total-discount'> اجمالي الخصم</label>
												<input type='text' name='total-discount' id='total-discount' />
											</div>
											<div className='box discount-date-box'>
												<label htmlFor='discount-date'> تاريخ انتهاء الخصم</label>
												<input type='text' name='discount-date' id='discount-date' />
											</div>
										</div>
									</div>

									<div className='row mb-5'>
										<div className='col-12 p-0'>
											<div className='send-offer-btn'>
												<button onClick={() => navigate('/Carts')}>
													<Communication />
													<span className='me-2'>ارسال العرض</span>
												</button>
											</div>
										</div>
									</div>
								</div>
							</form>
						</div>
					))}
				</Box>
			</Modal>
		</div>
	);
};

export default ClientData;
