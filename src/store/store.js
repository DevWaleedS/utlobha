import { configureStore } from '@reduxjs/toolkit';
import DetailsSlice from './slices/Details.slice';
import OrdersTablesDataSlice from './slices/OrdersTable-slice';
import salesProductsDataSlice from './slices/Products-sales-slice';
import CategoriesTablesDataSlice from './slices/CategoryTable-slice';
import ordersDetails from './slices/OdersDetails-slice';
import BigOrdersTableDataSlice from './slices/BigOrdersTableData-slice';
import BigProductsTableDataSlice from './slices/BigProductsTableData-slice';
import CouponTableDataSlice from './slices/CouponTableData-slice';
import CartsTablesDataSlice from './slices/CartsTableData-slice';
import VideoModalSlice from './slices/VideoModal-slice';
import PagesTableDataSlice from './slices/PagesTable-slice';
import VerifyStoreModalSlice from './slices/VerifyStoreModal-slice';
import supportTablesDataSlice from './slices/SupportTableData-slice';
import CustomerTableDataSlice from './slices/CustomerTableData-slice';
import ManagementTableDataSlice from './slices/UserAndManagementTable-slice.js';
import customerDataModalSlice from './slices/CustomerDataModal-slice';
import EditProductPageModalSlice from './slices/EditProductPage-slice';
import EditCategoryPageSlice from './slices/EditCategoryPage-slice';
import AddNewUserSlice from './slices/AddNewUser-slice';


export const store = configureStore({
	reducer: {
		details: DetailsSlice,
		ordersTablesData: OrdersTablesDataSlice,
		salesTablesData: salesProductsDataSlice,
		CategoriesTablesData: CategoriesTablesDataSlice,
		ordersDetails: ordersDetails,
		BigOrdersTableData: BigOrdersTableDataSlice,
		BigProductsTableData: BigProductsTableDataSlice,
		CouponTableData: CouponTableDataSlice,
		CartsTablesData: CartsTablesDataSlice,
		VideoModal: VideoModalSlice,
		PagesTableData: PagesTableDataSlice,
		VerifyModal: VerifyStoreModalSlice,
		supportTablesData: supportTablesDataSlice,
		CustomerTableData: CustomerTableDataSlice,
		ManagementTableData: ManagementTableDataSlice,
		customerDataModal: customerDataModalSlice,
		editProductPageModal: EditProductPageModalSlice,
		editCategoryPageModal: EditCategoryPageSlice,
		AddNewUserModal: AddNewUserSlice,

	},
});
