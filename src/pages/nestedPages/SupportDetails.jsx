import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeVerifyModal } from '../../store/slices/VerifyStoreModal-slice';
import { Link } from 'react-router-dom';
// MUI
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';


// ICONS
import { ReactComponent as StatusIcon } from '../../data/Icons/status.svg';
import { ReactComponent as DateIcon } from '../../data/Icons/icon-date.svg';
import { ReactComponent as TypeSuport } from '../../data/Icons/type support.svg';
import { ReactComponent as Client } from '../../data/Icons/icon-24-user.svg';
import { ReactComponent as Customer } from '../../data/Icons/icon-support.svg';
import { ReactComponent as Phone } from '../../data/Icons/icon-24- call.svg';

import { ReactComponent as BoldIcon } from '../../data/Icons/icon-24-Bold.svg';
import { ReactComponent as FormatTextCenter } from '../../data/Icons/icon-24-format text center.svg';
import { ReactComponent as FormatTextLeft } from '../../data/Icons/icon-24-format text lift.svg';
import { ReactComponent as FormatTextRight } from '../../data/Icons/icon-24-format text right.svg';
import { ReactComponent as FormatTextPoint } from '../../data/Icons/icon-24-format text point.svg';
import { ReactComponent as FormatTextPointSqure } from '../../data/Icons/icon-24-format text-point.svg';
import { ReactComponent as Attchment } from '../../data/Icons/icon-5.svg';

// Modal Style
const style = {
	position: 'absolute',
	top: '97px',
	left: '-1%',
	transform: 'translate(0%, 0%)',
	width: '80%',
	height: '100%',
	overflow: 'auto',
	bgcolor: '#f8f9fa',

	paddingBottom: '200px',
};

const SupportDetails = () => {
	const { isOpen } = useSelector((state) => state.VerifyModal);
	const dispatch = useDispatch(false);
	return (
		<div className='' open={isOpen}>
			<Modal open={isOpen} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style} className='nested-pages-modal'>
					<section className='SupportDetails-page '>
						<div className='head-category mb-5 '>
							<div className='row'>
								<div className='page-title mb-3'>
									<h3>تفاصيل الدعم الفني</h3>
								</div>
							</div>

							<div className='row'>
								<nav aria-label='breadcrumb'>
									<ol className='breadcrumb'>
										<li className='breadcrumb-item'>
											<Link to='/Support' className='me-2'>
												الدعم الفني
											</Link>
										</li>
										<li className='breadcrumb-item ' aria-current='page'>
											جدول الشكاوى
										</li>

										<li className='breadcrumb-item active' aria-current='page'>
											تفاصيل الشكوى
										</li>
									</ol>
								</nav>
							</div>
						</div>

						<div className='row mb-5'>
							<div className='issue-wrapper'>
								<div className='row mb-5'>
									<div className='col-12 mb-4'>
										<div className='issue-number'>
											<h5>رقم الشكوى</h5>
											<div>23</div>
										</div>
									</div>
									<div className='col-12'>
										<div className='issue-details-box'>
											<div className='row justify-content-between'>
												<div className='col-lg-6  col-sm-12'>
													<div className='row mb-4'>
														<div className='data-row d-flex'>
															<div className='box label-box'>
																<Client className='client-icon' />
																<span className='me-2'>اسم العميل</span>
															</div>

															<div className='box success-box d-flex justify-content-center'>
																<span>عبد الرحمن محمد</span>
															</div>
														</div>
													</div>

													<div className='row mb-4'>
														<div className='data-row d-flex'>
															<div className='box label-box'>
																<Phone className='phone-icon' />
																<span className='me-2'> الهاتف</span>
															</div>

															<div className='box success-box d-flex justify-content-center'>
																<span> 9663222335</span>
															</div>
														</div>
													</div>

													<div className='row mb-4'>
														<div className='data-row d-flex'>
															<div className='box label-box'>
																<StatusIcon className='status' />
																<span className='me-2'> الحالة</span>
															</div>
															<div className='box pending-box d-flex justify-content-center'>
																<span> جاري المعالجة</span>
															</div>
														</div>
													</div>
												</div>

												<div className='col-lg-6 col-sm-12 '>
													<div className='row mb-4'>
														<div className='data-row d-flex justify-content-end'>
															<div className='box label-box'>
																<DateIcon className='date-icon' />
																<span className='me-2'> تاريخ الشكوى</span>
															</div>
															<div className='box success-box d-flex justify-content-center'>
																<span>20/08/2022</span>
															</div>
														</div>
													</div>
													<div className='row mb-4'>
														<div className='data-row d-flex justify-content-end'>
															<div className='box label-box'>
																<TypeSuport className='support-icon' />
																<span className='me-2'> نوع الاتصال</span>
															</div>

															<div className='box wring-box d-flex justify-content-center'>
																<span>استفسار </span>
															</div>
														</div>
													</div>
													<div className='row mb-4'>
														<div className='data-row d-flex justify-content-end'>
															<div className='box label-box'>
																<Customer className='customer-icon' />
																<span className='me-2'>عنوان الشكوى </span>
															</div>
															<div className='box success-box d-flex justify-content-center'>
																<span>خدمات السيرفر</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/**  */}

								<div className='issue-content mb-3'>
									<div className='col-12 mb-3'>
										<h4 className='issue-title'>محتوي الشكوي</h4>
									</div>

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
											يولدها التطبيق إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على
											وجه الخصوص، حيث يحتاج العميل فى كثير
										</textarea>
									</div>
								</div>

								{/**  */}
								<div className='row'>
									<div className='col-12'>
										<div className=' close-btn d-flex justify-content-center align-items-center mb-3'>
											<button
												onClick={() => {
													dispatch(closeVerifyModal());
												}}
											>
												{' '}
												إغلاق
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</Box>
			</Modal>
		</div>
	);
};

export default SupportDetails;
