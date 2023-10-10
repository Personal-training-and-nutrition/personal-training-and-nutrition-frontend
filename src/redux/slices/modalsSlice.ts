import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TModal, TModalId } from "../types/modal";

const initialState: TModal = {
  isOpen: false,
  modalId: '',
}

const modalSlice = createSlice({
  initialState,
  name: "modal",
  reducers: {
    openModal: (state, action: PayloadAction<TModalId>) => {
      state.isOpen = true;
      state.modalId = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalId = '';
    },
  }
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer