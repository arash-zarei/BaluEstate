import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryCard = ({ name, title }) => {
  return (
    <div className="m-4 bg-white shadow-xl shadow-blue-200 rounded-md py-3 px-4 flex justify-center transition-all hover:rotate-[-15deg] hover:scale-[1.09]">
      <Link href="/" className="flex flex-col items-center gap-6">
        <Image
          src={`/images/${name}.png`}
          alt={title}
          width={240}
          height={144}
          priority={true}
          className="w-[200px] rounded-md"
        />
        <p className="font-bold text-blue-800">{title}</p>
      </Link>
    </div>
  );
};

export default CategoryCard;
