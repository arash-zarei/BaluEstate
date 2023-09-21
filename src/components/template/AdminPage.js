import AdminCard from "@/modules/AdminPage.js/AdminCard";
import React from "react";
import { Toaster } from "react-hot-toast";

const AdminPage = ({ data }) => {
  return (
    <div className="w-full">
      {data.length ? (
        data.map((ads) => (
          <AdminCard key={ads._id} ads={JSON.parse(JSON.stringify(ads))} />
        ))
      ) : (
        <h3 className="text-green-700 bg-green-200 py-2 px-3 rounded-md">
          آگهی در انتظار تایید وجود ندارد.
        ÷</h3>
      )}
      <Toaster />
    </div>
  );
};

export default AdminPage;
