import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../types/user';

type Client = {
  client: IUser;
};

const initialState: Client = {
  client: {},
};

const clientSlice = createSlice({
  initialState,
  name: 'currentClient',
  reducers: {
    setCurrentClient: (state, action: PayloadAction<IUser>) => {
      state.client = action.payload;
    },
  },
});

export const { setCurrentClient } = clientSlice.actions;

export default clientSlice.reducer;
