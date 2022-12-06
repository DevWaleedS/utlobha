import React from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import arrowBack from '../../data/Icons/icon-30-arrwos back.svg';

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

const CreateRole = () => {
	const dispatch = useDispatch(false);
	return (
		<div className='' open={true}>
			<Modal open={true} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style} className='nested-pages-modal'>
					<section className='SupportDetails-page '>
						<div className='head-category mb-5 '>
							<div className='row'>
								<div className='page-title mb-3'>
									<h3> انشاء دور جديد</h3>
								</div>
							</div>

							<div className='row'>
								<nav aria-label='breadcrumb'>
									<ol className='breadcrumb'>
										<li className='breadcrumb-item'>
											<img src={arrowBack} alt='' />
											<Link to='/Management/JobTitles' className='me-2'>
												الأدوار الوظيفية
											</Link>
										</li>

										<li className='breadcrumb-item active' aria-current='page'>
											انشاء دور جديد
										</li>
									</ol>
								</nav>
							</div>
						</div>
					</section>
				</Box>
			</Modal>
		</div>
	);
};

export default CreateRole;
