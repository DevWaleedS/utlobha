import { createSlice } from '@reduxjs/toolkit';

// import table image
import shose from '../../data/Icons/image shose.png';
import carImage from '../../data/Icons/image car.png';
import editIcon from '../../data/Icons/editt 2.svg';

const categoriesDataTable = [
	{
		productNumber: '01',
		idNumbers: 9586,
		productName: 'جوالات',
		subNumber: 4,
		subCategories: { subCateOne: 'سامسونج', subCateTow: 'سوني', subCateThree: 'ايفون' },
		productImg: shose,
		editIcon: editIcon,
		opened: false,
	},
	{
		productNumber: '02',
		idNumbers: 9586,
		productName: 'اكسسوارات',
		subNumber: 4,
		subCategories: { subCateOne: 'سماعات', subCateTow: 'شاحن', subCateThree: 'ايفون' },
		productImg: carImage,
		editIcon: editIcon,
		opened: true,
	},
	{
		productNumber: '03',
		idNumbers: 996,
		productName: 'لابتوتب',
		subNumber: 6,
		subCategories: { subCateOne: 'HP', subCateTow: 'DELL', subCateThree: 'LENOVO' },
		productImg: shose,
		editIcon: editIcon,
		opened: true,
	},
	{
		productNumber: '04',
		idNumbers: 186,
		productName: 'جوالات',
		subNumber: 12,
		subCategories: { subCateOne: 'سامسونج', subCateTow: 'سوني', subCateThree: 'ايفون' },
		productImg: carImage,
		editIcon: editIcon,
		opened: false,
	},
	{
		productNumber: '05',
		idNumbers: 9586,
		productName: 'لابتوتب',
		subNumber: 6,
		subCategories: { subCateOne: 'HP', subCateTow: 'DELL', subCateThree: 'LENOVO' },
		productImg: shose,
		editIcon: editIcon,
		opened: true,
	},
	{
		productNumber: '06',
		idNumbers: 9586,
		productName: 'اكسسوارات',
		subNumber: 4,
		subCategories: { subCateOne: 'سامسونج', subCateTow: 'سوني', subCateThree: 'ايفون' },
		productImg: shose,
		editIcon: editIcon,
		opened: true,
	},
	{
		productNumber: '07',
		idNumbers: 9586,
		productName: 'اكسسوارات',
		subNumber: 4,
		subCategories: { subCateOne: 'سامسونج', subCateTow: 'سوني', subCateThree: 'ايفون' },
		productImg: shose,
		editIcon: editIcon,
		opened: true,
	},
	{
		productNumber: '08',
		idNumbers: 9586,
		productName: 'لابتوتب',
		subNumber: 6,
		subCategories: { subCateOne: 'HP', subCateTow: 'DELL', subCateThree: 'LENOVO' },
		productImg: shose,
		editIcon: editIcon,
		opened: true,
	},
	{
		productNumber: '09',
		idNumbers: 9586,
		productName: 'اكسسوارات',
		subNumber: 4,
		subCategories: { subCateOne: 'سامسونج', subCateTow: 'سوني', subCateThree: 'ايفون' },
		productImg: shose,
		editIcon: editIcon,
		opened: true,
	},
	{
		productNumber: '10',
		idNumbers: 9586,
		productName: 'اكسسوارات',
		subNumber: 4,
		subCategories: { subCateOne: 'سامسونج', subCateTow: 'سوني', subCateThree: 'ايفون' },
		productImg: shose,
		editIcon: editIcon,
		opened: true,
	},
	{
		productNumber: '11',
		idNumbers: 9586,
		productName: 'لابتوتب',
		subNumber: 6,
		subCategories: { subCateOne: 'HP', subCateTow: 'DELL', subCateThree: 'LENOVO' },
		productImg: shose,
		editIcon: editIcon,
		opened: true,
	},
	{
		productNumber: '12',
		idNumbers: 9586,
		productName: 'اكسسوارات',
		subNumber: 4,
		subCategories: { subCateOne: 'سامسونج', subCateTow: 'سوني', subCateThree: 'ايفون' },
		productImg: shose,
		editIcon: editIcon,
		opened: true,
	},
	{
		productNumber: '13',
		idNumbers: 9586,
		productName: 'اكسسوارات',
		subNumber: 4,
		subCategories: { subCateOne: 'سامسونج', subCateTow: 'سوني', subCateThree: 'ايفون' },
		productImg: shose,
		editIcon: editIcon,
		opened: true,
	},
	{
		productNumber: '14',
		idNumbers: 9586,
		productName: 'اكسسوارات',
		subNumber: 4,
		subCategories: { subCateOne: 'سامسونج', subCateTow: 'سوني', subCateThree: 'ايفون' },
		productImg: shose,
		editIcon: editIcon,
		opened: true,
	},
	{
		productNumber: '15',
		idNumbers: 9586,
		productName: 'لابتوتب',
		subNumber: 6,
		subCategories: { subCateOne: 'HP', subCateTow: 'DELL', subCateThree: 'LENOVO' },
		productImg: shose,
		editIcon: editIcon,
		opened: true,
	},
	{
		productNumber: '16',
		idNumbers: 9586,
		productName: 'اكسسوارات',
		subNumber: 4,
		subCategories: { subCateOne: 'سامسونج', subCateTow: 'سوني', subCateThree: 'ايفون' },
		productImg: shose,
		editIcon: editIcon,
		opened: true,
	},
];

// slices
const CategoriesTablesDataSlice = createSlice({
	name: 'categoriesDataTable',
	initialState: categoriesDataTable,
	reducers: {},
});

export const {} = CategoriesTablesDataSlice.actions;
export default CategoriesTablesDataSlice.reducer;