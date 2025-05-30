import { useLocation } from "react-router-dom";

export default function Path() {
  const location = useLocation();
  const path = location.pathname;

  const pageNames = Object.fromEntries([
    ["/", "خانه"],
    ["/aboutUs", "درباره ما"],
    ["/OurTeam", "تیم ما"],
    ["/Blog", "وبلاگ"],
    ["/OurService", "خدمات"],
    ["/ContactUs", "تماس با ما"],
    ["/FAQ", "FAQ"],
  ]);

  const activePage = Object.keys(pageNames).filter((page) => page === path)[0];

  return (
    <>
      <div className="relative flex flex-col justify-center items-center mt-11 md:mt-28">
        <img
          src="https://pikczwjotvdrlpersqnz.supabase.co/storage/v1/object/public/images/other/leaf.png"
          alt=""
          className="absolute left-0 md:left-1/4 top-0 "
        />
        <h2 className="text-4xl md:text-7xl"> {pageNames[activePage]}</h2>
        <div className="my-10">
          <span className="text-orange">Home / </span>
          {path.slice(1)}
        </div>
        <img
          src="https://pikczwjotvdrlpersqnz.supabase.co/storage/v1/object/public/images/other/leaf.png"
          alt=""
          className="absolute right-0 md:right-1/4 bottom-0 "
        />
      </div>
      <hr className="w-full border-gray/10 mt-12 sm:mt-16 mb-20 sm:mb-24" />
    </>
  );
}
