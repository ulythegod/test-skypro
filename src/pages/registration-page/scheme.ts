import * as yup from "yup";

import { EMAIL_REGEX, PASSWORD_REGEX } from "../../shared/consts";

export const registrationDataValidationScheme = yup.object({
  email: yup.string().matches(EMAIL_REGEX, "Email введен не верно"),
  password: yup
    .string()
    .matches(
      PASSWORD_REGEX,
      `Пароль не верный: 
      Пароль должен содержать минимум 8 символов, 
      включая заглавные и строчные буквы, цифру и 
      один из специальных символов: !@#$%^&*`
    ),
  repeatedPassword: yup.string()
    .required("Повторите пароль")
    .when("password", (password, schema) => {
      return schema.test({
        test: (repeatedPassword) => 
          password && repeatedPassword === password?.[0],
        message: "Пароли не совпадают"
      });
    })
});
