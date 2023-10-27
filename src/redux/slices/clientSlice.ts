import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IClientRetrieve } from '../types/clients';

type Client = {
  client: IClientRetrieve;
};

const initialState: Client = {
  client: {
    age: null,
    bad_habits: null,
    diets: [],
    diseases: null,
    exp_diets: null,
    exp_trainings: null,
    food_preferences: null,
    notes: null,
    trainings: [],
    user: {
      email: '',
      first_name: null,
      last_name: null,
      dob: null,
      params: {
        height: undefined,
        waist_size: undefined,
        weight: undefined
      },
      phone_number: null,
      id: ''
    }
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
