import User from "@/models/User";
import connectDB from "@/utils/connectDB";
import DashboardLayouts from "@/layout/DashboardLayout";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "پنل کاربری سایت املاک بالو",
};

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signup");
  }

  await connectDB();
  const user = await User.findOne({ email: session.user.email });

  return (
    <div className="w-full flex flex-col md:flex-row gap-3 mt-10">
      <div className="w-full md:w-[20%]">
        <DashboardLayouts role={user.role} email={user.email} />
      </div>
      <div className="w-full my-10 md:w-[80%] md:my-0">{children}</div>
    </div>
  );
};

export default DashboardLayout;
