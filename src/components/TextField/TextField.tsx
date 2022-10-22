import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

export interface TextFieldRootProps {
  children: ReactNode;
}

const TextFieldRoot = ({ children }: TextFieldRootProps) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 py-4 px-3 h-12",
        "rounded w-full bg-gray-800",
        "focus-within:ring-2 ring-cyan-300"
      )}
    >
      {children}
    </div>
  );
};

TextFieldRoot.displayName = 'TextField.Root';

export interface TextFieldIconProps {
  children: ReactNode;
}

const TextFieldIcon = ({ children }: TextFieldIconProps) => {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
};

TextFieldIcon.displayName = 'TextField.Icon';

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

TextFieldInput.displayName = 'TextField.Input';

export const TextField = {
  Root: TextFieldRoot,
  Input: TextFieldInput,
  Icon: TextFieldIcon,
};
