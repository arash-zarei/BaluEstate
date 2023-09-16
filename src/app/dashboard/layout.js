import DashboardLayouts from "@/layout/DashboardLayout";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const DashboardLayout = async ({ children }) => {

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/signup");
  }

  return (
    <div className="w-full flex flex-col md:flex-row gap-3 mt-10">
      <div className="w-full md:w-[20%]">
        <DashboardLayouts />
      </div>
      <div className="w-full my-10 md:w-[80%] md:my-0">{children}</div>
    </div>
  );
};

export default DashboardLayout;
