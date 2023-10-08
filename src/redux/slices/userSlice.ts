import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  id: number | null;
  accessToken: string | null;
}

export const initialState: IUserState = {
  id: null,
  accessToken: null,
};

const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setUserId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    logout: () => initialState,
  },
});

export default userSlice.reducer;

export const { setAccessToken, setUserId, logout } = userSlice.actions;
