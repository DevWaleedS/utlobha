import React from 'react';
// import pro side bar from pro sidebar
import { ProSidebarProvider } from 'react-pro-sidebar';

// import React Router Dom
import ReactDOM from 'react-dom/client';

// Import these methods to create app routes
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

// use redux toolkit
import { Provider } from 'react-redux';
import { store } from './store/store';

// Import bootstrap files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// IMPORT ALL PAGES
import RootLayout from './pages/RootLayout';

// Import All Pages to create routes
import {
	Academy,
	Carts,
	Category,
	Coupon,
	Customer,
	ErrorPage,
	Home,
	Marketing,
	Offers,
	Orders,
	Pages,
	PaymentGetways,
	Products,
	Rating,
	Report,
	Seo,
	MainInformation,
	MaintenanceMode,
	Management,
	ShippingCompanies,
	SocialPages,
	StoreData,
	Support,
	Template,
	VerifyStore,
} from './pages';

// Import Nested Pages
import { OrderDetails, CourseDetails, EditCoupon, ClientData, EditUserPage, JobTitles } from './pages/nestedPages';

// INDEX CSS FILE
import './index.css';
import EditProductPage from './pages/nestedPages/EditProductPage';

// App Routes
const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'Home', element: <Home /> },

			{
				path: 'Academy',
				element: <Academy />,
			},
			{ path: 'Academy/CourseDetails', element: <CourseDetails /> },
			{
				path: 'Category',
				element: <Category />,
			},

			{
				path: 'Marketing',
				element: <Marketing />,
			},
			{
				path: 'Coupon',
				element: <Coupon />,
			},
			// Coupon details page nested page for Coupon page
			{
				path: 'Coupon/EditCoupon-:id',
				element: <EditCoupon />,
			},
			{
				path: 'Offers',
				element: <Offers />,
			},
			{
				path: 'Carts',
				element: <Carts />,
			},
			// ClientData page nested page for Carts page
			{
				path: 'Carts/ClientData-:id',
				element: <ClientData />,
			},
			{
				path: 'Seo',
				element: <Seo />,
			},

			{
				path: 'Orders',
				element: <Orders />,
			},
			// nested order page
			{
				path: 'Orders/OrderDetails',
				element: <OrderDetails />,
			},
			{
				path: 'Pages',
				element: <Pages />,
			},
			{
				path: 'Products',
				element: <Products />,
			},
			// nested Edit Product Page
			{
				path: 'Products/EditProduct-:id',
				element: <EditProductPage />,
			},

			{
				path: 'Rating',
				element: <Rating />,
			},

			{
				path: 'Support',
				element: <Support />,
			},
			{
				path: 'MainInformation',
				element: <MainInformation />,
			},
			{
				path: 'MaintenanceMode',
				element: <MaintenanceMode />,
			},
			{
				path: 'Management',
				element: <Management />,
			},
			// nested add users page
			{
				path: 'Management/user-:id',
				element: <EditUserPage />,
			},

			// nested job title page
			{
				path: 'Management/JobTitles',
				element: <JobTitles />,
			},
			{
				path: 'StoreData',
				element: <StoreData />,
			},
			{
				path: 'VerifyStore',
				element: <VerifyStore />,
			},
			{
				path: 'SocialPages',
				element: <SocialPages />,
			},
			{
				path: 'ShippingCompanies',
				element: <ShippingCompanies />,
			},
			{
				path: 'PaymentGetways',
				element: <PaymentGetways />,
			},
			{
				path: 'Template',
				element: <Template />,
			},
			{
				path: 'Customer',
				element: <Customer />,
			},
			{
				path: 'Report',
				element: <Report />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<ProSidebarProvider>
			<RouterProvider router={router} />
		</ProSidebarProvider>
	</Provider>
);
