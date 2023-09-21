import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import connectDB from "@/utils/connectDB";
import { authOptions } from "@/api/auth/[...nextauth]/route";
import User from "@/models/User";
import DashboardLayouts from "@/layout/DashboardLayout";
import AdminPage from "@/template/AdminPage";
import Ads from "@/models/Ads";

export const metadata = {
  title: "پنل ادمین سایت املاک بالو",
};

const Admin = async () => {
  await connectDB();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");

  const user = await User.findOne({ email: session.user.email });

  if (user.role !== "ADMIN") redirect("/dashboard");

  const ads = await Ads.find({ published: false });

  return (
    <div className="w-full flex flex-col md:flex-row gap-3 mt-10">
      <div className="w-full md:w-[20%]">
        <DashboardLayouts role={user.role} email={user.email} />
      </div>
      <div className="w-full my-10 md:w-[80%] md:my-0">
        <AdminPage data={ads} />
      </div>
    </div>
  );
};

export default Admin;
