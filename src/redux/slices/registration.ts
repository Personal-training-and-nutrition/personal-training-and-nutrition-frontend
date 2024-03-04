import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {TRegistration, TUserInfo} from "../types/auth.ts";

const initialState: TRegistration = {
  isStatusSpecialist: true,
  role: '',
  direction: '',
  name: '',
  surname: '',
  email:'',
  password:'',
};

const registration = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    setStatus(state, action: PayloadAction<boolean>) {
      state.isStatusSpecialist = action.payload;
    },
    setRole(state, action: PayloadAction<string>) {
      state.direction = action.payload;
    },
    setUserInfo(state, action: PayloadAction<TUserInfo>) {
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.email = action.payload.email;
    },
    setPassword(state, action:PayloadAction<string>){
      state.password = action.payload;
    }
  },
});

export const selectStatus = (state: RootState) => state.landing;

export const {setStatus,setRole, setUserInfo, setPassword} = registration.actions;

export default registration.reducer;
