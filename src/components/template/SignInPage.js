"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { signIn } from "next-auth/react";

import Form from "@/modules/AuthPage/Form";
import Link from "next/link";

const SignInPage = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = value;

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const signInHandler = async () => {
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    console.log(res);

    if (!res.error) {
      toast.success("ورود موققیت آمیز بود.");
      router.replace("/advertisements");
    }
    if (res.error) toast.error(res.error);
  };

  return (
    <div className="w-full mt-10">
      <div className="flex flex-col items-center w-[70%] md:w-[50%] mx-auto">
        <Image
          src="/images/signin.png"
          alt="signup"
          width={512}
          height={512}
          className="w-[150px]"
        />
        <h3 className="text-2xl font-bold text-yellow-400 mt-4">ورود</h3>
        <Form
          title="ورود"
          email={value.email}
          password={value.password}
          changeHandler={changeHandler}
          signHandler={signInHandler}
          loading={loading}
        />
        <p className="mt-5">
          حساب کاربری ندارید؟
          <Link href="/signup" className="text-blue-600 underline">
            ثبت نام
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default SignInPage;
