import { Outlet } from "react-router-dom";
import CmsSidebar from "../../parts/CmsSidebar/CmsSidebar";

export default function CmsHome() {
  return (
    <div className="flex">
      <CmsSidebar />
      <Outlet />
    </div>
  );
}
