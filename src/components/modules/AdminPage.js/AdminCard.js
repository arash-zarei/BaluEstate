import React from "react";
import { categories, icons } from "@/constants/categories";
import { sp } from "@/utils/replaceNumber";
import Link from "next/link";

const AdminCard = ({ ads }) => {
  const { _id, title, price, category, location } = ads;
  return (
    <div className="w-full border border-blue-700 rounded-md p-3 mt-3">
      <p className="text-black font-semibold text-xl">{title}</p>
      <p className="text-gray-600">{location}</p>
      <div className="flex items-center gap-2">
        <span className="py-1 px-3 rounded-md bg-blue-200 text-blue-800">
          {sp(price)}
          تومان
        </span>
        <span className="flex items-center gap-2 py-1 px-3 rounded-md bg-blue-200 text-blue-800">
          {icons[category]}
          {categories[category]}
        </span>
      </div>
      <div className="mt-6">
        <button className="ml-4 py-2 px-4 rounded-md bg-green-500 text-white">
          تایید آگهی
        </button>
        <Link
          href={`advertisements/${_id}`}
          className="ml-4 py-2 px-4 rounded-md bg-yellow-400 text-black"
        >
          بررسی جزییات آگهی
        </Link>
        <button className="ml-4 py-2 px-4 rounded-md bg-red-600 text-white">
          حدف آگهی
        </button>
      </div>
    </div>
  );
};

export default AdminCard;
