import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  title: string;
}

function Button({ className = "", title, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`rounded px-4 py-2 bg-blue-500/80 text-white hover:bg-blue-600 transition-colors ${className}`}
    >
      {title}
    </button>
  );
}

export default Button;
