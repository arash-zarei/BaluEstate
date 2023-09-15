"use client";

import Form from "@/modules/AuthPage/Form";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const SignUpPage = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full mt-10">
      <div className="flex flex-col items-center w-[70%] md:w-[50%] mx-auto">
        <Image
          src="/images/signup.png"
          alt="signup"
          width={512}
          height={512}
          className="w-[150px]"
        />
        <h3 className="text-2xl font-bold text-yellow-400 mt-4">ثبت نام</h3>
        <Form
          title="ثبت نام"
          email={value.email}
          password={value.password}
          changeHandler={changeHandler}
        />
        <p className="mt-5">
          حساب کاربری دارید؟
          <Link href="/signup" className="text-blue-600 underline">
            ورود
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
