import { useState } from "react";
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  function toggleShowMenu() {
    setShowMenu((prevIsShow) => !prevIsShow);
  }
  function toggleShowSubMenu() {
    setShowSubMenu((prevIsShow) => !prevIsShow);
  }
  return (
    <>
      {/* Mobile Header */}
      <div className="relative flex justify-between items-center my-6 mx-4 text-sm sm:hidden">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center justify-between gap-2 text-black font-bold">
          <img src="src/assets/images/Logo/logo.png" alt="logo" />
          گلدون
        </a>
        {/* Menu Icon */}
        <IoMdMenu className="w-8 h-8" onClick={toggleShowMenu} />
        <div
          className={`absolute p-4  bg-green top-full w-full  ${
            !showMenu && "hidden"
          } animate-toggleMenu `}>
          <ul className="child:p-2 child-hover:bg-white">
            <li>
              <a href="#">خانه</a>
            </li>
            <li>
              <a href="#">درباره ما</a>
            </li>
            <li>
              <a href="#">خدمات</a>
            </li>
            <li>
              <a href="#">وبلاگ</a>
            </li>
            <li onClick={toggleShowSubMenu}>
              <a href="#" className="flex justify-between">
                صفحات
                <IoIosArrowDown />
              </a>
              <ul
                className={`absolute top-[95%] right-0 left-0 bg-green w-full px-4 child-hover:bg-white child:p-2 
                ${!showSubMenu && "hidden"}`}>
                <li className="mb-4">
                  <a href="#">ادامه صفحات</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* ********************************************************************** */}
      {/* PC Header */}
      <div className=" hidden sm:flex justify-between items-center my-6 mx-16 text-xs md:text-sm">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center justify-between gap-2 text-black font-bold text-sm md:text-base">
          <img src="src/assets/images/Logo/logo.png" alt="logo" />
          گلدون
        </a>
        {/* Menu */}
        <ul className="relative flex justify-between gap-8 md:gap-12 lg:gap-16 ">
          <li className="font-bold">
            <a href="#">خانه</a>
          </li>
          <li>
            <a href="#">درباره ما</a>
          </li>

          <li>
            <a href="#">وبلاگ</a>
          </li>
          <li className="group">
            <a href="#" className="flex gap-1">
              صفحات
              <IoIosArrowDown />
            </a>
            <ul className="absolute top-full w-44 p-4 shadow-md rounded  invisible group-hover:visible child:hover:bg-green child:hover:text-white child:p-2 child:rounded">
              <li>
                <a href="#">ادامه صفحات</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">خدمات</a>
          </li>
        </ul>
        {/* Countact us */}
        <button className="bg-green text-white py-4 px-7 rounded-full text-sm md:text-base md:px-7">
          ارتباط با ما
        </button>
      </div>
    </>
  );
}
