import { IDietPlan } from "./diet";
import { ITrainingPlan } from "./training";

export interface ICreateClient {
  user: {
    first_name: string | null;
    last_name?: string | null;
    middle_name?: string | null;
    role: string | null;
    email: string | null;
    phone_number: string | null;
    dob?: string | null;
    gender?: string | null;
    params: {
      weight?: number | null;
      height?: number | null;
      waist_size?: number | null;
    };
    capture: string | null;
  };
  diseases: string | null;
  exp_diets: string | null;
  exp_trainings: string | null;
  bad_habits: string | null;
  notes: string | null;
  food_preferences: string | null;
}

export interface IEditClient {
  first_name?: string | null;
  last_name?: string | null;
  middle_name?: string | null;
  role?: string | null;
  email: string | null;
  phone_number: string | null;
  dob?: string | null;
  gender?: string | null;
  params: {
    weight?: number | null;
    height?: number | null;
    waist_size?: number | null;
  };
  capture?: string | null;
  diseases?: string | null;
  exp_diets?: string | null;
  exp_trainings?: string | null;
  bad_habits?: string | null;
  notes?: string | null;
  food_preferences?: string | null;
}

export interface IClientRetrieve {
  age: number | null;
  bad_habits: string | null;
  diets: IDietPlan[];
  diseases: string | null;
  exp_diets: string | null;
  exp_trainings: string | null;
  food_preferences: string | null;
  notes: string | null;
  trainings: ITrainingPlan[];
  user: {
    email: string;
    first_name: string | null;
    last_name: string | null;
    dob: string | null;
    params: {
      height?: number | null;
      waist_size?: number | null;
      weight?: number | null;
    };
    phone_number: string | null;
    id: string;
  }
}

export type TClientListElement = {
  id: number;
  client_id: string;
  age: number;
  last_name: string;
  first_name: string;
  notes: string;
};
