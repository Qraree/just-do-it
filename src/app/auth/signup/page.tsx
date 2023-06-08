import React from "react";
import AuthLayout from "@/app/auth/AuthLayout";
import { AUTH_MODE } from "@/constants/auth";

const Page = () => {
  return <AuthLayout mode={AUTH_MODE.SIGNUP} />;
};

export default Page;
