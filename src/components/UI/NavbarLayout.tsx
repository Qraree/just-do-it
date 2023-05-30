"use client";
import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { userLogout } from "@/redux/features/user/userSlice";

interface NavbarLayoutProps {
  children: React.ReactNode;
}
const NavbarLayout = ({ children }: NavbarLayoutProps) => {
  const isUserAuth = useAppSelector((state) => state.users.authorized);
  const dispatch = useAppDispatch();

  const userLogoutFunc = () => {
    dispatch(userLogout());
  };

  return (
    <div>
      <div className="w-full bg-sky-500 p-5 text-white text-2xl overflow-hidden flex justify-between">
        <div className="group w-1/12">
          <span className="transition-all group-hover:hidden">jdi</span>
          <span className="hidden group-hover:block">just do it</span>
        </div>
        <div className="w-1/7 flex justify-around">
          {isUserAuth ? (
            <Link
              href="/auth"
              onClick={userLogoutFunc}
              className="hover:bg-sky-600 transition-all p-2 text-base"
            >
              Log out
            </Link>
          ) : null}
        </div>
      </div>
      {children}
    </div>
  );
};

export default NavbarLayout;
