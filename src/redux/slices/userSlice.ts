import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  user: IUser | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: IUserState = {
  user: null,
  accessToken: null,
  refreshToken: null,
};

const userSlice = createSlice({
  initialState,
  name: 'userSlice',
  reducers: {
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshToken = action.payload;
    },
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logout: () => initialState,
  },
});

export default userSlice.reducer;

export const { setAccessToken, setRefreshToken, setUser, logout } = userSlice.actions;
