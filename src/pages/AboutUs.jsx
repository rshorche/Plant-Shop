import Path from "../components/Path/Path";

export default function AboutUs() {
  return (
    <div className="px-4 sm:px-14">
      <Path />
      {/* section 1 */}
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 mt-28">
        <div className="max-w-lg md:min-w-96">
          <img src="src/assets/images/aboutUs1.png" alt="" className="w-full" />
        </div>

        <div className="max-w-lg">
          <h3 className="text-4xl md:text-5xl">
            به بهشت ما خوش آمدید شکوفا کردن و رشد کردن
          </h3>
          <p className="text-sm mt-6">
            در Bloom & Grow، ما علاقه زیادی به گیاهان و آوردن زیبایی طبیعت به
            خانه و محل کار مردم داریم. فروشگاه گیاهان ما 12 سال است که به جامعه
            پونتیاناک خدمت می کند و ما به انتخاب گسترده گیاهان با کیفیت بالا و
            تعهدمان به خدمات عالی به مشتریان افتخار می کنیم.
          </p>
          <p className="text-sm mt-6">
            کارکنان آگاه ما به مشتریان خود کمک می کنند تا گیاه مناسب برای
            نیازهای خود را پیدا کنند، چه یک ساکولنت کم نگهداری یا یک درخت
            سرپوشیده سرپوشیده. ما همچنین طیف وسیعی از محصولات و لوازم جانبی
            مراقبت از گیاه را ارائه می دهیم تا به مشتریان خود کمک کنیم تا گیاهان
            خود را سالم و شکوفا نگه دارند.
          </p>

          <div className="flex flex-wrap gap-4 text-center *:max-w-28 *:bg-[#F5F5F5] *:rounded-xl *:p-2 *:*:m-1 mt-6">
            <div>
              <span>12+</span>
              <p className="text-xs sm:text-sm">سال تجربه</p>
            </div>
            <div>
              <span>35+</span>
              <p className="text-xs sm:text-sm">فروشگاه </p>
            </div>
            <div>
              <span>321k+</span>
              <p className="text-xs sm:text-sm">مشتری راضی </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="bg-orange text-white py-4 px-10 rounded-full text-sm md:text-base md:px-7">
              اکنون خرید کنید
            </button>
            <button className="bg-white text-black py-4 px-10 rounded-full border text-sm md:text-base md:px-7">
              خدمات ما
            </button>
          </div>
        </div>
      </div>

      {/* section 2 */}
      <div className="text-center">
        <div>
          <h3 className="text-4xl md:text-5xl mt-20 md:mt-32">
            ماموریت ما ارائه گیاهان با کیفیت بالا
          </h3>
          <p className="max-w-3xl mx-auto mt-5 mb-8 text-sm ">
            در Bloom & Grow، ما علاقه زیادی به گیاهان و آوردن زیبایی طبیعت به
            خانه و محل کار مردم داریم. فروشگاه گیاهان ما به مدت 12 سال به جامعه
            پونتیاناج خدمات می دهد و ما به انتخاب گسترده گیاهان با کیفیت بالا و
            تعهدمان به خدمات عالی به مشتریان افتخار می کنیم.
          </p>
        </div>
        <div>
          <img src="src/assets/images/aboutUs2.png" alt="" />
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button className="bg-orange text-white py-4 px-10 rounded-full text-sm md:text-base md:px-7">
            اکنون خرید کنید
          </button>
          <button className="bg-white text-black py-4 px-10 rounded-full border text-sm md:text-base md:px-7">
            خدمات ما
          </button>
        </div>
      </div>

  
    </div>
  );
}
