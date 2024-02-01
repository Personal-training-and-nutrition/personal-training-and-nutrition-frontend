import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISpecialist } from '../types/specialist';

export const initialState: ISpecialist = {
  isVisibleEducation: false,
  isVisibleExperience: false,
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
  },
});

export const { toggleVisibleExperience, toggleVisibleEducation } = specialistSlice.actions;

export default specialistSlice.reducer;
