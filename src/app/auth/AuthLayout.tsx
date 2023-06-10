"use client";
import React, { useState } from "react";
import InputAuth from "@/components/UI/InputAuth";
import AuthButton from "@/components/UI/AuthButton";
import Link from "next/link";
import { AUTH_MODE } from "@/constants/auth";
import { useAppDispatch } from "@/redux/hooks";
import { userLogin } from "@/redux/features/user/userSlice";
import { useRouter } from "next/navigation";
import axios from "axios";

interface AuthLayoutProps {
  mode: string;
}

const AuthLayout = ({ mode }: AuthLayoutProps) => {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, email: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, password: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (mode === AUTH_MODE.LOGIN) {
      try {
        const response = await axios.post(`http://localhost:5000/auth/login`, {
          email: userInput.email,
          password: userInput.password,
        });
        dispatch(userLogin());
        router.push("/");
        sessionStorage.setItem("token", `${response.data.token}`);
        console.log(response.data.token);
      } catch (e) {
        console.log("Error");
      }
    } else {
      try {
        const response = await axios.post(
          `http://localhost:5000/auth/registration`,
          {
            email: userInput.email,
            password: userInput.password,
          }
        );
        router.push("/auth/login");
        alert("Successful registration!");
        console.log(response.data.token);
      } catch (e) {
        console.log("Error");
      }
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="w-1/3 h-1/5 flex flex-col items-center justify-center">
        <div className=" text-white flex justify-center items-center flex-col ">
          <h1 className="text-5xl text-sky-500 mb-10">
            {mode === AUTH_MODE.LOGIN ? "Sign in" : "Sign up"}
          </h1>
          <label className="text-sky-500">Enter email</label>
          <InputAuth value={userInput.email} onChange={handleEmailChange} />
          <label className="text-sky-500">Enter password</label>
          <InputAuth
            value={userInput.password}
            onChange={handlePasswordChange}
          />
          <AuthButton onCLick={handleSubmit}>
            {mode === AUTH_MODE.LOGIN ? "Sign in" : "Sign up"}
          </AuthButton>
          {mode === AUTH_MODE.LOGIN ? (
            <p className="text-sky-500 text-xl mt-5">
              Don&apos;t have an account?{" "}
              <Link href="/auth/signup">
                <span className="text-sky-500">Sign up!</span>
              </Link>
            </p>
          ) : (
            <p className="text-sky-500 text-xl mt-5">
              Already have account?{" "}
              <Link href="/auth/login">
                <span className="text-sky-500">Sign in!</span>
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
