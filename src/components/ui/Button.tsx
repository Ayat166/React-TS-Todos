import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  title: string;
  isLoading?: boolean;
}

function Button({ className = "", title, isLoading = false, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={`rounded px-4 py-2 bg-blue-500/80 text-white hover:bg-blue-600 transition-colors flex items-center justify-center disabled:bg-blue-500/50 disabled:cursor-not-allowed ${className}`}
      disabled={isLoading}
    >
      {isLoading ?
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      : title}
    </button>
  );
}

export default Button;
