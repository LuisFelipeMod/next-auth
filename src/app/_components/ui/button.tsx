import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className?: string;
};

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`bg-slate-700 text-white rounded-2xl px-4 py-2 hover:bg-slate-800 transition ${className}`}
    >
      {children}
    </button>
  );
}
