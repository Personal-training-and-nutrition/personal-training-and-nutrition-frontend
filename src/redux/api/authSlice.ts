import { createSlice } from '@reduxjs/toolkit';
import { userLogin } from './authActions';

const refreshToken = localStorage.getItem('refreshToken') || null;
const accessToken = localStorage.getItem('accessToken') || null;

interface AuthState {
  loading: boolean;
  userInfo: string | null;
  refreshToken: string;
  accessToken: string;
  error: string | null;
  success: boolean;
}

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
  success: false,
  accessToken,
  refreshToken,
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.accessToken = payload.access;
      state.refreshToken = payload.refresh;
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload as string;
    });
  },
});

export default authSlice.reducer;
