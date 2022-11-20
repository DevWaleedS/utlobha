import React from 'react';

import { Box, Divider, IconButton, Menu, TextField, useTheme } from '@mui/material';

import { tokens } from '../Theme';
import { Avatar } from '@mui/material';



// images
import avatarImage from '../data/Icons/person.jpg';
import notification from '../data/Icons/icon-Notification.svg';

import logo from '../data/Icons/logo.png';
import { Link } from 'react-router-dom';

// Icons
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';

const TopBar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette);

	return (
		<Box className='' backgroundColor={colors.second[400]}>
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
							<li className='nav-item notification'>
								<a className='nav-link' href=' #'>
									<img src={notification} alt='notification' />
								</a>
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
									<ul className='dropdown-menu'>
										<li>
											<Link className='dropdown-item' to='_'>
												Action
											</Link>
										</li>
										<li>
											<Link className='dropdown-item' to='_'>
												Another action
											</Link>
										</li>

										<li>
											<Link className='dropdown-item' to='_'>
												Something else here
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
