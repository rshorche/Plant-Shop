import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdCleaningServices } from "react-icons/md";
import { RiBloggerLine } from "react-icons/ri";
import { LiaCommentsSolid } from "react-icons/lia";
import { PiFolderUserThin } from "react-icons/pi";

export default function SideBar() {
  return (
    <div className=" bg-white text-gray-500 shadow-md text-lg sm:text-base">
      <div className="flex flex-col  px-5 py-5 *:py-2 *:sm:pr-5 *:sm:w-44 *:md:w-56 *:flex *:items-center *:gap-2">
        <div className="mb-10">
          <img
            src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Logo/Logo_Logo.png"
            alt=""
          />
          <p className="text-xl hidden sm:block">گلدون</p>
        </div>
        <Link
          to={"/cms"}
          className="text-xl sm:hover:bg-green sm:hover:text-white">
          <IoHomeOutline />
          <p className="hidden sm:block">خانه</p>
        </Link>
        <a href="#" className="sm:hover:bg-green sm:hover:text-white">
          <MdCleaningServices />
          <p className="hidden sm:block"> خدمات درخواستی</p>
        </a>
        <Link
          to={"blogPostEditor"}
          className="sm:hover:bg-green sm:hover:text-white">
          <RiBloggerLine />
          <p className="hidden sm:block">وبلاگ</p>
        </Link>
        <a href="#" className="sm:hover:bg-green sm:hover:text-white">
          <PiFolderUserThin />
          <p className="hidden sm:block"> مدیریت کاربران</p>
        </a>
        <a href="#" className="sm:hover:bg-green sm:hover:text-white">
          <LiaCommentsSolid />
          <p className="hidden sm:block">نظرات</p>
        </a>
      </div>
    </div>
  );
}
