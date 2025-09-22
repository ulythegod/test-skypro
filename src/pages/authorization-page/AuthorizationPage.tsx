import type React from "react";
import { useCallback, useState } from "react";
import { Link } from "react-router";
import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { Button, Checkbox, Label } from "flowbite-react";
import * as yup from "yup";

import { type CreateUserTokenResult,useCreateUserTokenMutation } from "../../shared/api/auth";
import { FormTextInput } from "../../shared/ui/forms";
import { FormWrapper } from "../../shared/ui/forms/form-wrapper";
import { CommonIcon } from "../../shared/ui/icons";
import { authorizationDataValidationScheme } from "./scheme";
import type { AuthorizationData, AuthorizationDataError } from "./types";

export const AuthorizationPage: React.FC = () => {
  const [authorizationData,
    setAuthorizationData] = useState<AuthorizationData>({
    email: "",
    password: ""
  });
  const [validationErrors,
    setValidationErrors] = useState<AuthorizationDataError>({
    email: "",
    password: ""
  });
  const [isRememberMe,
    setIsRememberMe] = useState<boolean>(false);
  const [authorizationError, setAuthorizationError] = useState<string>("");

  const [authorizeUser] = useCreateUserTokenMutation();

  const handleInputChange = useCallback((value: string, fieldCode: string) => {
    setAuthorizationData((prevData: AuthorizationData) => {
      return {
        ...prevData,
        [fieldCode]: value
      };
    });
  }, []);

  const handleEnterButtonClicked = useCallback(() => {
    try {
      authorizationDataValidationScheme.validateSync(authorizationData, {
        abortEarly: false
      });
      setValidationErrors({
        email: "",
        password: ""
      });
      
      authorizeUser(authorizationData).then((result) => {
        if ((result?.data as CreateUserTokenResult)) { 
          sessionStorage.setItem("access", result?.data?.access ?? "");         
          sessionStorage.setItem("refresh", result?.data?.refresh ?? "");         
          setAuthorizationError("");
        } else if ((result?.error as FetchBaseQueryError | SerializedError)) {
          setAuthorizationError("Возникла ошибка при авторизации. Повторите попытку позже.");
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

      setValidationErrors({
        email: emailError,
        password: passwordError
      });
    };    
  }, [authorizationData, authorizeUser]);

  const handleRememberMeCheckbox = useCallback(() => {
    setIsRememberMe((prevIsRememberMe) => !prevIsRememberMe);
  }, []);

  return <FormWrapper>
    <form className="flex max-w-md flex-col gap-4">
      <CommonIcon src="/icon.png" alt="Логотип" />
      <FormTextInput
        id="email"
        title="Email"
        type="text"
        placeholder="Введите email"
        required={true}
        value={authorizationData.email}
        onChange={handleInputChange}
        error={validationErrors.email ?? ""}
      />
      <FormTextInput
        id="password"
        title="Пароль"
        type="password"
        placeholder="Введите пароль"
        required={true}
        value={authorizationData.password}
        onChange={handleInputChange}
        error={validationErrors.password ?? ""}
      />
      <Link to="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
        Забыли пароль?
      </Link>
      <div className="flex items-center gap-2">
        <Checkbox
          id="remember"
          checked={isRememberMe}
          onChange={handleRememberMeCheckbox}
        />
        <Label htmlFor="remember">Запомнить меня</Label>
      </div>
      {authorizationError && <Label color="failure">{authorizationError}</Label>}
      <Button type="button" onClick={handleEnterButtonClicked}>Войти</Button>
      <span>
        Нет аккаунта? 
        <Link
          to="/register"
          className="text-cyan-600 hover:underline dark:text-cyan-500"
        >
          {" Зарегистрироваться"}
        </Link>
      </span>
    </form>
  </FormWrapper>;
};
