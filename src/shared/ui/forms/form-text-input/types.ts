export interface FormTextInputProps {
  id: string;
  type: string;
  value?: string;
  placeholder?: string;
  title?: string;
  required?: boolean;
  error?: string;
  onChange: (value: string, fieldCode: string) => void;
}
