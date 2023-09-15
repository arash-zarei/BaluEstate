import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row my-10">
      <div className="w-full mb-4 lg:w-[50%]">
        <div className=" flex flex-col gap-5 mb-10">
          <h2 className="text-2xl font-bold">املاک بالو</h2>
          <h3 className="text-4xl font-semibold text-gray-500">
            محل بازار املاک و مستغلات
          </h3>
          <p>
            <span className="font-semibold text-lg">
              خرید، فروش و رهن و اجاره ملک؟
            </span>
            <br></br> ما همیشه در کنار شما هستیم. تجربه، حرفه‌ای بودن و اعتماد
            شما، همیشه در اولویت ماست.<br></br> با ما تماس بگیرید و بهترین خدمات
            را تجربه کنید.
          </p>
        </div>
        <div>
          <h3 className="text-xl text-yellow-400 font-bold mb-10">
            برای دسترسی به دنیا ایی از املاک کلیک کن!
          </h3>
          <button className="py-2 px-8 rounded-md bg-blue-700 text-white">
            شروع تجربه تازه
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[50%]">
        <Image
          src="/images/banner.png"
          alt="Banner"
          width={900}
          height={600}
          className="w-full rounded-xl"
        />
      </div>
    </div>
  );
};

export default Banner;
