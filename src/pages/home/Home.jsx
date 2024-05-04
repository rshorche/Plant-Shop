export default function Home() {
  return (
    <div className="flex justify-center items-center px-4 sm:px-14">
      {/* section 1 */}
      <div className="flex gap-4 items-start lg:justify-between w-full overflow-hidden">
        {/* right */}
        <div>
          <img
            src="src/assets/images/home 1.png"
            alt=""
            className="max-w-md hidden lg:block"
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
    </div>
  );
}
