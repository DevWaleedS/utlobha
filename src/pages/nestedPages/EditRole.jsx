import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

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
import { ReactComponent as SearchIcon } from '../../data/Icons/icon_24_search.svg';
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
const discountCoupon = [
	{
		id: 1,
		title: '   الكوبون',
	},
	{
		id: 2,
		title: '   احصائيات الكوبونات',
	},
	{
		id: 3,
		title: '   تفعيل كوبون',
	},
];
const setting = [
	{
		id: 1,
		title: ' تفاصيل الاعدادات',
	},
	{
		id: 2,
		title: '   احصائيات الكوبونات',
	},
	{
		id: 3,
		title: '  بيانات المنصة الاساسية  ',
	},
	{
		id: 4,
		title: '   بيانات التواصل ',
	},
	{
		id: 5,
		title: '   حسابات المنصة ',
	},
	{
		id: 6,
		title: '   عدادات التنيهات ',
	},
	{
		id: 7,
		title: '  اعدادت العملاء  ',
	},
	{
		id: 8,
		title: ' التحكم بالرصيد   ',
	},
];
const payment = [
	{
		id: 1,
		title: ' تفاصيل طرق الدفع',
	},
	{
		id: 2,
		title: '    حساب بنكي',
	},
	{
		id: 3,
		title: '    حساب باي بال  ',
	},
];
const stores = [
	{
		id: 1,
		title: ' تفاصيل المتاجر',
	},
	{
		id: 2,
		title: '   البحث عن شريك',
	},
	{
		id: 3,
		title: '    قبول متجر  ',
	},
];
const support = [
	{
		id: 1,
		title: ' الرد علي الاستفسارات ',
	},
];
const profileSetting = [
	{
		id: 1,
		title: '  الاسم ',
	},
	{
		id: 2,
		title: '     البريد الالكتروني',
	},
	{
		id: 3,
		title: '     كلمة المرور  ',
	},
];
const mony = [
	{
		id: 1,
		title: '  العمليات المحسابية ',
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

const EditRole = () => {
	const { title } = useParams();


	const navigate = useNavigate();

	// get data from redux store
	const jobTitle = useSelector((state) => state.jobTitleData);

	const jobs = jobTitle.filter((job) => {
		
		return job.title === title;
	});

	return (
		<div className='' open={true}>
			<Modal open={true} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
				<Box sx={style} className='nested-pages-modal edit-job-title-modal'>
					{jobs.map((job) => (
						<section className='SupportDetails-page create-role edit-job-title' key={job.id}>
							<div className='page-wrapper'>
								<div className='page-header mb-5'>
									<div className='row'>
										<div className='col-6'>
											<span>{job.title}</span>
										</div>
										<div className='col-6'>
											<div className='search'>
												<div className='row'>
													<div className='col-8'>
														<div className='input-icon'>
															<SearchIcon />
														</div>
														<input className='w-100' type='text' name='search-input' id='search-input' placeholder='ابحث عن صلاحية' />
													</div>
													<div className='col-4'>
														<button
															className='save-btn w-100'
															onClick={() => {
																navigate('/Management/JobTitles');
															}}
														>
															حفظ واعتماد
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className='row mb-5'>
									<nav aria-label='breadcrumb'>
										<ol className='breadcrumb'>
											<li className='breadcrumb-item'>
												<img src={arrowBack} alt='' />
												<Link to='/Management/JobTitles' className='me-2'>
													الأدوار الوظيفية
												</Link>
											</li>

											<li className='breadcrumb-item active' aria-current='page'>
												صلاحيات الادمن
											</li>
										</ol>
									</nav>
								</div>

								<div className='edit-job-wrapper '>
									<div className='row mb-5'>
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

											<div className='role-wrapper mb-5'>
												<div className='row'>
													<EnhancedTableToolbar label='كوبونات التخفيض' />
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
																{discountCoupon.map((row) => (
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
													<EnhancedTableToolbar label=' اعدادات المنصة' />
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
																{setting.map((row) => (
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
													<EnhancedTableToolbar label='طرق الدفع' />
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
																{payment.map((row) => (
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
													<EnhancedTableToolbar label='المتاجر' />
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
																{stores.map((row) => (
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
													<EnhancedTableToolbar label='الدعم الفني' />
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
																{support.map((row) => (
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
													<EnhancedTableToolbar label=' اعدادات الملف الشخصي' />
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
																{profileSetting.map((row) => (
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
													<EnhancedTableToolbar label=' المالية' />
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
																{mony.map((row) => (
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
							</div>
						</section>
					))}
				</Box>
			</Modal>
		</div>
	);
};

export default EditRole;
