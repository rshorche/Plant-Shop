import CustomerComments from "../components/CustomerComments/CustomerComments";
import Path from "../components/Path/Path";
import TeamUser from "../components/TeamUser/TeamUser";

export default function AboutUs() {
  const teamDateals = [
    {
      id: 1,
      img: "https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Users/Users_user1.jpeg",
      name: "سجاد زارع",
      Expertise: "متخصص گیاهان",
    },
    {
      id: 2,
      img: "https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Users/Users_user2.jpeg",
      name: "مهدی کریمی",
      Expertise: "متخصص گیاهان",
    },
    {
      id: 3,
      img: "https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Users/Users_user5.jpeg",
      name: "علی محمدی",
      Expertise: "متخصص گیاهان",
    },
  ];
  return (
    <div className="px-4 sm:px-14">
      <Path />
      {/* section 1 */}
      <div className="flex flex-wrap lg:flex-nowrap justify-between gap-8 mt-28">
        <div className="max-w-lg md:min-w-96">
          <img src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/AboutUs/aboutUs1.png" alt="" className="w-full" />
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
          <img src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/AboutUs/aboutUs2.png" alt="" />
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

      {/* section 3 */}
      <div className="mt-20 md:mt-36">
        <div>
          <h3 className="text-4xl md:text-5xl text-center">
            ما چه کسی هستیم: تیم گلدان{" "}
          </h3>
          <p className="text-sm max-w-2xl mx-auto mt-5">
            در گلدان، ما یک تیم اختصاصی از علاقه مندان به گیاهان داریم که مشتاق
            ارائه بهترین محصولات و خدمات ممکن به مشتریان خود هستند. اعضای تیم ما
            از پیشینه‌های متنوعی می‌آیند و دانش و تجربه زیادی را روی میز
            می‌آورند.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-10 md:flex-nowrap *:mx-auto text-center">
          {teamDateals.map((teamDatal) => (
            <TeamUser key={teamDatal.id} {...teamDatal} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-white text-black py-4 px-10 rounded-full border text-sm md:text-base md:px-7">
            همه تیم ما را ببینید
          </button>
        </div>
      </div>

      {/* section 4 */}
      <CustomerComments />
    </div>
  );
}
