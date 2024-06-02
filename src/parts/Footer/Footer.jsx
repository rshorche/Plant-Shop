export default function Footer() {
  return (
    <div className="flex flex-wrap justify-between items-start text-black text-xs mx-6 md:mx-14 my-16 *:mt-8">
      {/* section 1 */}
      <div>
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 text-black font-bold text-sm md:text-base">
          <img
            src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Logo/Logo_Logo.png"
            alt="logo"
          />
          گلدون
        </a>
        {/* Aboute */}
        <p className="max-w-72 my-8 text-sm text-gray">
          در گلدون , ما نسبت به گیاهان شور و شوق داریم و زیبایی طبیعت را به
          خانه‌ها و محل‌های کار شما می آوریم .
        </p>
        {/* Social */}
        <div className="flex gap-3">
          <img
            src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Social/Social_Twitter.png"
            alt=""
          />
          <img
            src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Social/Social_Facebook.png"
            alt=""
          />
          <img
            src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Social/Social_Instagram.png"
            alt=""
          />
        </div>
      </div>

      {/* section 2 */}
      <div className="flex gap-12">
        {/* menu 1 */}
        <ul className="*:mt-6">
          <span className="text-base text-green">دسترسی سریع</span>
          <li>
            <a href="#">خانه</a>
          </li>
          <li>
            <a href="#">فروشگاه</a>
          </li>
          <li>
            <a href="#">خدمات</a>
          </li>
          <li>
            <a href="#">وبلاگ</a>
          </li>
          <li>
            <a href="#">سبد خرید</a>
          </li>
        </ul>
        {/* menu 2 */}
        <ul className="*:mt-6">
          <span className="text-base text-green">پشتیبانی</span>
          <li>
            <a href="#">درباره ما</a>
          </li>
          <li>
            <a href="#">ارتباط با ما</a>
          </li>
          <li>
            <a href="#">سوالات متداول</a>
          </li>
          <li>
            <a href="#">شرایط و ضوابط</a>
          </li>
          <li>
            <a href="#">سیاست حفظ حریم خصوصی</a>
          </li>
        </ul>
      </div>

      {/* section 3 */}
      <div>
        <span className="text-base text-green">در تماس باشید</span>
        <ul className="*:flex *:items-center *:gap-2 *:mt-6">
          <li>
            <img
              src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Contact-us/Contact-us_map.png"
              alt="نقشه"
            />
            <p className="max-w-48">
              123 Anywhere Street, Any City, 12345 ST, Indonesia
            </p>
          </li>
          <li>
            <img
              src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Contact-us/Contact-us_email.png?t=2024-06-02T06%3A36%3A12.055Z"
              alt="ایمیل"
            />
            <p>rshorche@gmai.com</p>
          </li>
          <li>
            <img
              src="https://qsuxfyptieudendefeog.supabase.co/storage/v1/object/public/images/Contact-us/Contact-us_call.png"
              alt="تماس"
            />
            <p>0937-745-7370</p>
          </li>
        </ul>
      </div>

      {/* section 4 */}
      <div className="flex flex-col justify-between h-56">
        <span className="text-base text-green">خبرنامه</span>
        <div className="relative flex justify-between items-center mb-8">
          <input
            type="text"
            placeholder="ایمیل خود را وارد کنید"
            className="absolut outline-none rounded-full border-solid border px-4 w-full h-14 text-gray"
          />
          <button className="absolute left-1 bg-orange text-white  py-3 px-6 rounded-full text-sm md:text-base md:px-7">
            عضویت
          </button>
        </div>
        <p>© Copyright 2024, طراحی شده توسط رضا شورچه</p>
      </div>
    </div>
  );
}
