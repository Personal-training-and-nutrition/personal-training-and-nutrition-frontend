import { IDietPlan } from './diet';
import { ITrainingPlan } from './training';

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

// export interface IEditClient {
//   user: {
//   first_name?: string | null;
//   last_name?: string | null;
//   middle_name?: string | null;
//   role?: string | null;
//   email: string | null;
//   phone_number: string | null;
//   dob?: string | null;
//   gender?: string | null;
//   params: {
//     weight?: number | null;
//     height?: number | null;
//     waist_size?: number | null;
//   };

// }
//   capture?: string | null;
//   diseases?: string | null;
//   exp_diets?: string | null;
//   exp_trainings?: string | null;
//   bad_habits?: string | null;
//   notes?: string | null;
//   food_preferences?: string | null;
//   specialist: string | null;
// }
export interface IEditClient {
  user: string | null,
  specialist: string | null;
  diseases?: string | null;
  exp_diets?: string | null;
  exp_trainings?: string | null;
  bad_habits?: string | null;
  notes?: string | null;
  food_preferences?: string | null;

}

export interface IClientRetrieve {
  user: {
    id: string | null;
    first_name: string | null;
    last_name?: string | null;
    middle_name?: string | null;
    role: string | null;
    email: string | null;
    phone_number: string | null;
    dob?: string | null;
    gender?: string | null;
    params: {
      id: string | null;
      weight?: number | null;
      height?: number | null;
      waist_size?: number | null;
      created_at: string | null;
    };
    capture: string | null;
  };
  specialist: string | null;
  diseases: string | null;
  exp_diets: string | null;
  exp_trainings: string | null;
  bad_habits: string | null;
  notes: string | null;
  food_preferences: string | null;
}

export type TClientListElement = {
  id: number;
  client_id: string;
  age: number;
  last_name: string;
  first_name: string;
  notes: string;
};
