import { IUserEmail, IUserPassword } from "./user";

export interface IRegisterUser {
  email: string;
  password: string;
  re_password: string;
}

export interface ILoginUser extends IUserEmail, IUserPassword {}

export interface IRefreshToken {
  token: string;
}

export interface IAuthO {
  access: string;
  refresh: string;
  user: string;
}
