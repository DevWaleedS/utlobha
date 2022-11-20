import { createSlice } from '@reduxjs/toolkit';

// import table image
import person from '../../data/Icons/person.jpg';

const ordersDataTable = [
	{
		id: '01',
		number: ' 0052',
		icon: person,
		name: 'أسيل عبد الرحمن',
		stats: ' قيد التنفيذ',
		location: 'الرياض',
		price: 12,
		total: 84,

		bgColor: '#d4ebf7',
		color: '#0077ff',
	},
	{
		id: '02',
		number: ' 0052',
		icon: person,
		name: '  خالد الأحمدي',
		stats: '  بانتظار الدفع',
		location: 'الرياض',
		price: 12,
		total: 84,

		bgColor: '#ffc5001c',
		color: '#fae100',
	},

	{
		id: '03',
		number: ' 0052',
		icon: person,
		name: '  ولاء محمد المحمدي',
		stats: ' قيد المراجعة',
		location: 'الرياض',
		price: 12,
		total: 84,

		bgColor: '#ffecd1c7',
		color: '#ff9f1a',
	},
	{
		id: '04',
		number: ' 0052',
		icon: person,
		name: 'أسيل عبد الرحمن',
		stats: ' قيد التنفيذ',
		location: 'الرياض',
		price: 12,
		total: 84,

		bgColor: '#d8f9e3',
		color: '#3ae374',
	},
	{
		id: '05',
		number: ' 0052',
		icon: person,
		name: '     محمود ابراهيم',
		stats: '   جاري التوصيل',
		location: 'الرياض',
		price: 12,
		total: 84,

		bgColor: '#b29eff36',
		color: '#ab1aff',
	},
];

// slices
const BigOrdersTableDataSlice = createSlice({
	name: 'ordersDataTable',
	initialState: ordersDataTable,
	reducers: {},
});

export const {} = BigOrdersTableDataSlice.actions;
export default BigOrdersTableDataSlice.reducer;
