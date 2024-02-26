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

export interface IActivity {
  mesto: string;
  period: string;
}
export interface IResume {
  title: string;
  subtitle?: string;
  activity: IActivity[];
  isVisible: boolean;
  onClick: () => void;
}
