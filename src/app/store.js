import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import infoReducer from '../features/infoSlice';
import idReducer from '../features/idSlice';
import rctReducer from '../features/rctSlice';
import giftReducer from '../features/giftSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    info: infoReducer,
    gift: giftReducer,
    rct: rctReducer,
    iD: idReducer,
  },
});
