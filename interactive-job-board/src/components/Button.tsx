import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  isLoading = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled || isLoading}
    aria-label={text}
    className={`
      bg-blue-500 hover:bg-blue-600 text-white font-medium 
      px-4 py-2 rounded-lg transition duration-300 
      disabled:bg-gray-400 disabled:cursor-not-allowed 
      flex items-center justify-center gap-2 ${className}
    `}
  >
    {isLoading ? (
      <>
        <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
        Processing...
      </>
    ) : (
      text
    )}
  </button>
);

export default Button;
