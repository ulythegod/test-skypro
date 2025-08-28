import { useCallback, useState } from "react";
import { Link } from "react-router";
import { Button } from "flowbite-react";
import * as yup from "yup";

import { FormTextInput } from "../../shared/ui/forms";
import { FormWrapper } from "../../shared/ui/forms/form-wrapper";
import { CommonIcon } from "../../shared/ui/icons";
import { restoreDataValidationScheme } from "./scheme";
import type { RestorePasswordData, RestorePasswordDataError } from "./types";

export const RestorePasswordPage: React.FC = () => {
  const [restorePasswordData,
    setRestorePasswordData] = useState<RestorePasswordData>({
    password: "",
    repeatedPassword: ""
  });
  const [restorePasswordDataError,
    setRestorePasswordDataError] = useState<RestorePasswordDataError>({
    password: "",
    repeatedPassword: ""
  });

  const handleInputChange = useCallback((value: string, fieldCode: string) => {
    setRestorePasswordData((prevData: RestorePasswordData) => {
      return {
        ...prevData,
        [fieldCode]: value
      };
    });
  }, []);

  const handleRegisterButtonClicked = useCallback(() => {
    try {
      restoreDataValidationScheme.validateSync(restorePasswordData, {
        abortEarly: false
      });
      setRestorePasswordDataError({
        password: "",
        repeatedPassword: ""
      });
      //TODO: Когда появится бэк доделать регистрацию
    } catch (error) {
      const validationError = error as yup.ValidationError;
      const passwordError = validationError.inner.find((errorItem) => {
        return errorItem.path === "password";
      })?.message ?? "";
      const repeatedPasswordError = validationError.inner.find((errorItem) => {
        return errorItem.path === "repeatedPassword";
      })?.message ?? "";
    
      setRestorePasswordDataError({
        password: passwordError,
        repeatedPassword: repeatedPasswordError
      });
    };    
  }, [restorePasswordData]);

  return <FormWrapper>
    <form className="flex max-w-md flex-col gap-4">
      <CommonIcon src="/icon.png" alt="Логотип" />
      <FormTextInput
        id="password"
        title="Пароль"
        type="password"
        placeholder="Введите пароль"
        required={true}
        value={restorePasswordData.password}
        onChange={handleInputChange}
        error={restorePasswordDataError.password ?? ""}
      />
      <FormTextInput
        id="repeatedPassword"
        title="Повторите пароль"
        type="password"
        placeholder="Повторите пароль"
        required={true}
        value={restorePasswordData.repeatedPassword}
        onChange={handleInputChange}
        error={restorePasswordDataError.repeatedPassword ?? ""}
      />
      <Button
        type="button"
        onClick={handleRegisterButtonClicked}
      >
        Сохранить
      </Button>
      <span>
        Вспомнили пароль?
        <Link
          to="/"
          className="text-cyan-600 hover:underline dark:text-cyan-500"
        >
          {" Авторизоваться"}
        </Link>
      </span>
    </form>
  </FormWrapper>;
};
