import React from "react";

import Link from "next/link";
import ButtonSignOut from "@/modules/LayoutDashboard/ButtonSignOut";

// Icons
import { CgProfile } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { PiFlagBanner } from "react-icons/pi";
import { BiMessageSquareAdd } from "react-icons/bi";
import { GrUserAdmin } from "react-icons/gr";

const DashboardLayouts = async ({ role, email }) => {
  return (
    <div className="w-full shadow-lg shadow-gray-500 rounded-md py-5 px-4">
      <div className="w-full flex flex-col items-center gap-4 justify-center border-b-2 pb-3">
        <span className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-blue-500">
          <AiOutlineUser size={25} />
        </span>
        <p className="text-xl font-semibold">
          {role === "ADMIN" ? "مدیر" : null}
        </p>
        <p className="w-full overflow-x-auto text-center text-gray-500 font-semibold">
          {email}
        </p>
      </div>
      <div>
        <ul>
          <li className="flex items-center gap-2 mt-5">
            <CgProfile />
            <Link href="/dashboard">حساب کاربری</Link>
          </li>
          <li className="flex items-center gap-2 mt-5">
            <PiFlagBanner />
            <Link href="/dashboard/my-ads">آگهی های من</Link>
          </li>
          <li className="flex items-center gap-2 mt-5">
            <BiMessageSquareAdd />
            <Link href="/dashboard/add">ثبت آگهی</Link>
          </li>
          {role === "ADMIN" ? (
            <li className="flex items-center gap-2 mt-5">
              <GrUserAdmin />
              <Link href="/admin">در انتظار تایید</Link>
            </li>
          ) : null}
        </ul>
      </div>
      <ButtonSignOut />
    </div>
  );
};

export default DashboardLayouts;
