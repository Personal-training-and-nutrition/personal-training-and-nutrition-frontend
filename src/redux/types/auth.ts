interface IRegisterUser {
  email: string;
  password: string;
  re_password: string;
}

interface ILoginUser extends IUserEmail, IUserPassword {}

interface IRefreshToken {
  token: string;
}

interface IAuthO {
  access: string;
  refresh: string;
  user: string;
}
