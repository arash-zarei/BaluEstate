import React from "react";

import { getServerSession } from "next-auth";
import { authOptions } from "@/api/auth/[...nextauth]/route"
import Link from "next/link";
import ButtonSignOut from "@/modules/LayoutDashboard/ButtonSignOut";

// Icons
import { CgProfile } from "react-icons/cg";
import { AiOutlineUser } from "react-icons/ai";
import { PiFlagBanner } from "react-icons/pi";
import { BiMessageSquareAdd } from "react-icons/bi";

const DashboardLayouts = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full shadow-lg shadow-gray-500 rounded-md py-5 px-4">
      <div className="w-full flex flex-col items-center gap-4 justify-center border-b-2 pb-3">
        <span className="w-[40px] h-[40px] flex justify-center items-center rounded-full bg-blue-500">
          <AiOutlineUser size={25} />
        </span>
        <p className="w-full overflow-x-auto text-center text-gray-500 font-semibold">
          {session?.user.email}
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
        </ul>
      </div>
      <ButtonSignOut />
    </div>
  );
};

export default DashboardLayouts;
