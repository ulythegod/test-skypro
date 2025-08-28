import type { FormWrapperProps } from "./types";

export const FormWrapper: React.FC<FormWrapperProps> = ({ children }) => {
  return <div className="min-h-screen flex flex-col justify-center items-center p-4">
    <div className="w-full max-w-md space-y-8">
      {children}
    </div>
  </div>;
};
