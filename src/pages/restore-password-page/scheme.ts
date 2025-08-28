import * as yup from "yup";

import {
  PASSWORD_ERROR_MESSAGE,
  PASSWORD_REGEX,
  REPEATED_PASSWORD_ERROR_MESSAGE,
  REPEATED_PASSWORD_REQUIRED_ERROR_MESSAGE
} from "../../shared/consts";

export const restoreDataValidationScheme = yup.object({
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
