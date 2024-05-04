import { FaArrowLeftLong } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-14">
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
              allowFullScreen="true"
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
          <div className="bg-cream text-white max-w-80 p-8 rounded-3xl">
            <img
              src="src/assets/images/leaves 2.png"
              alt=""
              className="w-10 h-10"
            />
            <div>
              <h4 className="text-2xl text-black mt-4 ">اجاره گیاهان</h4>
              <p className="text-sm text-gray my-5">
                اگر به دنبال افزودن فضای سبز به محل کار یا رویداد خود هستید،
                خدمات اجاره گیاه ما راه حل مناسبی است.
              </p>
            </div>
            <button className="text-base text-orange flex items-end gap-2">
              ادامه مطلب
              <FaArrowLeftLong />
            </button>
          </div>
          <div className="bg-green text-white max-w-80 p-8 rounded-3xl">
            <img
              src="src/assets/images/leaves 1.png"
              alt=""
              className="w-10 h-10"
            />
            <div>
              <h4 className="text-2xl mt-4">طراحی سفارشی</h4>
              <p className="text-sm my-5">
                ما معتقدیم که گیاهان باید بخشی جدایی ناپذیر از هر فضایی باشند و
                خدمات طراحی گیاهی سفارشی ما به ما اجازه می دهد تا منحصر به فرد
                ایجاد کنیم.
              </p>
            </div>
            <button className="text-base flex items-end gap-2">
              ادامه مطلب
              <FaArrowLeftLong />
            </button>
          </div>
          <div className="bg-cream text-white max-w-80 p-8 rounded-3xl">
            <img
              src="src/assets/images/leaves 2.png"
              alt=""
              className="w-10 h-10"
            />
            <div>
              <h4 className="text-2xl text-black mt-4 ">نگهداری از گیاهان</h4>
              <p className="text-sm text-gray my-5">
                گیاهان برای سالم ماندن و رشد نیاز به مراقبت و نگهداری منظم دارند
                و خدمات نگهداری از گیاهان ما تضمین می کند که گیاهان شما...
              </p>
            </div>
            <button className="text-base text-orange flex items-end gap-2">
              ادامه مطلب
              <FaArrowLeftLong />
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-4 px-10 rounded-full border text-sm md:text-base">
            همه خدمات را ببینید
          </button>
        </div>
      </div>
    </div>
  );
}
