/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import ServiceBox from "../components/ServiceBox/ServiceBox";
import BlogPostBox from "../components/BlogPostBox/BlogPostBox";

import { useDispatch, useSelector } from "react-redux";
import { getPostsFromSupabase } from "../Redux/store/Posts";
import { getServicesFromSupabase } from "../Redux/store/Services";
import { getCommentsFromSupabase } from "../Redux/store/Comments";
import CustomerComments from "../components/CustomerComments/CustomerComments";
import { Link } from "react-router-dom";

export default function Home() {
  const dispath = useDispatch();
  const posts = useSelector((state) => state.posts);
  const services = useSelector((state) => state.services);
  const comments = useSelector((state) => state.Comments);

  useEffect(() => {
    dispath(getPostsFromSupabase());
    dispath(getServicesFromSupabase());
    dispath(getCommentsFromSupabase());
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-14 font-Gandom">
      {/* section 1 */}
      <div className="flex gap-4 items-start lg:justify-between w-full overflow-hidden">
        {/* right */}
        <div className="relative hidden lg:block">
          <img
            src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Home/home_1.png"
            alt=""
            className="max-w-md "
          />
          <img
            src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/other/leaf.png"
            alt=""
            className="absolute top-56 -left-20 animate-rotateLeaf"
          />
        </div>
        {/* left */}
        <div className="mt-8">
          {/* description */}
          <div>
            <h3 className="max-w-[35rem] text-4xl tracking-tighter leading-tight">
              فضای خود را با گیاهان متحول کنید
            </h3>
            <p className="max-w-[33rem] text-sm mt-5">
              فضایی آرام و دلپذیر را در خانه یا محل کار خود ایجاد کنید طیف
              گسترده ای از گیاهان داخلی ما. از شاخ و برگ های سرسبز استوایی تا
              ساکولنت های کم نگهداری، ما همه چیزهایی را داریم که برای تقویت آن
              نیاز دارید فضای خود را و رنگ سبز را به زندگی خود بیاورید.
            </p>
            <div className="flex flex-wrap gap-4 text-base mt-6">
              <button className="bg-orange text-white py-4 px-10 rounded-full text-sm md:text-base md:px-7">
                <Link to={"AboutUs"}>درباه ما</Link>
              </button>
              <button className="bg-white text-black py-4 px-10 rounded-full border text-sm md:text-base md:px-7">
                <Link to={"faq"}>بیشتر بدانید</Link>
              </button>
            </div>
          </div>

          {/* comments & shopping cart  */}
          <div className="flex flex-wrap flex-row-reverse items-center justify-end gap-16 mt-24">
            {/* comments */}
            <div>
              {/* star */}
              <div className="flex gap-1">
                <img
                  src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/other/star.png"
                  alt="star"
                />
                <img
                  src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/other/star.png"
                  alt="star"
                />
                <img
                  src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/other/star.png"
                  alt="star"
                />
                <img
                  src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/other/star.png"
                  alt="star"
                />
                <img
                  src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/other/star.png"
                  alt="star"
                />
              </div>

              {/* title & description */}
              <div className="max-w-72 mt-6">
                <h4 className="text-base">گلدون رو به شدت توصیه می کنم</h4>
                <p className="text-xs mt-1">
                  من عاشق گیاه جدیدم از گلدون هستم! کارکنان در انتخاب گیاه مناسب
                  برای خانه ام بسیار مفید بودند.
                </p>
              </div>

              {/* user */}
              <div className="flex items-center gap-4 mt-3">
                <img
                  src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Users/Users_user1.jpeg"
                  alt="profile"
                  className="rounded-full w-8 h-8"
                />
                <p>علی زارع</p>
              </div>
            </div>

            {/* shopping cart */}
            <div className="relative min-w-64 mt-8">
              <img
                src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/other/Featured-Plant.png"
                alt=""
                className="absolute -right-14 -top-20"
              />

              <div className="flex items-center bg-cream rounded-2xl">
                <img
                  src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Flowers/Flowers_Flower-Pots.png"
                  alt=""
                  className="absolute -left-4 bottom-3 w-40 h-40"
                />
                <div className="flex flex-col gap-4 py-3 pr-5">
                  <h4>گیاه ریحان تازه</h4>
                  <p>120,000 تومان</p>
                  <button className="bg-orange text-white py-1 px-4 rounded-full text-sm ">
                    <Link to={"OurService"}>توضیحات</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section  2 */}
      <div className="flex flex-wrap md:flex-nowrap items-center lg:justify-evenly gap-4 w-full mt-36">
        {/* right */}
        <div className="max-w-md">
          <div>
            <h3 className="text-5xl tracking-tighter">
              ماموریت ما ارائه گیاهان با کیفیت بالا
            </h3>
            <p className="mt-5 text-sm">
              در گلدان، ما علاقه زیادی به گیاهان و آوردن زیبایی طبیعت به خانه و
              محل کار مردم داریم. فروشگاه گیاهان ما به مدت 12 سال به جامعه
              پونتیاناج خدمات می دهد و ما به انتخاب گسترده گیاهان با کیفیت بالا
              و تعهدمان به خدمات عالی به مشتریان افتخار می کنیم.
            </p>
          </div>
          <div className="my-8 max-w-sm">
            <iframe
              src="https://www.aparat.com/video/video/embed/videohash/Ijlac/vt/frame"
              webkitallowfullscreen="true"
              width="100%"
              mozallowfullscreen="true"></iframe>
          </div>
          <div>
            <button className="bg-white text-black py-4 px-10 rounded-full border text-sm md:text-base">
              <Link to={"OurTeam"}>درباره ما</Link>
            </button>
          </div>
        </div>
        {/* left */}
        <div className="max-w-sm">
          <img
            src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Home/home_2.png"
            alt=""
          />
        </div>
      </div>

      {/* section  3 */}
      <div>
        <div className="max-w-xl text-center mx-auto">
          <h3 className="text-5xl">خدمات ما</h3>
          <p className="text-sm mt-5">
            در گلدان، ما طیف وسیعی از خدمات را ارائه می دهیم تا به شما کمک کنیم
            زیبایی گیاهان را به خانه یا محل کار خود بیاورید. خدمات ما شامل نکات
            و مشاوره های مراقبت از گیاه، تحویل گیاه و نصب گیاه است.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-12">
          {services.map((service) => (
            <ServiceBox key={service.id} {...service} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-4 px-10 rounded-full border text-sm md:text-base">
            <Link to={"OurService"}>همه خدمات را ببینید</Link>
          </button>
        </div>
      </div>

      {/* section  4 */}
      <div className="flex flex-wrap lg:flex-nowrap items-center lg:justify-evenly gap-8 w-full">
        {/* right */}
        <div className="max-w-md mt-10">
          <img
            src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Home/home_3.png"
            alt=""
          />
        </div>

        {/* left */}
        <div>
          <div>
            <h3 className="text-2xl md:text-4xl max-w-lg ">
              چرا گلدان را به عنوان شریک گیاهان خود انتخاب کنید؟
            </h3>
          </div>
          <div className="my-8">
            <div className="flex gap-4 items-start">
              <p className="w-8 h-8 text-center leading-8 rounded-full bg-green text-white">
                1
              </p>
              <div>
                <h4 className="text-2xl">تجربه و تخصص</h4>
                <p className="text-sm max-w-md">
                  تیم ما از علاقه مندان باتجربه گیاهان به همه چیز سبز علاقه مند
                  است و ما به شما کمک می کنیم تا گیاهان مناسب برای فضای خود را
                  پیدا کنید.
                </p>
              </div>
            </div>
            <div className="flex gap-4 my-6 items-start">
              <p className="w-8 h-8 text-center leading-8 rounded-full bg-green text-white">
                2
              </p>
              <div>
                <h4 className="text-2xl"> پایداری </h4>
                <p className="text-sm max-w-md">
                  در گلدان ما متعهد به ترویج شیوه های گیاهی پایدار و محافظت از
                  سیاره خود هستیم.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <p className="w-8 h-8 text-center leading-8 rounded-full bg-green text-white">
                3
              </p>
              <div>
                <h4 className="text-2xl"> انجمن </h4>
                <p className="text-sm max-w-md">
                  ما معتقدیم که گیاهان چیزی بیش از اشیاء تزئینی هستند - آنها
                  راهی برای ارتباط با طبیعت و ایجاد حس اجتماعی هستند.
                </p>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-white text-black py-4 px-10 rounded-full border text-sm md:text-base">
              <Link to={"faq"}>موارد بیشتر</Link>
            </button>
          </div>
        </div>
      </div>

      {/* section  5 */}
      <CustomerComments />

      {/* section  6 */}
      <div className="mt-36">
        {/* top */}
        <div className="text-center mx-auto max-w-3xl">
          <h3 className="text-3xl sm:text-5xl">
            وبلاگ ما را برای الهام سبز کاوش کنید
          </h3>
          <p className="text-sm mt-5">
            وبلاگ ما پر از محتوای آموزنده و الهام بخش در مورد همه چیز سبز است.
            از نکات و توصیه های مراقبت از گیاهان گرفته تا آخرین روند در باغبانی
            و طراحی، کارشناسان ما دانش خود را به اشتراک می گذارند تا به شما کمک
            کنند تا فضاهای داخلی و خارجی خود را زنده کنید.
          </p>
        </div>

        {/* bottom */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-between gap-10 text-right">
            {posts.map((post) => (
              <BlogPostBox key={post.id} {...post} />
            ))}
          </div>
          <button className="bg-white text-black py-4 px-10 mt-8 rounded-full border text-sm md:text-base">
            <Link to={"Blog"}>موارد بیشتر</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
