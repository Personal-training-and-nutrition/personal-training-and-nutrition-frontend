import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IModalAction, TModal } from "../types/modal";

const initialState: TModal = {
  isOpen: false,
  modalId: '',
  tooltip: {
    title: '',
    subtitle: '',
    btnText: '',
    isTraining: false,
    link: '',
    isIcons: false,
  }
}

const modalSlice = createSlice({
  initialState,
  name: "modal",
  reducers: {
    openModal: (state, action: PayloadAction<IModalAction>) => {
      const { modalId, isTraining, btnText, title, subtitle, link, isIcons  } = action.payload;
      state.isOpen = true;
      state.modalId = modalId;
      state.tooltip.btnText = btnText || '';
      state.tooltip.isTraining = isTraining || false;
      state.tooltip.subtitle = subtitle || '';
      state.tooltip.title = title || '';
      state.tooltip.link = link || '',
      state.tooltip.isIcons = isIcons || false;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalId = '';
      state.tooltip =  {
        title: '',
        subtitle: '',
        btnText: '',
        isTraining: false,
      }
    },
  }
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer