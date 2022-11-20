import { createSlice } from '@reduxjs/toolkit';
// import table images


const initialValueState = {
  isOpen: false,
}
// slices
const VideoModalSlice = createSlice({
	name: 'VideoModal',
	initialState: initialValueState,
	reducers: {
		openModal: (state, action) => {
			state.isOpen = true;
		},
		closeModal: (state, action) => {
			state.isOpen = false;
		},
	},
});

export const { openModal, closeModal } = VideoModalSlice.actions;
export default VideoModalSlice.reducer;
