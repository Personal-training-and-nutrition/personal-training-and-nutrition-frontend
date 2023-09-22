import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type LandingPagePropsType = { isStatusSpecialist: boolean };

const initialState: LandingPagePropsType = {
  isStatusSpecialist: true,
};

const LandingPageSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<boolean>) {
      state.isStatusSpecialist = action.payload;
    },
  },
});

export const selectStatus = (state: RootState) => state.landing;

export const { setStatus } = LandingPageSlice.actions;

export default LandingPageSlice.reducer;
