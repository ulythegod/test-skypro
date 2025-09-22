export interface CreateUserTokenParams {
  email: string;
  password: string;
};

export interface CreateUserTokenResult {
  access: string;
  refresh: string;
};

export interface CreateUserParams {
  email: string;
  password: string;
};

export interface CreateUserResult {
  email: string;
  id: number;
};

export interface ActivateUserParams {
  uid: string;
  token: string;
};

export interface ActivateUserResult {
  uid: string;
  token: string;
};

export interface User {
  id: number;
  email: string;
  username: string;
}