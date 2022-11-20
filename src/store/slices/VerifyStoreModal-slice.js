import { createSlice } from '@reduxjs/toolkit';
// import table images

const initialValueState = {
	isOpen: false,
};
// slices
const VerifyModalSlice = createSlice({
	name: 'VerifyModalSlice',
	initialState: initialValueState,
	reducers: {
		openVerifyModal: (state, action) => {
			state.isOpen = true;
		},
		closeVerifyModal: (state, action) => {
			state.isOpen = false;
		},
	},
});

export const { openVerifyModal, closeVerifyModal } = VerifyModalSlice.actions;
export default VerifyModalSlice.reducer;
