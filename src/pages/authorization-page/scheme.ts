import * as yup from "yup";

import { EMAIL_ERROR_MESSAGE, EMAIL_REGEX, PASSWORD_ERROR_MESSAGE, PASSWORD_REGEX } from "../../shared/consts";

export const authorizationDataValidationScheme = yup.object({
  email: yup.string().matches(EMAIL_REGEX, EMAIL_ERROR_MESSAGE),
  password: yup
    .string()
    .matches(
      PASSWORD_REGEX,
      PASSWORD_ERROR_MESSAGE
    )
});
