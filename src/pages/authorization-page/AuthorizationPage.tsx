import type React from "react";
import { Button, Checkbox, Label } from "flowbite-react";
import { Link } from "react-router";
import { CommonIcon } from "../../shared/ui/icons";
import { FormTextInput } from "../../shared/ui/forms";
import { useCallback, useState, } from "react";
import type { AuthorizationData, AuthorizationDataError } from "./types";
import { authorizationDataValidationScheme } from "./schemes";
import * as yup from 'yup';

export const AuthorizationPage: React.FC = () => {
  const [authorizationData, setAuthorizationData] = useState<AuthorizationData>({
    email: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState<AuthorizationDataError>({
    email: "",
    password: "",
  });
  const [isRememberMe, setIsRememberMe] = useState<boolean>(false);

  const handleInputChange = useCallback((value: string, fieldCode: string) => {
    setAuthorizationData((prevData: AuthorizationData) => {
      return {
        ...prevData,
        [fieldCode]: value,
      }
    });
  }, []);

  const handleEnterButtonClicked = useCallback(() => {
    try {
      authorizationDataValidationScheme.validateSync(authorizationData, {
        abortEarly: false,
      });
      setValidationErrors({
        email: "",
        password: "",
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
        password: passwordError,
      });
    };    
  }, [authorizationData]);

  const handleRememberMeCheckbox = useCallback(() => {
    setIsRememberMe((prevIsRememberMe) => !prevIsRememberMe)
  }, []);

  return <div className="min-h-screen flex flex-col justify-center items-center p-4">
    <div className="w-full max-w-md space-y-8">
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
          <Checkbox id="remember" checked={isRememberMe} onChange={handleRememberMeCheckbox} />
          <Label htmlFor="remember">Запомнить меня</Label>
        </div>
        <Button type="button" onClick={handleEnterButtonClicked}>Войти</Button>
        <Link to="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
          Зарегестрироваться
        </Link>
      </form>
    </div>
  </div>;
}
