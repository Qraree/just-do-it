import React from "react";
import AuthLayout from "@/app/auth/AuthLayout";
import NavbarLayout from "@/components/UI/NavbarLayout";
import Login from "@/components/Login";
import { AUTH_MODE } from "@/app/constants/auth";

const Page = () => {
  return <AuthLayout mode={AUTH_MODE.LOGIN}></AuthLayout>;
};

export default Page;
