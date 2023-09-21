import React from "react";

import Link from "next/link";
import { icons } from "@/constants/categories";

// Icons
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Card = ({ data }) => {
  const { _id, title, location, price, category } = data;

  return (
    <div className="w-full bg-gray-100 py-2 p-4 rounded-lg">
      <div className=" w-fit p-1 rounded-md text-blue-700 bg-blue-200 text-xl">
        {icons[category]}
      </div>
      <div className="flex flex-col gap-6 mt-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 flex gap-1">
          <CiLocationOn /> {location}{" "}
        </p>
        <p className="text-black">{price} تومان </p>
      </div>
      <Link
        href={`advertisements/${_id}`}
        className="flex flex-row-reverse justify-between items-center gap-x-12 mt-6 text-blue-700 font-bold"
      >
        <AiOutlineArrowLeft />
        مشاهده آگهی
      </Link>
    </div>
  );
};

export default Card;
