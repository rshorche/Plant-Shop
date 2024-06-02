import Path from "../components/Path/Path";
import TeamBox from "../components/TeamBox/TeamBox";

export default function OurTeam() {
  const teamsDateals = [
    {
      id: 1,
      reverse: false,
      img: "https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Team/Team_user1.png",
      name: "سجاد زارع",
      Expertise: "متخصص گیاهان",
      description:
        "من عاشق کار در گلدان هستم زیرا می توانم هر روز اشتیاقم به گیاهان را با مشتریان به اشتراک بگذارم. وقتی که گیاه مناسب برای خانه یا محل کار خود را پیدا می کنند، دیدن روشن شدن چهره آنها بسیار لذت بخش است.",
    },
    {
      id: 2,
      reverse: true,
      img: "https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Team/Team_user2.png",
      name: "مهدی کریمی",
      Expertise: "متخصص گیاهان",
      description:
        "در گلدان، ما واقعاً به مشتریان خود اهمیت می دهیم و مطمئن می شویم که آنها یک تجربه عالی دارند. من افتخار می کنم که بخشی از تیمی هستم که مردم را در اولویت قرار می دهد",
    },
    {
      id: 3,
      reverse: false,
      img: "https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Team/Team_user3.png",
      name: "علی محمدی",
      Expertise: "متخصص گیاهان",
      description:
        "من دائماً تحت تأثیر فداکاری و کار سخت همکارانم در بلوم اند گرو هستم. احساس فوق‌العاده‌ای است که بخشی از چنین تیم هدایت‌شده‌ای باشید.",
    },
    {
      id: 4,
      reverse: true,
      img: "https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Team/Team_user4.png",
      name: "سعید مشکات",
      Expertise: "متخصص گیاهان",
      description:
        "گلدان شرکتی است که واقعا برای خلاقیت و نوآوری ارزش قائل است. من دوست دارم که ایده ها و کمپین های جدیدی برای کمک به رشد کسب و کارمان ارائه کنم",
    },
    {
      id: 5,
      reverse: false,
      img: "https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Team/Team_user5.png",
      name: "خسرو توکلی",
      Expertise: "متخصص گیاهان",
      description:
        "من واقعاً به وب سایتی که در گلدان ساخته ایم افتخار می کنم. کار کردن برای شرکتی که به کیفیت و توجه به جزئیات اهمیت می دهد بسیار خوب است.",
    },
  ];
  return (
    <div className="px-4 sm:px-14">
      <Path />
      <div className="text-center mb-28">
        <h2 className="text-4xl md:text-5xl">با مردم شادمان آشنا شوید!</h2>
        <p className="text-sm max-w-2xl mx-auto mt-5">
          در بلوم اند گرو، ما یک تیم اختصاصی از علاقه مندان به گیاهان داریم که
          مشتاق ارائه بهترین محصولات و خدمات ممکن به مشتریان خود هستند. اعضای
          تیم ما از پیشینه‌های متنوعی می‌آیند و دانش و تجربه زیادی را روی میز
          می‌آورند.
        </p>
      </div>
      <div>
        {teamsDateals.map((teamDateals) => (
          <TeamBox key={teamDateals.id} {...teamDateals} />
        ))}
      </div>
    </div>
  );
}
