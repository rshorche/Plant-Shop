import { Outlet, useLocation } from "react-router-dom";
import CmsSidebar from "../../parts/CmsSidebar/CmsSidebar";
import BlogPostEditor from "./BlogPostEditor";
import ServiceRequest from "./ServiceRequest";
import UserList from "./UserList";

export default function CmsHome() {
  let navigate = useLocation().pathname;
  console.log(navigate);
  return (
    <div className="flex">
      <CmsSidebar />
      {navigate === "/cms" ? (
        <div className="flex flex-col">
          <UserList />
          <ServiceRequest />
          <BlogPostEditor />
        </div>
      ) : (
        ""
      )}
      <Outlet />
    </div>
  );
}
