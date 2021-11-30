export interface IUser {
  id: number;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface IUserResult {
  data: IUser[];
  limit: number;
  page: number;
  total: number;
}
