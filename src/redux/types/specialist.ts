export interface ISpecialist {
  isVisibleEducation: boolean;
  isVisibleExperience: boolean;
  isOpenService: boolean;
}

export interface IFeedbackCard {
  avatar: string;
  name: string;
  date: string;
  rating: string;
  text: string;
  arrFoto: string[];
  isHideText?: boolean;
}
