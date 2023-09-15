import Image from "next/image";
import React from "react";

const Advertisement = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center justify-center my-10">
      <Image
        src="/images/email.png"
        alt="email"
        width={512}
        height={512}
        className="w-[300px]"
      />
      <div className="flex flex-col gap-8">
        <h2 className="text-2xl text-yellow-400 font-bold">
          برای با خبر شدن از<br></br> جدیدترین آگهی ها ایمیلت رو وارد کن.
        </h2>
        <input
          type="text"
          placeholder="ایمیلت رو وارد کن"
          className="py-2 px-4 outline-none border-black border-b-2"
        />
        <button className="py-1 px-2 rounded-md bg-blue-700 text-white">
          عضویت
        </button>
      </div>
    </div>
  );
};

export default Advertisement;
