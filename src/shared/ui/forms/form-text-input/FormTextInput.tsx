import { type ChangeEvent,useCallback, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { Button, Label, TextInput } from "flowbite-react";

import { InputLabel } from "../input-label";
import type { FormTextInputProps } from "./types";

export const FormTextInput: React.FC<FormTextInputProps> = ({
  id,
  type,
  value,
  placeholder,
  title,
  required,
  error,
  onChange
}) => {
  const [showPassword,
    setShowPassword] = useState<boolean>(false);
  const inputType = type === "password" && showPassword ? "text" : type;

  const handleChangePasswordVisibility = useCallback(() => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  }, []);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value, id);
    }, [id, onChange]);

  return <div className="relative">
    <InputLabel htmlFor={id} title={title} />
    <TextInput
      color={`${ error ? "failure" : ""}`}
      id={id}
      type={inputType}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={handleInputChange}
      className={type === "password" ? "pr-12" : ""}
    />
    {error && <Label color="failure">{error}</Label>}
    {
      type === "password" && <Button 
        type="button"
        onClick={handleChangePasswordVisibility}
        className="absolute right-2 top-10 h-8 w-8 !p-1.5 bg-transparent hover:bg-transparent dark:hover:bg-transparent"
        aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
      >
        {
          showPassword ?
            <AiFillEye className="w-5 h-5 text-gray-600 dark:text-gray-400" /> :
            <AiFillEyeInvisible className="w-5 h-5 text-gray-600 dark:text-gray-400" /> 
        }
      </Button>
    }
  </div>;
};
