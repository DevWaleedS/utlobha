import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeVerifyModal } from '../../store/slices/VerifyStoreModal-slice';

// MUI
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Checkbox } from '@mui/material';

// ICONS

import { AiOutlineCloseCircle } from 'react-icons/ai';

import { ReactComponent as DocsIcon } from '../../data/Icons/icon-24-write.svg';
import { ReactComponent as PaperIcon } from '../../data/Icons/icon-24- details.svg';
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
	top: '112px',
	left: '50%',
	transform: 'translate(-50%, 0%)',
	width: '80%',
	height: '100%',
	overflow: 'auto',
	bgcolor: '#f8f9fa',
	borderRadius: '8px 8px 0 0',
	boxShadow: 24,
	paddingBottom: '200px',
};

const CreatePage = () => {
	const { isOpen } = useSelector((state) => state.VerifyModal);
	const dispatch = useDispatch(false);

	//
	const handleSubmit = (event) => {
		event.preventDefault();
	};


	return (
		<div className='' open={isOpen}>
			<Modal open={isOpen} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style} className='create-pages-modal'>
					<form onSubmit={handleSubmit}>
						{/** Offers Details */}
						<div className='create-pages-form-wrapper'>
							<div className='row '>
								<div className='col-12'>
									<div className='form-title  d-flex justify-content-between align-items-center'>
										<h5 className=''> إنشاء صفحة</h5>
										<AiOutlineCloseCircle
											onClick={() => {
												dispatch(closeVerifyModal());
											}}
										/>
									</div>
								</div>
							</div>

							<div className='form-body'>
								<div className='row mb-5 '>
									<div className='col-12'>
										<div className='input-icon'>
											<DocsIcon />
										</div>
										<input className='w-100' type='text' name='page-title' id='page-title' placeholder='عنوان الصفحة' />
									</div>
								</div>
								<div className='row mb-5'>
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
										<textarea name='page-content-input' id='page-content-input' placeholder='محتوي الصفحة' />
									</div>
								</div>
								<div className='row mb-5 seo-inputs'>
									<div className='col-12 mb-4'>
										<h4>تحسينات SEO</h4>
									</div>
									<div className='col-12 mb-4'>
										<label htmlFor='page-title-input' className='d-block mb-1'>
											عنوان صفحة تعريفية ( Page Title)
										</label>
										<div className='input-icon'>
											<DocsIcon />
										</div>
										<input
											className='w-100'
											type='text'
											name='page-title-input'
											id='page-title-input'
											placeholder='عنوان صفحة تعريفية ( Page Title)
'
										/>
									</div>
									<div className='col-12 mb-4'>
										<label htmlFor='page-title-input' className='d-block mb-1'>
											رابط صفحة تعريفية ( SEO Page URL )
										</label>
										<div className='input-icon'>
											<DocsIcon />
										</div>
										<input className='w-100' type='text' name='page-title-input' id='page-title-input' placeholder='رابط صفحة تعريفية ( SEO Page URL )' />
									</div>
									<div className='col-12 '>
										<label htmlFor='page-title-input' className='d-block mb-1'>
											وصف صفحة تعريفية ( Page Description)
										</label>
										<div className='input-icon'>
											<PaperIcon />
										</div>
										<input className='w-100' type='text' name='page-title-input' id='page-title-input' placeholder='وصف صفحة تعريفية ( Page Description)' />
									</div>
								</div>
								<div className='row mb-5 check-box-inputs'>
									<div className='col-6'>
										<div className='wrapper'>
											<div className='title'>
												<h4>تصنيف الصفحة</h4>
											</div>
											<div className='body '>
												<div className='checkbox-row'>
													<Checkbox id='blog' />
													<label htmlFor='blog'>المدونة</label>
												</div>
												<div className='checkbox-row'>
													<Checkbox id='priv' />
													<label htmlFor='priv'>سياسة الخصوصية</label>
												</div>
												<div className='checkbox-row'>
													<Checkbox id='public' />
													<label htmlFor='public'>عام</label>
												</div>
											</div>
										</div>
									</div>
									<div className='col-6'>
										<div className='wrapper'>
											<div className='title'>
												<h4> ربط (تاج)</h4>
											</div>
											<div className='body '>
												<div className='row p-4'>
													<div className='col-3'>
														<button className='w-100'>اضافة</button>
													</div>
													<div className='col-9'>
														<input className='w-100' type='text' name='contact-tag' id='contact-tag' />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/** form buttons */}
						<div className='form-footer-btn'>
							<div className='row d-flex justify-content-center align-items-center'>
								<div className='col-2'>
									<button className='create-page-btn save-btn'> حفظ</button>
								</div>
								<div className='col-2'>
									<button
										className='create-page-btn share-btn'
										onClick={() => {
											dispatch(closeVerifyModal());
										}}
									>
										نشر
									</button>
								</div>
							</div>
						</div>
					</form>
				</Box>
			</Modal>
		</div>
	);
};

export default CreatePage;
