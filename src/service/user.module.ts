export interface IUser {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface IUserResult {
  data: IUser;
  limit: number;
  page: number;
  total: number;
}

export interface IUserLoginInfo {
  email: string;
  password: string;
}
