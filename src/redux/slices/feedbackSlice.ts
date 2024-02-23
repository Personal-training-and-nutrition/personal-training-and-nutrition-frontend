import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IFeedbackSliceState, SortType } from '../types/feedback';

export const initialState: IFeedbackSliceState = {
  isOpen: false,
  sort: { name: 'Сортировка' },
};

const feedbackSlice = createSlice({
  initialState,
  name: 'feedbackSlice',
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    toggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
    setSort: (state, action: PayloadAction<SortType>) => {
      state.sort = action.payload;
    },
  },
});

export default feedbackSlice.reducer;

export const { setOpen, setSort, toggleOpen } = feedbackSlice.actions;
