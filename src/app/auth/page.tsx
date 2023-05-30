import React from "react";
import AuthLayout from "@/app/auth/AuthLayout";
import NavbarLayout from "@/components/UI/NavbarLayout";

const Page = () => {
  return (
    <NavbarLayout>
      <AuthLayout>
        <div>jello</div>
      </AuthLayout>
    </NavbarLayout>
  );
};

export default Page;
