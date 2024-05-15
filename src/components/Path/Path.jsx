import { useLocation } from "react-router-dom";

export default function Path() {
  const location = useLocation();
  const path = location.pathname;

  const pageNames = Object.fromEntries([
    ["/", "خانه"],
    ["/AboutUs", "درباره ما"],
  ]);

  const activePage = Object.keys(pageNames).filter((page) => page === path)[0];

  return (
    <div className="relative flex flex-col justify-center items-center mt-11 md:mt-28">
      <img
        src="src/assets/images/leaf.png"
        alt=""
        className="absolute left-0 md:left-1/4 top-0 "
      />
      <h2 className="text-4xl md:text-7xl"> {pageNames[activePage]}</h2>
      <div className="my-10">
        <span className="text-orange">Home / </span>
        {path.slice(1)}
      </div>
      <img
        src="src/assets/images/leaf.png"
        alt=""
        className="absolute right-0 md:right-1/4 bottom-0 "
      />
    </div>
  );
}
