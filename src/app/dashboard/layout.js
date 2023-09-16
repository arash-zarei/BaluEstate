import DashboardLayouts from "@/layout/DashboardLayout";

const DashboardLayout = ({ children }) => {
  return (
    <div className="w-full flex">
      <div className="w-[15%]">
        <DashboardLayouts />
      </div>
      <div className="w-[85%]">{children}</div>
    </div>
  );
};

export default DashboardLayout;
