import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-1/6 h-1/5 bg-sky-500 text-white flex">{children}</div>
    </div>
  );
};

export default AuthLayout;
