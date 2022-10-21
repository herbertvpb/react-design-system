import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextFieldRootProps {
  children: ReactNode;
}

const TextFieldRoot = ({ children }: TextFieldRootProps) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 py-4 px-3",
        "rounded w-full bg-gray-800",
        "focus-within:ring-2 ring-cyan-300"
      )}
    >
      {children}
    </div>
  );
};

// const TextFieldIcon = () => {};

export interface TextFieldInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

const TextFieldInput = (props: TextFieldInputProps) => {
  return (
    <input
      {...props}
      className="outline-none bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400"
    />
  );
};

export const TextField = {
  Root: TextFieldRoot,
  Input: TextFieldInput,
};
