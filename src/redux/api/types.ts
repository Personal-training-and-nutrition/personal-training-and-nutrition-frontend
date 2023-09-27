interface IUser {
  last_login?: string | null;
  email: string;
  first_name?: string | null;
  last_name?: string | null;
  middle_name?: string | null;
  password: string;
  phone_number?: string | null;
  capture?: string | null;
  is_staff?: boolean;
  is_superuser?: boolean;
  is_specialist?: boolean;
  is_active?: boolean;
  role?: number | null;
  gender?: number | null;
  params?: number | null;
  specialist_id?: number | null;
  groups?: number[];
  user_permissions?: number[];
}

interface IRegisterUser {
  email: string;
  password: string;
  re_password: string; // wat?
}

interface ILoginUser {
  email: string;
  password: string;
}

interface IRefreshToken {
  token: string;
}

type TResponse = {
  status: string;
  message: string;
};

type TTokensResponse = TResponse & {
  access: string;
  refresh: string;
};

type TRefreshResponse = TResponse & {
  access: string;
};
