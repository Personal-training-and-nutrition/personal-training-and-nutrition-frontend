export interface IUser {
  notes?: string;
  age?: number;
  id?: number;
  last_login?: string | null;
  email?: string;
  first_name?: string | null;
  last_name?: string | null;
  middle_name?: string | null;
  dob?: string | null;
  password?: string;
  phone_number?: string | null;
  capture?: string | null;
  is_staff?: boolean;
  is_superuser?: boolean;
  is_specialist?: boolean;
  is_active?: boolean;
  role?: string | null;
  gender?: string | null;
  params?: {
    weight?: number | null,
    height?: number | null
  };
  specialist_id?: number | null;
  groups?: number[];
  user_permissions?: number[];
  specialist?: {
    about?: string;
  }
}

interface IUserPassword {
  password: string;
}

interface IUserEmail {
  email?: string;
}

interface IUserResetEmail {
  new_email: string;
}

interface IUserActivationCreate {
  uid: string;
  token: string;
}

interface IUserResetPasswordConfirm {
  uid: string;
  token: string;
  new_password: string;
}

interface IUserSetEmail {
  current_password: string;
  new_email: string;
}

interface IUserSetPassword {
  new_password: string;
  re_new_password: string;
  current_password: string;
}

type TMeUser = {
  password: string;
  id: number;
  email: string;
};
