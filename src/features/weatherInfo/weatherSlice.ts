import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WeatherInfoState {
  loadingStatus: 'idle' | 'loading' | 'failed';
};

const initialState: WeatherInfoState = {
  loadingStatus: 'idle'
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLoadingStatus: (state, action: PayloadAction<'idle' | 'loading' | 'failed'>) => {
      state.loadingStatus = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase("user/setZipCode", (state) => {
        console.log("Action from another reducer was detected.")
      })
  },
});

export const { setLoadingStatus } = weatherSlice.actions;

export default weatherSlice.reducer;
