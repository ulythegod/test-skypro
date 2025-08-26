import { useCallback, useState } from "react";
import { Link } from "react-router";
import { Button } from "flowbite-react";
import * as yup from "yup";

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
        password: ""
      });
      //TODO: Когда появится бэк доделать регистрацию
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
  }, [registrationData]);

  return <FormWrapper>
    <form className="flex max-w-md flex-col gap-4">
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
      <Button
        type="button"
        onClick={handleRegisterButtonClicked}
      >
        Зарегестрироваться
      </Button>
      <span>
        Есть аккаунт? 
        <Link
          to="/"
          className="text-cyan-600 hover:underline dark:text-cyan-500"
        >
          Авторизоваться
        </Link>
      </span>
    </form>
  </FormWrapper>;
};
