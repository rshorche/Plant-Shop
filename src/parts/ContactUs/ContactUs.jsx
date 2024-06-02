export default function ContactUs() {
  return (
    <div className="relative flex bg-cream rounded-3xl mt-48 mb-10 mx-4 sm:mx-14">
      <div className="p-6 lg:p-16">
        <h3 className="text-2xl sm:text-4xl max-w-md">
          ایجاد فضاهای زیبا با کمک کارشناسان گیاه، گلدان
        </h3>

        <p className="text-gray text-sm mt-4 mb-6 max-w-md">
          درگلدان، ما می دانیم که انتخاب گیاهان مناسب برای فضای شما می تواند یک
          کار دلهره آور باشد. به همین دلیل است که ما خدمات مشاوره شخصی گیاهی را
          برای کمک به شما در تصمیم گیری آگاهانه در مورد فضای سبز داخلی و خارجی
          خود ارائه می دهیم.
        </p>
        <button className="bg-orange text-white py-4 px-10 rounded-full text-sm md:text-base md:px-7">
          با ما تماس بگیرید
        </button>
      </div>
      <div className="hidden lg:block">
        <img
          src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/other/Bg.png"
          alt=""
          className="absolute left-10 -top-40 max-w-md"
        />
        <img
          src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Home/home_5.png"
          alt=""
          className="absolute left-0 -top-52 max-w-md"
        />
        <img
          src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/other/wave.png"
          alt=""
          className="absolute left-80 bottom-5 "
        />
        <img
          src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/other/leaf.png"
          alt=""
          className="absolute left-96 top-44 animate-rotateLeaf "
        />
        <img
          src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/other/stary2.png"
          alt=""
          className="absolute left-96 -top-32 "
        />
      </div>
    </div>
  );
}
