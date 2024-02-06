import { createSlice } from '@reduxjs/toolkit';
import { ISpecialist } from '../types/specialist';

export const initialState: ISpecialist = {
  isVisibleEducation: false,
  isVisibleExperience: false,
  isOpenService: false,
};

const specialistSlice = createSlice({
  initialState,
  name: 'specialist',
  reducers: {
    toggleVisibleEducation: (state) => {
      state.isVisibleEducation = !state.isVisibleEducation;
    },
    toggleVisibleExperience: (state) => {
      state.isVisibleExperience = !state.isVisibleExperience;
    },
    toggleOpenService: (state) => {
      state.isOpenService = !state.isOpenService;
    },
  },
});

export const { toggleVisibleExperience, toggleVisibleEducation, toggleOpenService } = specialistSlice.actions;

export default specialistSlice.reducer;
