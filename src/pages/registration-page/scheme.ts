import * as yup from "yup";

import {
  EMAIL_ERROR_MESSAGE,
  EMAIL_REGEX,
  PASSWORD_ERROR_MESSAGE,
  PASSWORD_REGEX,
  REPEATED_PASSWORD_ERROR_MESSAGE,
  REPEATED_PASSWORD_REQUIRED_ERROR_MESSAGE
} from "../../shared/consts";

export const registrationDataValidationScheme = yup.object({
  email: yup.string().matches(EMAIL_REGEX, EMAIL_ERROR_MESSAGE),
  password: yup
    .string()
    .matches(
      PASSWORD_REGEX,
      PASSWORD_ERROR_MESSAGE
    ),
  repeatedPassword: yup.string()
    .required(REPEATED_PASSWORD_REQUIRED_ERROR_MESSAGE)
    .when("password", (password, schema) => {
      return schema.test({
        test: (repeatedPassword) => 
          password && repeatedPassword === password?.[0],
        message: REPEATED_PASSWORD_ERROR_MESSAGE
      });
    })
});
