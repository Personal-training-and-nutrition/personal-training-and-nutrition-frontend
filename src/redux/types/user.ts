export interface IUser {
  notes?: string;
  age?: number;
  id?: string;
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
  params?: [{
    id: number;
    weight?: number | null;
    height?: number | null;
    waist_size?: number | null;
    // created_at:  Date;
  }];
  specialist_id?: number | null;
  groups?: number[];
  user_permissions?: number[];
  specialist?: [{
    about?: string | null;
  }];
}

export interface IUserPassword {
  password: string;
}

export interface IUserEmail {
  email?: string;
}

export interface IUserResetEmail {
  new_email: string;
}

export interface IUserActivationCreate {
  uid: string;
  token: string;
}

export interface IUserResetPasswordConfirm {
  uid: string;
  token: string;
  new_password: string;
}

export interface IUserSetEmail {
  current_password: string;
  new_email: string;
}

export interface IUserSetPassword {
  new_password: string;
  re_new_password: string;
  current_password: string;
}

export type TMeUser = {
  password: string;
  id: number;
  email: string;
};
