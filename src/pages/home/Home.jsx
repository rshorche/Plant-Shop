/* eslint-disable no-unused-vars */
import { FaArrowLeftLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import supabase from "../../supabase";
import ServiceBox from "../../components/ServiceBox/ServiceBox";
import BlogPostBox from "../../components/BlogPostBox/BlogPostBox";

export default function Home() {
  let commentUsers = [
    {
      id: 1,
      name: "علی صادقی",
      desc: "    من عاشق گیاه جدیدم از گلدان هستم! کارکنان در انتخاب گیاه مناسب برای خانه ام بسیار مفید بودند.",
      img: "src/assets/images/Users/user1.jpeg",
    },
    {
      id: 2,
      name: "حسن چاقسوند",
      desc: "    من عاشق گیاه جدیدم از گلدان هستم! کارکنان در انتخاب گیاه مناسب برای خانه ام بسیار مفید بودند.",
      img: "src/assets/images/Users/user5.jpeg",
    },
  ];

  const [services, setServices] = useState([]);
  const [BlogPosts, setBlogPosts] = useState([]);

  async function fettchu() {
    let { data, error } = await supabase.from("OurService").select("*");
    setServices(data);
    console.log(data, error);
  }
  async function fetchBloPosts() {
    let { data, error } = await supabase.from("BlogPost").select("*");
    setBlogPosts(data);
  }
  useEffect(() => {
    fettchu();
    fetchBloPosts();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-14 font-Gandom">
      {/* section 1 */}
      <div className="flex gap-4 items-start lg:justify-between w-full overflow-hidden">
        {/* right */}
        <div className="relative hidden lg:block">
          <img
            src="src/assets/images/home 1.png"
            alt=""
            className="max-w-md "
          />
          <img
            src="src/assets/images/leaf.png"
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
                درباه ما
              </button>
              <button className="bg-white text-black py-4 px-10 rounded-full border text-sm md:text-base md:px-7">
                بیشتر بدانید
              </button>
            </div>
          </div>

          {/* comments & shopping cart  */}
          <div className="flex flex-wrap flex-row-reverse items-center justify-end gap-16 mt-24">
            {/* comments */}
            <div>
              {/* star */}
              <div className="flex gap-1">
                <img src="src/assets/images/star.png" alt="star" />
                <img src="src/assets/images/star.png" alt="star" />
                <img src="src/assets/images/star.png" alt="star" />
                <img src="src/assets/images/star.png" alt="star" />
                <img src="src/assets/images/star.png" alt="star" />
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
                  src="src/assets/images/users/user1.jpeg"
                  alt="profile"
                  className="rounded-full w-8 h-8"
                />
                <p>علی زارع</p>
              </div>
            </div>

            {/* shopping cart */}
            <div className="relative min-w-64 mt-8">
              <img
                src="src/assets/images/Featured-Plant.png"
                alt=""
                className="absolute -right-14 -top-20"
              />

              <div className="flex items-center bg-cream rounded-2xl">
                <img
                  src="src/assets/images/Flowers/Flower-Pots.png"
                  alt=""
                  className="absolute -left-4 bottom-3 w-40 h-40"
                />
                <div className="flex flex-col gap-4 py-3 pr-5">
                  <h4>گیاه ریحان تازه</h4>
                  <p>120,000 تومان</p>
                  <button className="bg-orange text-white py-1 px-4 rounded-full text-sm ">
                    توضیحات
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
              درباره ما
            </button>
          </div>
        </div>
        {/* left */}
        <div className="max-w-sm">
          <img src="src/assets/images/home 2.png" alt="" />
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
            همه خدمات را ببینید
          </button>
        </div>
      </div>

      {/* section  4 */}
      <div className="flex flex-wrap lg:flex-nowrap items-center lg:justify-evenly gap-8 w-full">
        {/* right */}
        <div className="max-w-md mt-10">
          <img src="src/assets/images/home 3.png" alt="" />
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
              موارد بیشتر
            </button>
          </div>
        </div>
      </div>

      {/* section  5 */}
      <div className="relative mt-20 md:mt-32 max-w-64 md:max-w-xl lg:max-w-[62rem]">
        {/* top */}
        <div>
          <img
            src="src/assets/images/Branch.png"
            alt=""
            className="absolute -top-20 right-0 -z-10"
          />
          <img
            src="src/assets/images/Branch-l.png"
            alt=""
            className="absolute -top-20 left-0 -z-10"
          />
          <h3 className="text-3xl md:text-5xl text-center">
            آنچه مشتریان ما می گویند
          </h3>
        </div>

        {/* bottom */}
        <div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}>
            {commentUsers.map((comment) => {
              return (
                <SwiperSlide key={comment.id}>
                  <div className="flex flex-wrap items-center justify-evenly gap-16 mt-24 mb-20">
                    {/* right */}
                    <div className="flex flex-col justify-center items-center sm:m-10">
                      <img
                        src="src/assets/images/home 4.png"
                        alt=""
                        className="absolute -z-10 md:max-w-md "
                      />
                      <p className="text-xs md:text-2xl max-w-96 ">
                        {comment.desc}
                      </p>
                      <img
                        src={comment.img}
                        alt=""
                        className="w-10 h-10 md:w-20 md:h-20 rounded-full"
                      />
                      <p className="text-xs md:text-xl"> {comment.name}</p>
                    </div>

                    {/* left */}
                    <div>
                      <iframe
                        className="rounded-2xl w-full overflow-hidden"
                        src="https://www.aparat.com/video/video/embed/videohash/Ijlac/vt/frame"
                        webkitallowfullscreen="true"
                        width="100%"
                        mozallowfullscreen="true"></iframe>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

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
            {BlogPosts.map((BlogPost) => (
              <BlogPostBox key={BlogPost.id} {...BlogPost} />
            ))}
          </div>
          <button className="bg-white text-black py-4 px-10 mt-8 rounded-full border text-sm md:text-base">
            موارد بیشتر
          </button>
        </div>
      </div>
    </div>
  );
}
