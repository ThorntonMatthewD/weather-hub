import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'

import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import weatherInfoReducer from '../features/weatherInfo/weatherInfoSlice';

import weatherInfoAPI from '../features/weatherInfo/weatherInfoAPI';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    weatherInfo: weatherInfoReducer,
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
