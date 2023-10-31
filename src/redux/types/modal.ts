export type TModal = {
  isOpen: boolean,
  modalId: TModalId ,
  tooltip: {
    title: string,
    subtitle: string,
    btnText: string,
    isTraining: boolean,
    link?: string | null,
    isIcons?: boolean
  }
}

type TModalId = 'modalAuth' | 'foggotModal' | 'registerModal' | 'resetPasswordModal' | 'tooltipModal' | 'changePassModal' | ''

export interface IModalAction  {
  modalId: TModalId,

  title?: string | null,
  subtitle?: string | null,
  btnText?: string | null,
  isTraining?: boolean ,
  link?: string | null,
  isIcons?: boolean
}