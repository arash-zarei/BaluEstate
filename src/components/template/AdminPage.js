import AdminCard from "@/modules/AdminPage.js/AdminCard";
import React from "react";

const AdminPage = ({ data }) => {
  
  return (
    <div className="w-full">
      {data.length ? (
        data.map((ads) => <AdminCard key={ads._id} ads={ads} />)
      ) : (
        <h3 className="text-green-700 bg-green-200 py-2 px-3 rounded-md"></h3>
      )}
    </div>
  );
};

export default AdminPage;
