export interface IUser {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface IUserDetail {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: object;
}

export interface IUserResult {
  data: IUser[];
  limit: number;
  page: number;
  total: number;
}

export interface IUserLoginInfo {
  email: string;
  password: string;
}
