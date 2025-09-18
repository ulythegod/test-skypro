export interface CreateAuthCreditalsProps {
  email: string,
  password: string,
};

export interface CreateAuthCreditalsResult {
  access: string,
  refresh: string,
};
