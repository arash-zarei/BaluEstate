"use client";

import React from "react";
import Card from "@/modules/MyAdsPage/Card";

const DashBoardCard = ({ data }) => {
  return (
    <div className="flex flex-col items-center border-2 border-blue-600 py-5 px-8 rounded-lg">
      <Card data={data} />
      <div className="flex items-center gap-10 my-4">
        <button className="py-1 px-3 rounded-md font-semibold bg-yellow-400">
          ویرایش
        </button>
        <button className="py-1 px-3 rounded-md font-semibold bg-red-600 text-white">
          حدف
        </button>
      </div>
    </div>
  );
};

export default DashBoardCard;
