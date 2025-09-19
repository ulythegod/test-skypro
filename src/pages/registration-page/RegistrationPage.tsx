import { useCallback, useState } from "react";
import { Link } from "react-router";
import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Button, Label } from "flowbite-react";
import * as yup from "yup";

import { type CreateUserResult,useCreateUserMutation } from "../../shared/api/auth";
import { FormTextInput } from "../../shared/ui/forms";
import { FormWrapper } from "../../shared/ui/forms/form-wrapper";
import { CommonIcon } from "../../shared/ui/icons";
import { registrationDataValidationScheme } from "./scheme";
import type { RegistrationData, RegistrationDataError } from "./types";

export const RegistrationPage: React.FC = () => {
  const [registrationData,
    setRegistrationData] = useState<RegistrationData>({
    email: "",
    password: "",
    repeatedPassword: ""
  });
  const [registrationDataError,
    setRegistrationDataError] = useState<RegistrationDataError>({
    email: "",
    password: "",
    repeatedPassword: ""
  });
  const [registrationError, setRegistrationError] = useState<string>("");
  const [registrationSuccessMessage, setRegistrationSuccessMessage] = useState<string>("");

  const [createUser] = useCreateUserMutation();

  const handleInputChange = useCallback((value: string, fieldCode: string) => {
    setRegistrationData((prevData: RegistrationData) => {
      return {
        ...prevData,
        [fieldCode]: value
      };
    });
  }, []);

  const handleRegisterButtonClicked = useCallback(() => {
    try {
      registrationDataValidationScheme.validateSync(registrationData, {
        abortEarly: false
      });
      setRegistrationDataError({
        email: "",
        password: "",
        repeatedPassword: ""
      });

      createUser({
        email: registrationData.email,
        password: registrationData.password
      }).then((result) => {
        if ((result?.data as CreateUserResult)) {
          setRegistrationSuccessMessage("Регистрация прошла успешно, проверьте свою почту.");
          setRegistrationError("");
        } else if ((result?.error as FetchBaseQueryError | SerializedError)) {
          setRegistrationError("Возникла ошибка при регистрации. Повторите попытку позже.");
        }
      });
    } catch (error) {
      const validationError = error as yup.ValidationError;
      const emailError = validationError.inner.find((errorItem) => {
        return errorItem.path === "email";
      })?.message ?? "";
      const passwordError = validationError.inner.find((errorItem) => {
        return errorItem.path === "password";
      })?.message ?? "";
      const repeatedPasswordError = validationError.inner.find((errorItem) => {
        return errorItem.path === "repeatedPassword";
      })?.message ?? "";
  
      setRegistrationDataError({
        email: emailError,
        password: passwordError,
        repeatedPassword: repeatedPasswordError
      });
    };    
  }, [createUser, registrationData]);

  return <FormWrapper>
    {!registrationSuccessMessage && <form className="flex max-w-md flex-col gap-4">
      <CommonIcon src="/icon.png" alt="Логотип" />
      <FormTextInput
        id="email"
        title="Email"
        type="text"
        placeholder="Введите email"
        required={true}
        value={registrationData.email}
        onChange={handleInputChange}
        error={registrationDataError.email ?? ""}
      />
      <FormTextInput
        id="password"
        title="Пароль"
        type="password"
        placeholder="Введите пароль"
        required={true}
        value={registrationData.password}
        onChange={handleInputChange}
        error={registrationDataError.password ?? ""}
      />
      <FormTextInput
        id="repeatedPassword"
        title="Повторите пароль"
        type="password"
        placeholder="Повторите пароль"
        required={true}
        value={registrationData.repeatedPassword}
        onChange={handleInputChange}
        error={registrationDataError.repeatedPassword ?? ""}
      />
      {registrationError && <Label color="failure">{registrationError}</Label>}
      <Button
        type="button"
        onClick={handleRegisterButtonClicked}
      >
        Зарегистрироваться
      </Button>
      <span>
        Есть аккаунт?
        <Link
          to="/"
          className="text-cyan-600 hover:underline dark:text-cyan-500"
        >
          {" Авторизоваться"}
        </Link>
      </span>
    </form>}
    {registrationSuccessMessage && <Label color="success">{registrationSuccessMessage}</Label>}
  </FormWrapper>;
};
