import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// MUI
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Toolbar from '@mui/material/Toolbar';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// ICONS
import { ReactComponent as StarIcon } from '../../data/Icons/icon-20-star.svg';
import arrowBack from '../../data/Icons/icon-30-arrwos back.svg';

// Modal Style
const style = {
	position: 'absolute',
	top: '97px',
	left: '0',
	transform: 'translate(0%, 0%)',
	width: '100%',
	height: '100%',
	overflow: 'auto',
	bgcolor: '#f8f9fa',
	paddingBottom: '200px',
};

const userDataTable = [
	{
		id: 1,
		title: 'عدد المستخدمين',
	},
	{
		id: 2,
		title: 'رقم الجوال',
	},
	{
		id: 3,
		title: ' البريد الالكتروني',
	},
];

const mainData = [
	{
		id: 1,
		title: ' ملخص الشهر',
	},
	{
		id: 2,
		title: ' ملخص طلبات الاشتراكات',
	},
	{
		id: 3,
		title: '  التنبيهات',
	},
];

const roleData = [
	{
		id: 1,
		title: '  مستخدمي المتجر',
	},
];

function EnhancedTableToolbar({ label }) {
	return (
		<Toolbar
			className=' justify-content-start'
			sx={{
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },

				bgcolor: '#fff',
			}}
		>
			<FormControlLabel control={<Switch defaultChecked />} label={label} />
		</Toolbar>
	);
}

const CreateRole = () => {
	const navigate = useNavigate();

	return (
		<div className='' open={true}>
			<Modal open={true} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style} className='nested-pages-modal'>
					<section className='SupportDetails-page create-role'>
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

						<div className='create-role-wrapper'>
							<div className='row mb-5'>
								<div className='search-wrapper'>
									<div className='col-6'>
										<label className='d-block mb-2' htmlFor='role-search'>
											<StarIcon className='star-icon' />
											<span className='me-2'>اسم الدور الوظيفي</span>
										</label>
										<input style={{ backgroundColor: '#fff' }} type='text' name='role-search' id='role-search' placeholder='ادخل اسم الدور الوظيفي بالحروف فقط' />
									</div>
								</div>
							</div>

							<div className='row mb-5'>
								<div className='create-role-title mb-4'>
									<StarIcon className='star-icon' />
									<span className='me-2'> حدد الصلاحيات</span>
								</div>

								<div className='create-role-tables'>
									<div className='role-wrapper mb-5'>
										<div className='row'>
											<EnhancedTableToolbar label='عرض بيانات المستخدمين' />
											<TableContainer component={Paper} sx={{ p: 0 }}>
												<Table>
													<TableHead
														sx={{
															bgcolor: '#eff9ff',
														}}
													>
														<TableRow>
															<TableCell
																sx={{
																	width: '60%',
																}}
																align='right'
															>
																اسم الصلاحية
															</TableCell>
															<TableCell align='center'>عرض</TableCell>
															<TableCell align='center'>تعديل</TableCell>
															<TableCell align='center'>إضافة</TableCell>
															<TableCell align='center'>حذف</TableCell>
														</TableRow>
													</TableHead>
													<TableBody>
														{userDataTable.map((row) => (
															<TableRow key={row.id}>
																<TableCell
																	sx={{
																		border: 'none',
																		width: '60%',
																	}}
																	align='right'
																>
																	{row.title}
																</TableCell>
																<TableCell sx={{ border: 'none' }} align='center'>
																	<Checkbox />
																</TableCell>
																<TableCell sx={{ border: 'none' }} align='center'>
																	<Checkbox />
																</TableCell>
																<TableCell sx={{ border: 'none' }} align='center'>
																	<Checkbox />
																</TableCell>
																<TableCell sx={{ border: 'none' }} align='center'>
																	<Checkbox />
																</TableCell>
															</TableRow>
														))}
													</TableBody>
												</Table>
											</TableContainer>
										</div>
									</div>

									<div className='role-wrapper mb-5'>
										<div className='row'>
											<EnhancedTableToolbar label='الرئيسية' />
											<TableContainer component={Paper} sx={{ p: 0 }}>
												<Table>
													<TableHead
														sx={{
															bgcolor: '#eff9ff',
														}}
													>
														<TableRow>
															<TableCell
																sx={{
																	width: '60%',
																}}
																align='right'
															>
																اسم الصلاحية
															</TableCell>
															<TableCell align='center'>عرض</TableCell>
															<TableCell align='center'>تعديل</TableCell>
															<TableCell align='center'>إضافة</TableCell>
															<TableCell align='center'>حذف</TableCell>
														</TableRow>
													</TableHead>
													<TableBody>
														{mainData.map((row) => (
															<TableRow key={row.id}>
																<TableCell
																	sx={{
																		border: 'none',
																		width: '60%',
																	}}
																	align='right'
																>
																	{row.title}
																</TableCell>
																<TableCell sx={{ border: 'none' }} align='center'>
																	<Checkbox />
																</TableCell>
																<TableCell sx={{ border: 'none' }} align='center'>
																	<Checkbox />
																</TableCell>
																<TableCell sx={{ border: 'none' }} align='center'>
																	<Checkbox />
																</TableCell>
																<TableCell sx={{ border: 'none' }} align='center'>
																	<Checkbox />
																</TableCell>
															</TableRow>
														))}
													</TableBody>
												</Table>
											</TableContainer>
										</div>
									</div>
									<div className='role-wrapper mb-5'>
										<div className='row'>
											<EnhancedTableToolbar label='المستخدمين' />
											<TableContainer component={Paper} sx={{ p: 0 }}>
												<Table>
													<TableHead
														sx={{
															bgcolor: '#eff9ff',
														}}
													>
														<TableRow>
															<TableCell
																sx={{
																	width: '60%',
																}}
																align='right'
															>
																اسم الصلاحية
															</TableCell>
															<TableCell align='center'>عرض</TableCell>
															<TableCell align='center'>تعديل</TableCell>
															<TableCell align='center'>إضافة</TableCell>
															<TableCell align='center'>حذف</TableCell>
														</TableRow>
													</TableHead>
													<TableBody>
														{roleData.map((row) => (
															<TableRow key={row.id}>
																<TableCell
																	sx={{
																		border: 'none',
																		width: '60%',
																	}}
																	align='right'
																>
																	{row.title}
																</TableCell>
																<TableCell sx={{ border: 'none' }} align='center'>
																	<Checkbox />
																</TableCell>
																<TableCell sx={{ border: 'none' }} align='center'>
																	<Checkbox />
																</TableCell>
																<TableCell sx={{ border: 'none' }} align='center'>
																	<Checkbox />
																</TableCell>
																<TableCell sx={{ border: 'none' }} align='center'>
																	<Checkbox />
																</TableCell>
															</TableRow>
														))}
													</TableBody>
												</Table>
											</TableContainer>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='row d-flex justify-content-center'>
							<div className='col-2 '>
								<div className='btn-wrapper w-100'>
									<button
										onClick={() => {
											navigate('/Management/JobTitles');
										}}
									>
										حفظ واعتماد
									</button>
								</div>
							</div>
						</div>
					</section>
				</Box>
			</Modal>
		</div>
	);
};

export default CreateRole;
