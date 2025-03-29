import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  type?: string;
  name: string;
  placeholder?: string;
  className?: string;
};

export function Input({
  type,
  name,
  placeholder,
  className,
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      type={type ?? "text"}
      name={name}
      placeholder={placeholder ?? ""}
      className={`w-full p-2 mt-2 border rounded bg-neutral-200 text-neutral-800 ${className}`}
    />
  );
}
