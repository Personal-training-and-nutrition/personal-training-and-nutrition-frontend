interface ICreateClient {
  first_name: string | null;
  last_name?: string | null;
  middle_name: string | null;
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
  diseases: string | null;
  exp_diets: string | null;
  exp_trainings: string | null;
  bad_habits: string | null;
  notes: string | null;
  food_preferences: string | null;
}

interface IClientRetrieve  {
  age: number | null;
  bad_habits: string | null;
  diets: [];
  diseases: string | null;
  email: string | null;
  exp_diets: string | null;
  exp_trainings: string | null;
  first_name: string | null;
  food_preferences: string | null;
  last_name: string| null;
  notes: string | null;
  params: {
    height: number | null;
    waist_size?: number | null;
    weight: number | null;
  };
  phone_number: string | null;
  trainings: [];
}