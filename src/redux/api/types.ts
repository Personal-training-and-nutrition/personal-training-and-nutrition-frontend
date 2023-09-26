interface IUser {
  first_name: string;
  last_name: string;
  email: string;
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
