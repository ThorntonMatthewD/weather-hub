import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'

import userReducer from '../features/user/userSlice';
import weatherInfoAPI from '../features/weatherInfo/weatherInfoAPI';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [weatherInfoAPI.reducerPath]: weatherInfoAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherInfoAPI.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
