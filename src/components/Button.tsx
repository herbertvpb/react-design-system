import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  asChild?: boolean;
}

export const Button = ({ children, asChild, disabled }: ButtonProps) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      disabled={disabled}
      className={clsx(
        'py-4 px-3 bg-cyan-500 rounded font-semibold text-sm-black w-full',
        'transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        'disabled:bg-gray-400 '
      )}
    >
      {children}
    </Component>
  );
};
