import React from 'react';
import { Link } from 'react-router-dom';

// MUI
import { Box, useTheme } from '@mui/material';
import { tokens } from '../Theme';
import { Avatar } from '@mui/material';

// images and icons
import avatarImage from '../data/Icons/person.jpg';
import notification from '../data/Icons/icon-Notification.svg';
import user01 from '../data/Icons/user-01.jpg';
import user02 from '../data/Icons/user-02.jpg';
import user03 from '../data/Icons/user-03.jpg';
import user04 from '../data/Icons/user-04.jpg';
import logo from '../data/Icons/logo.png';

// Icons
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { ReactComponent as LogOutIcon } from '../data/Icons/icon-24-sign out.svg';
import { ReactComponent as UserIcon } from '../data/Icons/icon-24-client.svg';

const TopBar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette);

	return (
		<Box className='top-bar' backgroundColor={colors.second[400]}>
			<nav className='navbar navbar-expand-lg ' dir='ltr'>
				<div className='container'>
					<div className='navbar-brand'>
						<img className=' img-fluid' src={logo} alt='logo' />
					</div>

					<div className='  ' id='navbarSupportedContent'>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-lg-center justify-content-between'>
							{/** Search-box */}
							<li className='nav-item search-box'>
								<input type='text' name='search' id='search' className='input' placeholder='أدخل كلمة البحث' />

								<AiOutlineSearch />
							</li>

							{/** notification */}
							<li className='nav-item notification '>
								<div className='nav-link dropdown' data-bs-toggle='dropdown' aria-expanded='false'>
									<img src={notification} alt='notification' />
								</div>
								<ul className='dropdown-menu notification-dropdown'>
									<div className='d-flex justify-content-between align-items-center mb-2 px-3 notification-header'>
										<span className='delete-notifications'>حذف الكل</span>
										<span className='notifications-title'>الاشعارات</span>
									</div>

									<li className=''>
										<div className='dropdown-item d-flex justify-content-end align-items-center' to='UserDetails'>
											<div className='me-2'>
												<span className='user-name'>أحمد عبد الرحمن</span>
												<span className='notification-data'>قام بتفعيل وسيلة دفع جديدة</span>
											</div>
											<img className='img-fluid ' src={user01} alt='أحمد عبد الرحمن' />
										</div>
									</li>
									<li className=''>
										<div className='dropdown-item d-flex justify-content-end align-items-center' to='UserDetails'>
											<div className='me-2'>
												<span className='user-name'> أسماء محمد</span>
												<span className='notification-data'>قام بتفعيل وسيلة دفع جديدة</span>
											</div>
											<img className='img-fluid ' src={user03} alt='  أسماء محمد' />
										</div>
									</li>
									<li className=''>
										<div className='dropdown-item d-flex justify-content-end align-items-center' to='UserDetails'>
											<div className='me-2'>
												<span className='user-name'> عبير عبد العزيز</span>
												<span className='notification-data'>قام بتفعيل وسيلة دفع جديدة</span>
											</div>
											<img className='img-fluid ' src={user04} alt='  عبير عبد العزيز' />
										</div>
									</li>
									<li className=''>
										<div className='dropdown-item d-flex justify-content-end align-items-center' to='UserDetails'>
											<div className='me-2'>
												<span className='user-name'> أحمد عبد الرحمن</span>
												<span className='notification-data'>قام بتفعيل وسيلة دفع جديدة</span>
											</div>
											<img className='img-fluid ' src={user02} alt='  أحمد عبد الرحمن' />
										</div>
									</li>
								</ul>
							</li>

							{/** avatar-box */}
							<ul className='nav-item avatar-box'>
								{/** dropdown */}
								<li className='nav-item dropdown d-flex align-items-end avatar-dropdown'>
									<Box className='nav-link  dropdown-wrapper' href='#' data-bs-toggle='dropdown' aria-expanded='false' color={colors.white[300]}>
										<div className='dropdown-title'>
											<span className='me-1 '> عمر الأحمد</span>
											<IoIosArrowDown />
										</div>
										{/** avatar img  */}
										<Avatar alt='avatarImage' src={avatarImage} />
									</Box>
									<ul className='dropdown-menu user-info-dropdown'>
										<li className=''>
											<Link className='dropdown-item d-flex justify-content-end align-items-center' to='UserDetails'>
												<span className='me-2'>حسابي</span>
												<UserIcon />
											</Link>
										</li>
										<li className=''>
											<Link className='dropdown-item d-flex justify-content-end align-items-center' to=''>
												<span className='me-2'>تسجيل الخروج</span>
												<LogOutIcon />
											</Link>
										</li>
									</ul>
								</li>
							</ul>
						</ul>
					</div>
				</div>
			</nav>
		</Box>
	);
};

export default TopBar;
