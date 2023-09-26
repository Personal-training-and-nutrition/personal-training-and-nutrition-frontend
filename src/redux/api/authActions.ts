import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000';

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }: ILoginUser, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(`${BASE_URL}/api/auth/jwt/create`, { email, password }, config);
      localStorage.setItem('accesToken', data.access);
      localStorage.setItem('refreshToken', data.refresh);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
);
