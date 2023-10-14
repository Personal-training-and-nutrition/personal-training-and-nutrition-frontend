import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  id: number | null;
  accessToken: string | null;
  isLoggedIn: boolean;
}

export const initialState: IUserState = {
  id: null,
  accessToken: null,
  isLoggedIn: false,
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
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setAccessToken, setUserId, logout, setIsLoggedIn } = userSlice.actions;
