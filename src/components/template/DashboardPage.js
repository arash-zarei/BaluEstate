import React from "react";

const DashboardPage = ({ user }) => {
  return (
    <div className="w-full">
      <h3 className="text-2xl">سلام</h3>
      <p>با ثبت آگهیت اون رو به هزاران نفر نشون بده!</p>

      <div className="w-fit flex items-center gap-2 bg-yellow-400 rounded-md py-1 px-4 mt-11">
        <p>تاریخ عضویت:</p>
        <span>{new Date(user.createdAt).toLocaleDateString("fa-IR")}</span>
      </div>
    </div>
  );
};

export default DashboardPage;
