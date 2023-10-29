import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IClientRetrieve } from '../types/clients';

type Client = {
  client: IClientRetrieve;
};

const initialState: Client = {
  client: {
    user: {
      id: '',
      first_name: null,
      last_name: null,
      middle_name: null,
      role: null,
      email: '',
      phone_number: null,
      dob: null,
      gender: null,
      params: {
        id: '',
        weight: null,
        height: null,
        waist_size: null,
        created_at: '',
      },
      capture: null,
    } ,
    age: null,
    specialist: null,
    diseases: null,
    exp_diets: null,
    exp_trainings: null,
    bad_habits: null,
    food_preferences: null,
    notes: null,
    diets: [],
    trainings: [],
  },
};

const clientSlice = createSlice({
  initialState,
  name: 'currentClient',
  reducers: {
    setCurrentClient: (state, action: PayloadAction<IClientRetrieve>) => {
      state.client = action.payload;
    },
  },
});

export const { setCurrentClient } = clientSlice.actions;

export default clientSlice.reducer;
