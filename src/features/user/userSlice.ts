import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  zipCode: string
};

const initialState: UserState = {
  zipCode: "26273"
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setZipCode: (state, action: PayloadAction<string>) => {
      state.zipCode = action.payload
    }
  }
});

export const { setZipCode } = userSlice.actions;

export const selectZipCode = (state: RootState) => state.user.zipCode;

export default userSlice.reducer;
