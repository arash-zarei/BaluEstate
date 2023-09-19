"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Card from "@/modules/MyAdsPage/Card";
import toast, { Toaster } from "react-hot-toast";
import { ProgressBar } from "react-loader-spinner";

const DashBoardCard = ({ data }) => {
  const [loading, setLoading] = useState(false);

  const id = data._id;
  const router = useRouter();

  const editHandler = () => {
    router.push(`/dashboard/my-ads/${id}`);
  };

  const deleteHandler = async () => {
    setLoading(true);

    const res = await fetch(`/api/ads/delete/${id}`, {
      method: "DELETE",
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

  return (
    <div className="flex flex-col items-center border-2 border-blue-600 py-5 px-8 rounded-lg">
      <Card data={data} />
      <div className="flex items-center gap-10 my-4">
        <button
          onClick={editHandler}
          className="py-1 px-3 rounded-md font-semibold bg-yellow-400"
        >
          ویرایش
        </button>
        {loading ? (
          <ProgressBar
            height="40"
            width="40"
            ariaLabel="progress-bar-loading"
            wrapperClass="progress-bar-wrapper"
            borderColor="red"
            barColor="#red"
            wrapperStyle={{ margin: "0 auto" }}
          />
        ) : (
          <button
            onClick={deleteHandler}
            className="py-1 px-3 rounded-md font-semibold bg-red-600 text-white"
          >
            حدف
          </button>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default DashBoardCard;
