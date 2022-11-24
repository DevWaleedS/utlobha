import { theme } from '../Theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
import TopBar from '../global/TopBar';
import SideBar from '../global/SideBar';

const RootLayout = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline>
				<div className='app'>
					<TopBar />
					<main className='content'>
						<div className='row'>
							<div className='col-lg-2 col-md-3 col-sm-3 col-3 sidebar-col'>
								<SideBar />
							</div>
							<div className='col-lg-10 col-md-9 col-sm-9 col-9 pages-content'>
								<div className='main-content'>
									<Outlet />
								</div>
							</div>
						</div>
					</main>
				</div>
			</CssBaseline>
		</ThemeProvider>
	);
};

export default RootLayout;
