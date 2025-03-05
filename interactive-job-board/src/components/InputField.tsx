import React from "react";

interface InputFieldProps {
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  value?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  required?: boolean;
  textarea?: boolean;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  required = false,
  textarea = false,
  className = "",
}) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && <label className="font-medium text-gray-700">{label}</label>}
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`border p-2 w-full rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          className={`border p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        />
      )}
    </div>
  );
};

export default InputField;
