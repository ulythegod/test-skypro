export interface RegistrationData {
  email: string;
  password: string;
  repeatedPassword: string;
};

export interface RegistrationDataError {
  email?: string;
  password?: string;
  repeatedPassword?: string;
};
