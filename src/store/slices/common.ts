import { createSlice } from '@reduxjs/toolkit';

const initialState: Record<string, unknown> = {};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setCommonState: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { setCommonState } = commonSlice.actions;
export default commonSlice.reducer;
