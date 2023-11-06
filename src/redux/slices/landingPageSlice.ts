import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type LandingPagePropsType = { isStatusSpecialist: boolean };

const initialState: LandingPagePropsType = {
  isStatusSpecialist: true,
};

const landingPageSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<boolean>) {
      state.isStatusSpecialist = action.payload;
    },
  },
});

export const selectStatus = (state: RootState) => state.landing;

export const { setStatus } = landingPageSlice.actions;

export default landingPageSlice.reducer;
