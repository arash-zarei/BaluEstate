"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import Form from "@/modules/AuthPage/Form";
import Image from "next/image";
import Link from "next/link";

const SignUpPage = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const signUpHandler = async () => {
    setLoading(true);

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    });
    const data = await res.json();

    setLoading(false);

    if (data.message) {
      toast.success(data.message);
      router.replace("/signin");
    }
    if (data.error) toast.error(data.error);
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
          signHandler={signUpHandler}
          loading={loading}
        />
        <p className="mt-5">
          حساب کاربری دارید؟
          <Link href="/signin" className="text-blue-600 underline">
            ورود
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default SignUpPage;
