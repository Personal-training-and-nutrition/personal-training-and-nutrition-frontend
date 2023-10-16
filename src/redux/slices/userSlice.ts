import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
  id: number | null;
  accessToken: string | null;
  isLoggedIn: boolean;
  isSpecialist: boolean;
}

export const initialState: IUserState = {
  id: null,
  accessToken: null,
  isLoggedIn: false,
  isSpecialist: true,
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
    setIsSpecialist: (state, action: PayloadAction<boolean>) => {
      state.isSpecialist = action.payload;
    },
  },
});

export default userSlice.reducer;

export const { setAccessToken, setUserId, logout, setIsLoggedIn, setIsSpecialist } = userSlice.actions;
