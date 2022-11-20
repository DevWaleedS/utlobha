import React from 'react';

// Use Sidebar Pro to create sidebar
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

// use Nav lINKS
import { NavLink } from 'react-router-dom';

// Icons
import { ReactComponent as Eye } from '../data/Icons/icon-24-invisible.svg';
import { ReactComponent as HomeImage } from '../data/Icons/icon-24-dashboard.svg';
import { ReactComponent as Category } from '../data/Icons/icon-24-Category.svg';
import { ReactComponent as Products } from '../data/Icons/product-24.svg';
import { ReactComponent as Orders } from '../data/Icons/icon-24-order.svg';
import { ReactComponent as Marketing } from '../data/Icons/icon-24-marketing.svg';
import { ReactComponent as Rating } from '../data/Icons/icon-24-ratings.svg';
import { ReactComponent as PagesIcon } from '../data/Icons/icon-24-pages.svg';
import { ReactComponent as Academy } from '../data/Icons/icon-24-graduatioin.svg';
import { ReactComponent as Template } from '../data/Icons/icon-24-template.svg';
import { ReactComponent as Store } from '../data/Icons/icon-24-management store.svg';
import { ReactComponent as Support } from '../data/Icons/icon-24-support.svg';
import { ReactComponent as Setting } from '../data/Icons/icon-24-setting.svg';
import { ReactComponent as Clients } from '../data/Icons/icon-24-client.svg';
import { ReactComponent as Reports } from '../data/Icons/icon-24-report.svg';
import { ReactComponent as Logout } from '../data/Icons/icon-24-sign out.svg';
import { ReactComponent as Discoint } from '../data/Icons/icon-24-discount.svg';
import { ReactComponent as Shoping } from '../data/Icons/icon-24-design store.svg';
import { ReactComponent as Delevray } from '../data/Icons/icon-24-delivery.svg';
import { ReactComponent as Offer } from '../data/Icons/icon-24-offer.svg';
import { ReactComponent as Payment } from '../data/Icons/icon-24-payment Getway.svg';
import { ReactComponent as Verification } from '../data/Icons/icon-24-Verification.svg';
import { ReactComponent as BsCart } from '../data/Icons/icon-24-shopping_cart.svg';
import { ReactComponent as Seo } from '../data/Icons/icon-24-seo.svg';
import { FaCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { openModal } from '../store/slices/VideoModal-slice';
import { openVerifyModal } from '../store/slices/VerifyStoreModal-slice';

/**
 * 
 * 			<div className='sidebar-wrapper'>
				<ul className='menu-box'>
					<li className='menu-item'>
						<NavLink className='menu-lik' to=''>
							<Eye />
							<span className='me-2'>عرض المتجر</span>
						</NavLink>
					</li>

					<li className='menu-item'>
						<NavLink className='menu-lik' to=''>
							<HomeImage />
							<span className='me-2'>الرئيسية </span>
						</NavLink>
					</li>

					<li className='menu-item'>
						<NavLink className='menu-lik' to='Category'>
							<Category />
							<span className='me-2'> التصنيفات</span>
						</NavLink>
					</li>

					<li className='menu-item'>
						<NavLink className='menu-lik' to='Products'>
							<Products />
							<span className='me-2'> المنتجات</span>
						</NavLink>
					</li>

					<li className='menu-item'>
						<NavLink className='menu-lik' to='Orders'>
							<Marketing />
							<span className='me-2'>الطلبات </span>
						</NavLink>
					</li>

				
					<li className='menu-item'>
						<a className='menu-lik  d-flex justify-content-between' data-bs-toggle='collapse' href='#collapseOrders' role='button' aria-expanded='false' aria-controls='collapseOrders'>
							<div>
								<Orders />
								<span className='me-2'> التسويق</span>
							</div>
							<IoIosArrowBack />
						</a>

						<ul className='collapse' id='collapseOrders'>
							<li className='sub-menu'>
								<NavLink className='sub-lik' to='Coupon'>
									<div>
										<Discoint />
										<span className='me-2'> الكوبونات</span>
									</div>
								</NavLink>
								<NavLink className='sub-lik' to='Offers'>
									<div>
										<Offer />
										<span className='me-2'> العروض المتاحة</span>
									</div>
								</NavLink>
								<NavLink className='sub-lik' to='Carts'>
									<div>
										<BsCart />
										<span className='me-2'> السلات المتروكة</span>
									</div>
								</NavLink>
								<NavLink className='sub-lik' to='Seo'>
									<div>
										<Seo />
										<span className='me-2'> الكمات المفتاحية</span>
									</div>
								</NavLink>
								<NavLink className='sub-lik' to='Marketing'>
									<div>
										<Shoping />
										<span
											className='me-2'
											onClick={() => {
												dispatch(openModal());
											}}
										>
											التسويق عبر المشاهير
										</span>
									</div>
								</NavLink>
							</li>
						</ul>
					</li>

					<li className='menu-item'>
						<NavLink className='menu-lik' to='Rating'>
							<Rating />
							<span className='me-2'> التقييمات</span>
						</NavLink>
					</li>

					<li className='menu-item'>
						<NavLink className='menu-lik' to='Pages'>
							<PagesIcon />
							<span className='me-2'> الصفحات</span>
						</NavLink>
					</li>

					<li className='menu-item'>
						<NavLink className='menu-lik' to='Academy'>
							<Academy />
							<span className='me-2'> الأكاديمية</span>
						</NavLink>
					</li>

					<li className='menu-item'>
						<NavLink className='menu-lik' to='Template'>
							<Template />
							<span className='me-2'> القالب</span>
						</NavLink>
					</li>

				
					<li className='menu-item'>
						<a className='menu-lik  d-flex justify-content-between' data-bs-toggle='collapse' href='#storeCollapse' role='button' aria-expanded='false' aria-controls='storeCollapse'>
							<div>
								<Store />
								<span className='me-2'> بيانات المتجر</span>
							</div>
							<IoIosArrowBack />
						</a>

						<ul className='collapse' id='storeCollapse'>
							<li className='sub-menu'>
								<NavLink className='sub-lik' to='Home'>
									<div>
										<Verification />
										<span
											className='me-2'
											onClick={() => {
												dispatchVerifyModal(openVerifyModal());
											}}
										>
											توثيق المتجر
										</span>
									</div>
								</NavLink>
								<NavLink className='sub-lik' to='SocialPages'>
									<div>
										<Orders />
										<span className='me-2'> صفحات التواصل</span>
									</div>
								</NavLink>
								<NavLink className='sub-lik' to='ShippingCompanies'>
									<div>
										<Delevray />
										<span className='me-2'> شركات الشحن</span>
									</div>
								</NavLink>
								<NavLink className='sub-lik' to='PaymentGetways'>
									<div>
										<Payment />
										<span className='me-2'> بوابات الدفع</span>
									</div>
								</NavLink>
							</li>
						</ul>
					</li>

					<li className='menu-item'>
						<NavLink className='menu-lik' to='Support'>
							<Support />
							<span className='me-2'> الدعم الفني</span>
						</NavLink>
					</li>

			
					<li className='menu-item'>
						<a className='menu-lik  d-flex justify-content-between' data-bs-toggle='collapse' href='#collapseSetting' role='button' aria-expanded='false' aria-controls='collapseSetting'>
							<div>
								<Setting />
								<span className='me-2'> الاعدادات</span>
							</div>
							<IoIosArrowBack />
						</a>

						<ul className='collapse' id='collapseSetting'>
							<li className='sub-menu'>
								<NavLink className='sub-lik' to='MainInformation'>
									<div>
										<FaCircle style={{ width: '16px' }} />
										<span className='me-2'> البيانات الاساسية</span>
									</div>
								</NavLink>
								<NavLink className='sub-lik' to='MaintenanceMode'>
									<div>
										<FaCircle style={{ width: '16px' }} />
										<span
											className='me-2'
											onClick={() => {
												dispatch(openModal());
											}}
										>
											وضع الصيانة
										</span>
									</div>
								</NavLink>
								<NavLink className='sub-lik' to='Management'>
									<div>
										<FaCircle style={{ width: '16px' }} />
										<span className='me-2'> الإدارة و المستخدمين </span>
									</div>
								</NavLink>
							</li>
						</ul>
					</li>

					<li className='menu-item'>
						<NavLink className='menu-lik' to='Customer'>
							<Clients />
							<span className='me-2'> العملاء</span>
						</NavLink>
					</li>

					<li className='menu-item'>
						<NavLink className='menu-lik' to='Report'>
							<Reports />
							<span className='me-2'> التقارير</span>
						</NavLink>
					</li>

					<li className='menu-item logout-tab'>
						<NavLink className='menu-lik' to='logOut'>
							<Logout />
							<span className='me-2'> تسجيل خروج</span>
						</NavLink>
					</li>
				</ul>
			</div>
 */

const SideBar = () => {
	const dispatch = useDispatch(false);
	const dispatchVerifyModal = useDispatch(false);

	return (
		<Sidebar rtl={true} className='sidebar' style={{ height: '100%' }}>
			<Menu>
				<NavLink className='menu-link' to='Home'>
					<MenuItem>
						<Eye />
						<span className='me-2'>عرض المتجر</span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to=''>
					<MenuItem>
						<HomeImage />
						<span className='me-2'>الرئيسية </span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Category'>
					<MenuItem>
						<Category />
						<span className='me-2'> التصنيفات</span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Products'>
					<MenuItem>
						<Products />
						<span className='me-2'> المنتجات</span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Orders'>
					<MenuItem>
						<Marketing />
						<span className='me-2'>الطلبات </span>
					</MenuItem>
				</NavLink>

				{/** Markting Sub menu */}
				<SubMenu label='التسويق' icon={<Orders />}>
					<NavLink className='sub-menu-link' to='Coupon'>
						<MenuItem>
							<Discoint />
							<span className='me-2'> الكوبونات</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='Offers'>
						<MenuItem>
							<Offer />
							<span className='me-2'> العروض المتاحة</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='Carts'>
						<MenuItem>
							<BsCart />
							<span className='me-2'> السلات المتروكة</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='Seo'>
						<MenuItem>
							<Seo />
							<span className='me-2'> الكمات المفتاحية</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='Marketing'>
						<MenuItem>
							<Shoping />
							<span
								className='me-2'
								onClick={() => {
									dispatch(openModal());
								}}
							>
								التسويق عبر المشاهير
							</span>
						</MenuItem>
					</NavLink>
				</SubMenu>

				<NavLink className='menu-link' to='Rating'>
					<MenuItem>
						<Rating className='rating-icon' />
						<span className='me-2'>التقييمات </span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Pages'>
					<MenuItem>
						<PagesIcon />
						<span className='me-2'> الصفحات</span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Academy'>
					<MenuItem>
						<Academy />
						<span className='me-2'> الأكاديمية</span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Template'>
					<MenuItem>
						<Template />
						<span className='me-2'> القالب</span>
					</MenuItem>
				</NavLink>

				{/** Store Sub menu */}
				<SubMenu label='بيانات المتجر' icon={<Store />}>
					<NavLink className='sub-menu-link' to='Home'>
						<MenuItem>
							<Verification />
							<span
								className='me-2'
								onClick={() => {
									dispatchVerifyModal(openVerifyModal());
								}}
							>
								توثيق المتجر
							</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='SocialPages'>
						<MenuItem>
							<Orders />
							<span className='me-2'> صفحات التواصل</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='ShippingCompanies'>
						<MenuItem>
							<Delevray />
							<span className='me-2'> شركات الشحن</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='PaymentGetways'>
						<MenuItem>
							<Payment />
							<span className='me-2'> بوابات الدفع</span>
						</MenuItem>
					</NavLink>
				</SubMenu>

				<NavLink className='menu-link' to='Support'>
					<MenuItem>
						<Support />
						<span className='me-2'> الدعم الفني</span>
					</MenuItem>
				</NavLink>

				{/** Setting Sub menu */}
				<SubMenu label=' الاعدادات' icon={<Setting />}>
					<NavLink className='sub-menu-link' to='MainInformation'>
						<MenuItem>
							<FaCircle style={{ width: '14px' }} />
							<span className='me-2'> البيانات الاساسية</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='MaintenanceMode'>
						<MenuItem>
							<FaCircle style={{ width: '14px' }} />
							<span
								className='me-2'
								onClick={() => {
									dispatch(openModal());
								}}
							>
								وضع الصيانة
							</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='Management'>
						<MenuItem>
							<FaCircle style={{ width: '14px' }} />
							<span className='me-2'> الإدارة و المستخدمين </span>
						</MenuItem>
					</NavLink>
				</SubMenu>

				<NavLink className='menu-link' to='Customer'>
					<MenuItem>
						<Clients />
						<span className='me-2'> العملاء</span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Report'>
					<MenuItem>
						<Reports />
						<span className='me-2'> التقارير</span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Home'>
					<MenuItem className='logout-tab'>
						<Logout />
						<span className='me-2'> تسجيل خروج</span>
					</MenuItem>
				</NavLink>
			</Menu>
		</Sidebar>
	);
};

export default SideBar;
