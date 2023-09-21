import React from "react";

import Sidebar from "@/modules/AdvertisementsPage/Sidebar";
import Card from "@/modules/MyAdsPage/Card";

const AdvertisementsPage = ({ data }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row gap-3 mb-4">
      <div className="w-full sm:w-[20%]">
        <Sidebar />
      </div>
      <div className="w-full sm:w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.length ? null : (
          <p className="text-red-700 bg-red-200 py-2 px-4 max-w-fit max-h-10 rounded-md">
            هیچ آگهی ثبت نشده است
          </p>
        )}
        {data.map((ads) => (
          <div key={ads._id}>
            <Card  data={ads} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertisementsPage;
