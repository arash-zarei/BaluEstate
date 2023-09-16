"use client";

import React from "react";

import { IoExitOutline } from "react-icons/io5";
import { signOut } from "next-auth/react";

const ButtonSignOut = () => {
  const signOutHandler = () => {
    signOut();
  };

  return (
    <button
      onClick={signOutHandler}
      className="flex items-center gap-2 mt-5 text-red-600"
    >
      <IoExitOutline />
      خروج
    </button>
  );
};

export default ButtonSignOut;
