import React from "react";

interface AuthButtonProps {
  children: string;
  onCLick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const AuthButton = ({ children, onCLick }: AuthButtonProps) => {
  return (
    <button
      className="bg-sky-500 w-[100px]"
      onClick={(e) => {
        onCLick(e);
      }}
    >
      {children}
    </button>
  );
};

export default AuthButton;
