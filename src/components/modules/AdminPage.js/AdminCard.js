"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ProgressBar } from "react-loader-spinner";
import { categories, icons } from "@/constants/categories";
import { sp } from "@/utils/replaceNumber";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AdminCard = ({ ads }) => {
  const [loading, setLoading] = useState(false);
  const [loadingDel, setLoadingDel] = useState(false);

  const router = useRouter();

  const { _id, title, price, category, location } = ads;

  const publishHandler = async () => {
    setLoading(true);
    const res = await fetch(`/api/ads/publish/${_id}`, {
      method: "PATCH",
    });
    const data = await res.json();

    setLoading(false);

    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };

  const deleteHandler = async () => {
    setLoadingDel(true);

    const res = await fetch(`/api/ads/deletebyadmin/${_id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    setLoadingDel(false);

    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.refresh();
    }
  };

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
      <div className="mt-6 flex items-center gap-3 flex-wrap">
        {loading ? (
          <ProgressBar
            height="40"
            width="40"
            ariaLabel="progress-bar-loading"
            wrapperClass="progress-bar-wrapper"
            borderColor="#1d4ed8"
            barColor="#facc15"
          />
        ) : (
          <button
            onClick={publishHandler}
            className="py-2 px-4 rounded-md bg-green-500 text-white"
          >
            تایید آگهی
          </button>
        )}
        <Link
          href={`advertisements/${_id}`}
          className="py-2 px-4 rounded-md bg-yellow-400 text-black"
        >
          بررسی جزییات آگهی
        </Link>
        {loadingDel ? (
          <ProgressBar
            height="40"
            width="40"
            ariaLabel="progress-bar-loading"
            wrapperClass="progress-bar-wrapper"
            borderColor="red"
            barColor="red"
          />
        ) : (
          <button
          onClick={deleteHandler}
          className="py-2 px-4 rounded-md bg-red-600 text-white"
        >
          حدف آگهی
        </button>
        )}
        
      </div>
    </div>
  );
};

export default AdminCard;
