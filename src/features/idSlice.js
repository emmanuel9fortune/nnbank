import { createSlice } from '@reduxjs/toolkit';



export const iDSlice = createSlice({
  name: 'iD',
  initialState :{
    iD: null,
  },
  reducers: {
    iD: (state, action) => {
      state.iD = action.payload;
    },
  }
});

export const { iD } = iDSlice.actions;

export const selectiD = (state) => state.iD.iD;

export default iDSlice.reducer;
