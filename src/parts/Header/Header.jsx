import { useState } from "react";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const userId = JSON.parse(
    localStorage.getItem("sb-qsuxfyptieudendefeog-auth-token")
  )?.user.email;
  function toggleShowMenu() {
    setShowMenu((prevIsShow) => !prevIsShow);
  }
  function toggleShowSubMenu() {
    setShowSubMenu((prevIsShow) => !prevIsShow);
  }
  const myItem = localStorage.getItem("sb-qsuxfyptieudendefeog-auth-token");
  if (myItem) {
    console.log(myItem.access_token); // مقدار آیتم را چاپ کنید
  } else {
    console.log('آیتم "myItem" در localStorage یافت نشد.');
  }

  return (
    <>
      {/* Mobile Header */}
      <div className="relative flex justify-between items-center my-6 mx-4 text-sm sm:hidden z-10">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center justify-between gap-2 text-black font-bold">
          <img
            src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Logo/Logo_Logo.png"
            alt="logo"
          />
          گلدون
        </a>
        {/* Menu Icon */}
        <IoMdMenu className="w-8 h-8" onClick={toggleShowMenu} />
        <div
          className={`absolute p-4  bg-green top-full w-full  ${
            !showMenu && "hidden"
          } animate-toggleMenu `}>
          <ul className="*:p-2 *-hover:bg-white">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "font-bold" : "")}>
              خانه
            </NavLink>
            <li>
              <NavLink
                to={"AboutUs"}
                className={({ isActive }) => (isActive ? "font-bold" : "")}>
                درباره ما
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"OurService"}
                className={({ isActive }) => (isActive ? "font-bold" : "")}>
                خدمات
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"Blog"}
                className={({ isActive }) => (isActive ? "font-bold" : "")}>
                وبلاگ
              </NavLink>
            </li>
            <li onClick={toggleShowSubMenu}>
              <a href="#" className="flex justify-between">
                صفحات
                <IoIosArrowDown />
              </a>
              <ul
                className={`absolute top-[95%] right-0 left-0 bg-green w-full px-4 *-hover:bg-white *:p-2 
                ${!showSubMenu && "hidden"}`}>
                <li className="mb-4">
                  <NavLink
                    to={"OurTeam"}
                    className={({ isActive }) => (isActive ? "font-bold" : "")}>
                    تیم ما
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* ********************************************************************** */}
      {/* PC Header */}
      <div className=" hidden sm:flex justify-between items-center my-6 mx-16 text-xs md:text-sm z-10">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center justify-between gap-2 text-black font-bold text-sm md:text-base">
          <img
            src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Logo/Logo_Logo.png"
            alt="logo"
          />
          گلدون
        </a>
        {/* Menu */}
        <ul className="relative flex justify-between gap-8 md:gap-12 lg:gap-16 ">
          <li className="font-bold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "font-bold" : "font-normal"
              }>
              خانه
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"AboutUs"}
              className={({ isActive }) => (isActive ? "font-bold" : "")}>
              درباره ما
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"Blog"}
              className={({ isActive }) => (isActive ? "font-bold" : "")}>
              وبلاگ
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"OurService"}
              className={({ isActive }) => (isActive ? "font-bold" : "")}>
              خدمات
            </NavLink>
          </li>
          <li className="group">
            <a href="#" className="flex gap-1">
              صفحات
              <IoIosArrowDown />
            </a>
            <ul className="absolute top-full w-44 p-4 shadow-md rounded  invisible group-hover:visible *:hover:bg-green *:hover:text-white *:p-2 *:rounded">
              <li>
                <NavLink
                  to={"OurTeam"}
                  className={({ isActive }) => (isActive ? "font-bold" : "")}>
                  تیم ما
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
        {/* Countact us */}
        {userId ? (
          <Link
            to={"cms"}
            className="bg-green text-white py-4 px-7 rounded-full text-sm md:text-base md:px-7">
            {userId.replace(/@.*/, "")}
          </Link>
        ) : (
          <Link
            to={"auth"}
            className="bg-green text-white py-4 px-7 rounded-full text-sm md:text-base md:px-7">
            ورود / ثبت نام
          </Link>
        )}
      </div>
    </>
  );
}
