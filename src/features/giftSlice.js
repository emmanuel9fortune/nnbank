import { createSlice } from '@reduxjs/toolkit';



export const giftSlice = createSlice({
  name: 'gift',
  initialState :{
    gift: null,
  },
  reducers: {
    gift: (state, action) => {
      state.gift = action.payload;
    },
  }
});

export const { gift } = giftSlice.actions;

export const selectgift = (state) => state.gift.gift;

export default giftSlice.reducer;
