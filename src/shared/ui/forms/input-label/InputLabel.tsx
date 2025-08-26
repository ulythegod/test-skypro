import { Label } from "flowbite-react";

import type { InputLabelProps } from "./types";

export const InputLabel: React.FC<InputLabelProps> = ({
  htmlFor,
  title,
  required
}) => {
  return <div className="mb-2 block">
    <Label htmlFor={htmlFor}>{title}</Label>
    {required && <Label color="failure">*</Label>}
  </div>;
};
