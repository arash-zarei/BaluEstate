import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-end lg:flex-row items-center lg:justify-between gap-4 p-4 bg-blue-700 rounded-md text-white mb-3">
      <div className="max-w-3xl">
        <h3 className="text-xl mb-4 text-black font-bold">
          سامانه خرید و اجاره ملک
        </h3>
        <p>
          شرکت ما با بیش از ۱۰ سال تجربه در زمینه خرید و فروش ملک، رهن و اجاره،
          آماده خدمات حرفه‌ای به شما عزیزان هستیم. با تیمی مجرب و متخصص، در امور
          املاک شما را همراهی می‌کنیم و بهترین خدمات را به شما ارائه می‌دهیم.
          اگر به دنبال خرید، فروش یا رهن و اجاره ملک هستید، با ما تماس بگیرید و
          از خدمات حرفه‌ای ما بهره‌مند شوید. با تشکر از اعتماد شما به شرکت ما.
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
