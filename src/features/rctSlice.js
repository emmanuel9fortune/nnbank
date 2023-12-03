import { createSlice } from '@reduxjs/toolkit';



export const rctSlice = createSlice({
  name: 'rct',
  initialState :{
    rct: null,
  },
  reducers: {
    rct: (state, action) => {
      state.rct = action.payload;
    },
  }
});

export const { rct } = rctSlice.actions;

export const selectrct = (state) => state.rct.rct;

export default rctSlice.reducer;
