import * as yup from 'yup';
import { EMAIL_REGEX, PASSWORD_REGEX } from './consts';

export const authorizationDataValidationScheme = yup.object({
  email: yup.string().matches(EMAIL_REGEX, "Email введен не верно."),
  password: yup.string().matches(PASSWORD_REGEX, "Пароль не верный."),
});
