import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-end lg:flex-row items-center lg:justify-between gap-4 p-4 bg-blue-700 rounded-md text-white mb-3">
      <div className="max-w-3xl">
        <h3 className="text-xl mb-4 text-black font-bold">
          سامانه خرید و اجاره ملک
        </h3>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است.
        </p>
      </div>
      <div className="w-full lg:text-left lg:w-fit">
        <ul className="list-none lg:list-disc">
          <li>تعرفه قانونی</li>
          <li>دسترسی سریع</li>
          <li>مشاورین خبره</li>
          <li>قولنامه محضری</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
