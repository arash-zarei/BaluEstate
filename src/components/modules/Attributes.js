import Image from "next/image";
import React from "react";

const Attributes = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="attribute_card">
        <Image
          src="/images/fast.png"
          alt="دسترسی سریع"
          width={512}
          height={512}
          className="w-[100px]"
        />
        <p className="text-yellow-400 font-bold">دسترسی سریع</p>
      </div>
      <div className="attribute_card">
        <Image
          src="/images/counseling.png"
          alt="مشاورین خبره"
          width={512}
          height={512}
          className="w-[100px]"
        />
        <p className="text-yellow-400 font-bold">مشاورین خبره</p>
      </div>
      <div className="attribute_card">
        <Image
          src="/images/legal.png"
          alt="تعرفه قانونی"
          width={512}
          height={512}
          className="w-[100px]"
        />
        <p className="text-yellow-400 font-bold">تعرفه قانونی</p>
      </div>
      <div className="attribute_card">
        <Image
          src="/images/notarized.png"
          alt="قولنامه محضری"
          width={512}
          height={512}
          className="w-[100px]"
        />
        <p className="text-yellow-400 font-bold">قولنامه محضری</p>
      </div>
    </div>
  );
};

export default Attributes;
