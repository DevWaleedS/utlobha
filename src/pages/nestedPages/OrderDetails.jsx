import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import { ReactComponent as StatusIcon } from '../../data/Icons/status.svg';
import { ReactComponent as DateIcon } from '../../data/Icons/icon-date.svg';
import { ReactComponent as WalletIcon } from '../../data/Icons/icon-24-wallet.svg';
import { ReactComponent as ArrowIcon } from '../../data/Icons/icon-30-arrwos back.svg';
import { ReactComponent as Client } from '../../data/Icons/icon-24-user.svg';
import { ReactComponent as Message } from '../../data/Icons/icon-24-email.svg';
import { ReactComponent as Phone } from '../../data/Icons/icon-24- call.svg';
import { ReactComponent as Location } from '../../data/Icons/icon-24-pic map.svg';
import { ReactComponent as ArrowDown } from '../../data/Icons/icon-24-chevron_down.svg';
import { ReactComponent as Print } from '../../data/Icons/icon-24-print.svg';
import { ReactComponent as PDFIcon } from '../../data/Icons/pfd.svg';
import { ReactComponent as DeleteIcon } from '../../data/Icons/icon-24-delete.svg';
import { ReactComponent as ListIcon } from '../../data/Icons/icon-24-circlr.svg';

// Image
import UserImage from '../../data/Icons/person.jpg';

const OrderDetails = () => {
	return (
		<section className='order-details-page orders-pages p-3 '>
			<div className='head-category mb-5 pt-4'>
				<div className='row '>
					<div className='col-6'>
						<h3 className='mb-3'>تفاصيل الطلب</h3>
						{/** breadcrumb */}
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb'>
								<li className='breadcrumb-item'>
									<ArrowIcon className='arrow-back-icon' />
									<Link to='/Orders' className='me-2'>
										جدول الطلبات
									</Link>
								</li>
								<li className='breadcrumb-item active ' aria-current='page'>
									تفاصيل الطلب
								</li>
							</ol>
						</nav>
					</div>
					<div className='col-6 d-flex justify-content-end'>
						<div className='order-number'>
							<div className='title'>
								<h5>رقم الطلب</h5>
							</div>
							<div className='number'>0052</div>
						</div>
					</div>
				</div>
			</div>

			<div className='order-details-body'>
				{/** */}
				<div className='row mb-5'>
					<div className='order-details-box '>
						<div className='title mb-3'>
							<h5>بيانات الطلب</h5>
						</div>
						<div className='order-details-data pt-4 pb-4'>
							<div className='row d-flex justify-content-center  '>
								<div className='col-3'>
									<div className='order-head-row '>
										<StatusIcon />
										<span className='me-3'>الحالة</span>
									</div>
									<div className='order-data-row'>
										<span className='status'>قيد التنفيذ</span>
									</div>
								</div>
								<div className='col-3'>
									<div className='order-head-row '>
										<DateIcon className='date-icon' />
										<span className='me-3'>تاريخ الطلب</span>
									</div>
									<div className='order-data-row'>
										<span> 20/08/2022</span>
									</div>
								</div>
								<div className='col-3'>
									<div className='order-head-row'>
										<WalletIcon />
										<span className='me-3 price'>
											قيمة الطلب <span>SAR</span>
										</span>
									</div>
									<div className='order-data-row'>
										<span> 738</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/** */}
				<div className='row mb-5'>
					<div className='order-details-box '>
						<div className='title mb-3'>
							<h5>بيانات العميل</h5>
						</div>
						<div className='order-details-data pt-4 pb-4'>
							<div className='row d-flex justify-content-center  '>
								<div className='col-2'>
									<div className='client-date'>
										<div className='img mb-2'>
											<img className=' img-fluid' src={UserImage} alt='client' />
										</div>
										<div className='text'>
											<div className='register-type mb-1'>التسجيل في المتجر</div>
											<div className='register-date'>18/08/2022</div>
										</div>
									</div>
								</div>
								<div className='col-10'>
									<div className='row mb-4'>
										<div className='col-6'>
											<div className='info-box'>
												<Client className='client-icon' />
												<span>محمد سامح حسين</span>
											</div>
										</div>
										<div className='col-6'>
											<div className='info-box'>
												<Phone />
												<span>55 331 4895 966+ </span>
											</div>
										</div>
									</div>
									<div className='row'>
										<div className='col-6'>
											<div className='info-box'>
												<Message />
												<span>exmple@gmail.com </span>
											</div>
										</div>
										<div className='col-6'>
											<div className='info-box'>
												<Location />
												<span> الرياض</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/** */}
				<div className='row mb-5'>
					<div className='order-details-box'>
						<div className='title mb-4'>
							<h5> خيارات الطلب</h5>
						</div>
						<div className='row px-3'>
							<div className='order-action-box mb-3'>
								<div className='action-title'>
									<ListIcon className='list-icon' />
									<span className='me-2'>تعديل حالة الطلب</span>
								</div>
								<div className='action-icon'>
									<ArrowDown />
								</div>
							</div>
							<div className='order-action-box mb-3'>
								<div className='action-title'>
									<ListIcon className='list-icon' />
									<span className='me-2'> طباعة الفاتورة</span>
								</div>
								<div className='action-icon'>
									<Print />
								</div>
							</div>
							<div className='order-action-box mb-3'>
								<div className='action-title'>
									<ListIcon className='list-icon' />
									<span className='me-2'> تصدير الطلب</span>
								</div>
								<div className='action-icon'>
									<PDFIcon className='pdf-icon' />
								</div>
							</div>
							<div className='order-action-box mb-5'>
								<div className='action-title'>
									<ListIcon className='list-icon' />
									<span className='me-2'> حذف الطلب</span>
								</div>
								<div className='action-icon'>
									<DeleteIcon className='delete-icon' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OrderDetails;
