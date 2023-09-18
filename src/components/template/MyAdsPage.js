import DashBoardCard from "@/modules/MyAdsPage/DashBoardCard";
import React from "react";

const MyAdsPage = ({ ads }) => {
  return (
    <div className="w-full mb-5">
      {ads.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ads.map((item) => (
            <DashBoardCard key={item._id} data={JSON.parse(JSON.stringify(item))} />
          ))}
        </div>
      ) : (
        <p className="py-2 px-3 rounded-md bg-red-200 text-red-800 font-semibold">
          هیچ آگهی ثبت نشده است!
        </p>
      )}
    </div>
  );
};

export default MyAdsPage;
