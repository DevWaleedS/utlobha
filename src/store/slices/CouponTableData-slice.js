import { createSlice } from '@reduxjs/toolkit';



const categoriesDataTable = [
	
	{
		id: '01',
		couponName: 'DEF12',
		couponType: 'مبلغ ثابت',
		expiryDate: '2022/Sep/10',
		percentage: ' 15',
		price: 4,
		status: 'فعال',
		opened: true,
		bgcolor: '#e0ffea',
		color: '#3ae374',
	},
	{
		id: '02',
		couponName: 'DEF12',
		couponType: '  نسبة مئوية ',
		expiryDate: '2022/Jun/20',
		percentage: ' 15',
		price: 4,
		status: 'منتهي',
		opened: false,
		bgcolor: '#ffeeee',
		color: '#ff3838',
	},
	{
		id: '03',
		couponName: 'DEF12',
		couponType: '  نسبة مئوية ',
		expiryDate: '2022/Oct/21',
		percentage: ' 15',
		price: 4,
		status: 'معطل',
		opened: false,
		bgcolor: '#ebebeb',
		color: '#a7a7a7',
	},
	{
		id: '04',
		couponName: 'DEF12',
		couponType: 'مبلغ ثابت',
		expiryDate: '2022/Nov/2',
		percentage: ' 15',
		price: 4,
		status: 'معطل',
		opened: false,
		bgcolor: '#ebebeb',
		color: '#a7a7a7',
	},
	{
		id: '05',
		couponName: 'DEF12',
		couponType: '  نسبة مئوية ',
		expiryDate: '2022/Dec/30',
		percentage: ' 15',
		price: 4,
		status: 'منتهي',
		opened: false,
		bgcolor: '#ffeeee',
		color: '#ff3838',
	},
	{
		id: '06',
		couponName: 'DEF12',
		couponType: 'مبلغ ثابت',
		expiryDate: '2022/Nov/2',
		percentage: ' 15',
		price: 4,
		status: 'فعال',
		opened: true,
		bgcolor: '#e0ffea',
		color: '#3ae374',
	},
	{
		id: '07',
		couponName: 'DEF12',
		couponType: '  نسبة مئوية ',
		expiryDate: '2022/Apr/3',
		percentage: ' 15',
		price: 4,
		status: 'فعال',
		opened: true,
		bgcolor: '#e0ffea',
		color: '#3ae374',
	},
	{
		id: '08',
		couponName: 'DEF12',
		couponType: '  نسبة مئوية ',
		expiryDate: '2022/Mar/23',
		percentage: ' 15',
		price: 4,
		status: 'معطل',
		opened: false,
		bgcolor: '#ebebeb',
		color: '#a7a7a7',
	},
	{
		id: '09',
		couponName: 'DEF12',
		couponType: 'مبلغ ثابت',
		expiryDate: '2022/Sep/10',
		percentage: ' 15',
		price: 4,
		status: 'فعال',
		opened: true,
		bgcolor: '#e0ffea',
		color: '#3ae374',
	},
	{
		id: '10',
		couponName: 'DEF12',
		couponType: '  نسبة مئوية ',
		expiryDate: '2022/Apr/3',
		percentage: ' 15',
		price: 4,
		status: 'فعال',
		opened: true,
		bgcolor: '#e0ffea',
		color: '#3ae374',
	},
	{
		id: '11',
		couponName: 'DEF12',
		couponType: 'مبلغ ثابت',
		expiryDate: '2022/Nov/2',
		percentage: ' 15',
		price: 4,
		status: 'معطل',
		opened: false,
		bgcolor: '#ebebeb',
		color: '#a7a7a7',
	},
	{
		id: '12',
		couponName: 'DEF12',
		couponType: '  نسبة مئوية ',
		expiryDate: '2022/Mar/23',
		percentage: ' 15',
		price: 4,
		status: 'معطل',
		opened: false,
		bgcolor: '#ebebeb',
		color: '#a7a7a7',
	},
	{
		id: '13',
		couponName: 'DEF12',
		couponType: 'مبلغ ثابت',
		expiryDate: '2022/Feb/2',
		percentage: ' 15',
		price: 4,
		status: 'فعال',
		opened: true,
		bgcolor: '#e0ffea',
		color: '#3ae374',
	},
	{
		id: '14',
		couponName: 'DEF12',
		couponType: '  نسبة مئوية ',
		expiryDate: '2022/Mar/23',
		percentage: ' 15',
		price: 4,
		status: 'فعال',
		opened: true,
		bgcolor: '#e0ffea',
		color: '#3ae374',
	},
	{
		id: '15',
		couponName: 'DEF12',
		couponType: 'مبلغ ثابت',
		expiryDate: '2022/Feb/25',
		percentage: ' 15',
		price: 4,
		status: 'فعال',
		opened: true,
		bgcolor: '#e0ffea',
		color: '#3ae374',
	},
	{
		id: '16',
		couponName: 'DEF12',
		couponType: 'مبلغ ثابت',
		expiryDate: '2022/Feb/2',
		percentage: ' 15',
		price: 4,
		status: 'فعال',
		opened: true,
		bgcolor: '#e0ffea',
		color: '#3ae374',
	},
];

// slices
const CouponTableDataSlice = createSlice({
	name: 'categoriesDataTable',
	initialState: categoriesDataTable,
	reducers: {},
});

export const {} = CouponTableDataSlice.actions;
export default CouponTableDataSlice.reducer;
