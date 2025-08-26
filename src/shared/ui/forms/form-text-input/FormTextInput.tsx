import { Label, TextInput } from "flowbite-react";
import { InputLabel } from "../input-label";
import type { FormTextInputProps } from "./types";
import { useCallback, type ChangeEvent } from "react";

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
  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value, id);
  }, [id, onChange]);

  return <div>
    <InputLabel htmlFor={id} title={title} />
    <TextInput
      color={`${ error ? "failure" : ""}`}
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={handleInputChange}
    />
    {error && <Label color="failure">{error}</Label>}
  </div>;
};
