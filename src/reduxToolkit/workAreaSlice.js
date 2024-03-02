// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   WorkArea: {
//     uploadedFiles: [],
//   },
// };

// export const workAreaSlice = createSlice({
//   name: 'WorkArea',
//   initialState,
//   reducers: {
//     addUploadedFile: (state, action) => {
//       state.uploadedFiles.push(action.payload);
//     },
//     removeUploadedFile: (state, action) => {
//       state.uploadedFiles = state.uploadedFiles.filter((file) => file.name !== action.payload);
//     },
//   },
// });

// export const { addUploadedFile, removeUploadedFile } = workAreaSlice.actions;

// export const selectUploadedFiles = (state) => state.WorkArea.uploadedFiles;

// export default workAreaSlice.reducer;
