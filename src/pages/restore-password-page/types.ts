export interface RestorePasswordData {
  password: string;
  repeatedPassword: string;
};

export interface RestorePasswordDataError {
  password?: string;
  repeatedPassword?: string;
};
