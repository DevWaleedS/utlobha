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
import { ReactComponent as MarketingCampain } from '../data/Icons/icon-24-marketing campain.svg';
import { ReactComponent as Rating } from '../data/Icons/icon-24-ratings.svg';
import { ReactComponent as PagesIcon } from '../data/Icons/icon-24-pages.svg';
import { ReactComponent as Academy } from '../data/Icons/icon-24-graduatioin.svg';
import { ReactComponent as BranchesAndWarehouses } from '../data/Icons/icon-24-Company Branch.svg';
import { ReactComponent as Template } from '../data/Icons/icon-24-template.svg';
import { ReactComponent as Info } from '../data/Icons/icon-24-info.svg';
import { ReactComponent as Social } from '../data/Icons/icon-24-social.svg';
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

const SideBar = () => {
	const dispatch = useDispatch(false);
	const dispatchVerifyModal = useDispatch(false);

	return (
		<Sidebar rtl={true} className='sidebar' style={{ height: '100%' }}>
			<Menu>
				<NavLink className='menu-link' to='Home'>
					<MenuItem>
						<Eye />
						<span className='me-2'>?????? ????????????</span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to=''>
					<MenuItem>
						<HomeImage />
						<span className='me-2'>???????????????? </span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Category'>
					<MenuItem>
						<Category />
						<span className='me-2'> ??????????????????</span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Products'>
					<MenuItem>
						<Products />
						<span className='me-2'> ????????????????</span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Orders'>
					<MenuItem>
						<Orders />
						<span className='me-2'>?????????????? </span>
					</MenuItem>
				</NavLink>

				{/** Markting Sub menu */}
				<SubMenu label='??????????????' icon={<Marketing />}>
					<NavLink className='sub-menu-link' to='Coupon'>
						<MenuItem>
							<Discoint />
							<span className='me-2'> ??????????????????</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='Offers'>
						<MenuItem>
							<Offer />
							<span className='me-2'> ???????????? ????????????</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='Carts'>
						<MenuItem>
							<BsCart />
							<span className='me-2'> ???????????? ????????????????</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='Seo'>
						<MenuItem>
							<Seo />
							<span className='me-2'> ?????????????? ??????????????????</span>
						</MenuItem>
					</NavLink>

					<NavLink
						className='sub-menu-link'
						to='Marketing'
						onClick={() => {
							dispatch(openModal());
						}}
					>
						<MenuItem>
							<Shoping />
							<span className='me-2'>?????????????? ?????? ????????????????</span>
						</MenuItem>
					</NavLink>
					<NavLink className='sub-menu-link disabled-menu-link' to='MarketingCampaign'>
						<MenuItem>
							<MarketingCampain />
							<span className='me-2'>???????????? ??????????????????</span>
						</MenuItem>
					</NavLink>
				</SubMenu>

				<NavLink className='menu-link' to='Rating'>
					<MenuItem>
						<Rating className='rating-icon' />
						<span className='me-2'>?????????????????? </span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Pages'>
					<MenuItem>
						<PagesIcon />
						<span className='me-2'> ??????????????</span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Academy'>
					<MenuItem>
						<Academy />
						<span className='me-2'> ????????????????????</span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Template'>
					<MenuItem>
						<Template />
						<span className='me-2'> ????????????</span>
					</MenuItem>
				</NavLink>

				{/** Store Sub menu */}
				<SubMenu label='???????????? ????????????' icon={<Info />}>
					<NavLink
						className='sub-menu-link'
						to='Home'
						onClick={() => {
							dispatchVerifyModal(openVerifyModal());
						}}
					>
						<MenuItem>
							<Verification />
							<span className='me-2'>?????????? ????????????</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='SocialPages'>
						<MenuItem>
							<Social />
							<span className='me-2'> ?????????? ??????????????</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='ShippingCompanies'>
						<MenuItem>
							<Delevray />
							<span className='me-2'> ?????????? ??????????</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='PaymentGetways'>
						<MenuItem>
							<Payment />
							<span className='me-2'> ???????????? ??????????</span>
						</MenuItem>
					</NavLink>
					<NavLink className='sub-menu-link disabled-menu-link' to='BranchesAndWarehouses'>
						<MenuItem>
							<BranchesAndWarehouses />
							<span className='me-2'>???????????? ?????????????????????? </span>
						</MenuItem>
					</NavLink>
				</SubMenu>

				<NavLink className='menu-link' to='Support'>
					<MenuItem>
						<Support />
						<span className='me-2'> ?????????? ??????????</span>
					</MenuItem>
				</NavLink>

				{/** Setting Sub menu */}
				<SubMenu label=' ??????????????????' icon={<Setting />}>
					<NavLink className='sub-menu-link' to='MainInformation'>
						<MenuItem>
							<FaCircle style={{ width: '14px' }} />
							<span className='me-2'> ???????????????? ????????????????</span>
						</MenuItem>
					</NavLink>

					<NavLink
						className='sub-menu-link'
						to='MaintenanceMode'
						onClick={() => {
							dispatch(openModal());
						}}
					>
						<MenuItem>
							<FaCircle style={{ width: '14px' }} />
							<span className='me-2'>?????? ??????????????</span>
						</MenuItem>
					</NavLink>

					<NavLink className='sub-menu-link' to='Management'>
						<MenuItem>
							<FaCircle style={{ width: '14px' }} />
							<span className='me-2'> ?????????????? ?? ???????????????????? </span>
						</MenuItem>
					</NavLink>
				</SubMenu>

				<NavLink className='menu-link' to='Customer'>
					<MenuItem>
						<Clients />
						<span className='me-2'> ??????????????</span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Report'>
					<MenuItem>
						<Reports />
						<span className='me-2'> ????????????????</span>
					</MenuItem>
				</NavLink>

				<NavLink className='menu-link' to='Home'>
					<MenuItem className='logout-tab'>
						<Logout />
						<span className='me-2'> ?????????? ????????</span>
					</MenuItem>
				</NavLink>
			</Menu>
		</Sidebar>
	);
};

export default SideBar;
