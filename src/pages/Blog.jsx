import { useEffect, useState } from "react";
import Path from "../components/Path/Path";
import { FaArrowLeftLong } from "react-icons/fa6";
import { getPostsFromSupabase } from "../Redux/store/Posts";
import { useDispatch, useSelector } from "react-redux";
import BlogPostBox from "../components/BlogPostBox/BlogPostBox";

export default function Blog() {
  const [activeMenu, setActiveMenu] = useState("همه");
  const menus = ["همه", "مراقبت از گیاه", "زندگی سبز", "طراحی و دکور"];
  const dispath = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispath(getPostsFromSupabase());
  }, []);

  const filterdMenus = posts.filter((post) => {
    if (post.title === activeMenu) {
      return post;
    }
    if (activeMenu === "همه") {
      return post;
    }
  });

  return (
    <div className="px-4 sm:px-14">
      <Path />

      <div>
        <h2 className="text-center text-4xl md:text-4xl mb-8">وبلاگ گلدان</h2>

        <ul className="flex justify-center flex-wrap gap-4 md:cursor-pointer">
          {menus.map((menu) => (
            <li
              key={menu}
              onClick={() => setActiveMenu(menu)}
              className={`py-2 md:py-4 px-3 md:px-10 rounded-full text-xs md:text-base transition-all ${
                menu === activeMenu
                  ? "text-orange border bg-none "
                  : "text-black bg-gray/10 border-none"
              }`}>
              {menu}
            </li>
          ))}
        </ul>

        <div className="flex lg:justify-center flex-wrap  gap-8 mt-16">
          <div>
            <img src="src/assets/images/Blog/blog1.png" alt="" />
          </div>

          <div className="max-w-lg">
            <span className="bg-green2 text-green3 text-sm px-3 py-[0.4rem] rounded-lg">
              زندگی سبز
            </span>
            <h3 className="text-2xl mt-5">
              فواید گیاهان سرپوشیده برای سلامتی و تندرستی شما
            </h3>
            <p className="text-sm mt-2">
              آیا به دنبال راهی برای تقویت روحیه و بهبود سلامت کلی خود هستید؟ به
              گیاهان داخلی نگاه نکنید! آنها نه تنها رنگ سبزی را به خانه شما
              اضافه می کنند، بلکه طیف وسیعی از مزایای سلامتی را نیز ارائه می
              دهند که می تواند سلامت جسمی و روانی شما را بهبود بخشد.
            </p>

            <button className="text-base flex items-end gap-2 text-orange my-5">
              ادامه مطلب
              <FaArrowLeftLong />
            </button>

            <div className="flex items-center gap-2">
              <img
                src="src/assets/images/Users/user1.jpeg"
                alt=""
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="text-base">علی زارع</h4>
                <span className="text-xs">همین حالا</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-16 mb-8">
          {filterdMenus.map((post) => (
            <BlogPostBox key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}
