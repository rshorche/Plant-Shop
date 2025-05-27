import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdCleaningServices } from "react-icons/md";
import { RiBloggerLine } from "react-icons/ri";
import { PiFolderUserThin } from "react-icons/pi";
import { MdWebAsset } from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";

export default function SideBar() {
  const logOut = () => {
    localStorage.removeItem("sb-pikczwjotvdrlpersqnz-auth-token");
  };
  return (
    <div className=" bg-white text-gray-500 shadow-md text-lg sm:text-base">
      <div className="flex flex-col  px-5 py-5 *:py-2 *:sm:pr-5 *:sm:w-44 *:md:w-56 *:flex *:items-center *:gap-2">
        <div className="mb-10">
          <img
            src="https://pikczwjotvdrlpersqnz.supabase.co/storage/v1/object/public/images/Logo/Logo_Logo.png"
            alt=""
          />
          <p className="text-xl hidden sm:block">گلدون</p>
        </div>
        <NavLink
          to={"/cms"}
          className={({ isActive }) =>
            isActive
              ? "text-xl sm:hover:bg-green sm:hover:text-white"
              : "text-xs sm:hover:bg-green sm:hover:text-white"
          }>
          <IoHomeOutline />
          <p className="hidden sm:block">خانه</p>
        </NavLink>

        <NavLink
          to={"ServiceRequest"}
          className={({ isActive }) =>
            isActive
              ? "text-xl sm:hover:bg-green sm:hover:text-white"
              : " sm:hover:bg-green sm:hover:text-white"
          }>
          <MdCleaningServices />
          <p className="hidden sm:block"> خدمات درخواستی</p>
        </NavLink>

        <NavLink
          to={"blogPostEditor"}
          className={({ isActive }) =>
            isActive
              ? "text-xl sm:hover:bg-green sm:hover:text-white"
              : " sm:hover:bg-green sm:hover:text-white"
          }>
          <RiBloggerLine />
          <p className="hidden sm:block">وبلاگ</p>
        </NavLink>

        <NavLink
          to={"UserManagement"}
          className="sm:hover:bg-green sm:hover:text-white">
          <PiFolderUserThin />
          <p className="hidden sm:block"> مدیریت کاربران</p>
        </NavLink>

        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-xl sm:hover:bg-green sm:hover:text-white"
              : " sm:hover:bg-green sm:hover:text-white"
          }>
          <MdWebAsset />
          <p className="hidden sm:block">صفحه اصلی</p>
        </NavLink>

        <NavLink
          onClick={logOut}
          to={"/auth"}
          className={({ isActive }) =>
            isActive
              ? "text-xl sm:hover:bg-green sm:hover:text-white"
              : " sm:hover:bg-green sm:hover:text-white"
          }>
          <FaSignOutAlt />
          <p className="hidden sm:block">خروج </p>
        </NavLink>
      </div>
    </div>
  );
}
