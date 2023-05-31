import React from "react";

interface InputAuthProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputAuth = ({ value, onChange }: InputAuthProps) => {
  return (
    <input
      type="text"
      className="border-2 border-gainsbiro-500 outline-sky-500 p-1 w-full mb-5 text-black"
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};

export default InputAuth;
