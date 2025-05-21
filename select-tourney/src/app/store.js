import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { tournamentsReducer } from '../features/tournaments/tournamentsSlice';
import {userReducer} from '../features/user/userSlice';


export const store = configureStore({
  reducer: {
      tournaments: tournamentsReducer,
      user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});